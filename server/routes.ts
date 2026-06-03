import type { Express } from "express";
import { type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { sendEmail } from "./email";

const ADMIN_EMAIL = "info@delightfilms.co.za";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/send-mail", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: result.error.flatten().fieldErrors,
        });
      }

      const { name, email, projectType, message } = result.data;

      const projectTypeLabels: Record<string, string> = {
        film: "Movies & Series",
        commercial: "Commercial",
        "music-video": "Music Video",
        "motion-graphics": "Motion Graphics",
        other: "Other",
      };

      const adminEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #f97316; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; }
            .value { margin-top: 5px; }
            .footer { background: #1a1a1a; color: #999; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Project Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Project Type:</div>
                <div class="value">${projectTypeLabels[projectType] || projectType}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              DeLight Films - Professional Film Production
            </div>
          </div>
        </body>
        </html>
      `;

      const userEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #f97316; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px 20px; border: 1px solid #ddd; }
            .footer { background: #1a1a1a; color: #999; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
            .cta { background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for your interest in DeLight Films. We have received your project inquiry and our team will review it shortly.</p>
              <p>We typically respond within 24-48 hours during business days. In the meantime, feel free to explore our portfolio or contact us directly if you have any urgent questions.</p>
              <p><strong>Your Project Details:</strong></p>
              <ul>
                <li>Project Type: ${projectTypeLabels[projectType] || projectType}</li>
              </ul>
              <p>We look forward to discussing your project with you!</p>
              <p>Best regards,<br>The DeLight Films Team</p>
              <div style="text-align: center;">
                <a href="tel:0680677789" class="cta">Call Us: 068 067 7789</a>
              </div>
            </div>
            <div class="footer">
              <p>DeLight Films - Professional Film Production</p>
              <p>068 067 7789 | 066 152 7576</p>
              <p>info@delightfilms.co.za</p>
            </div>
          </div>
        </body>
        </html>
      `;

      if (!process.env.INBOUND_API_KEY) {
        console.error("INBOUND_API_KEY is not configured");
        return res.status(503).json({
          success: false,
          message: "Email service is not configured. Please contact us directly by phone.",
        });
      }

      try {
        const adminSent = await sendEmail(
          ADMIN_EMAIL,
          `New Project Inquiry from ${name}`,
          adminEmailHtml
        );

        const userSent = await sendEmail(
          email,
          "Thank you for contacting DeLight Films",
          userEmailHtml
        );

        if (!adminSent || !userSent) {
          return res.status(503).json({
            success: false,
            message: "Email service is not configured. Please contact us directly by phone.",
          });
        }

        return res.json({
          success: true,
          message: "Your message has been sent successfully!",
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        return res.status(500).json({
          success: false,
          message: "Failed to send email. Please try again or contact us by phone.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  return httpServer;
}