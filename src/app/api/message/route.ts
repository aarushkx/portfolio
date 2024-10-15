import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import MessageModel from "@/models/message";
import { messageSchema } from "@/schemas/messageSchema";

export const POST = async (request: NextRequest) => {
    await dbConnect();

    try {
        const body = await request.json();
        const result = messageSchema.safeParse(body);

        if (!result.success) {
            console.log("VALIDATION ERROR: ", result.error.errors);

            return NextResponse.json(
                {
                    success: false,
                    message: "Validation error",
                    errors: result.error.errors,
                },
                {
                    status: 400,
                }
            );
        }

        const { firstName, lastName, email, phoneNo, websiteUrl, content } =
            result.data;

        const newMessage = new MessageModel({
            firstName,
            lastName,
            email,
            phoneNo,
            websiteUrl,
            content,
            createdAt: new Date(),
        });

        await newMessage.save();

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.log("ERROR SENDING MESSAGE: ", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message",
            },
            {
                status: 500,
            }
        );
    }
};
