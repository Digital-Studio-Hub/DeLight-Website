import { Inbound } from "inboundemail";

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found - emails will not be sent");
}

const client = apiKey ? new Inbound({ apiKey }) : null;
const FROM_EMAIL = "Cledwyn from Lekker Network <cledwyn@lekker.network>";

export async function sendEmail(to: string, subject: string, htmlBody: string) {
  if (!client) {
    console.error("INBOUND_API_KEY is not configured");
    return false;
  }

  await client.emails.send({
    from: FROM_EMAIL,
    to,
    subject,
    html: htmlBody,
  });

  return true;
}
