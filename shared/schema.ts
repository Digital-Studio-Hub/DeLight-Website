import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const users = {
  id: "",
  username: "",
  password: "",
};

export type InsertUser = {
  username: string;
  password: string;
};

export type User = {
  id: string;
  username: string;
  password: string;
};