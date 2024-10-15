import { z } from "zod";

export const messageSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(50, { message: "First name cannot be more than 50 characters" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(50, { message: "Last name cannot be more than 50 characters" }),
    email: z
        .string()
        .max(254, {
            message: "Email address cannot be longer than 254 characters",
        })
        .email({ message: "Invalid email address" }),
    phoneNo: z
        .string()
        .max(20, { message: "Phone number cannot be more than 20 characters" })
        .optional(),
    websiteUrl: z
        .string()
        .max(500, { message: "Website URL cannot be more than 500 characters" })
        .optional(),
    content: z
        .string()
        .min(10, { message: "Message cannot be less than 10 characters" })
        .max(1000, { message: "Message cannot be more than 1000 characters" }),
});
