import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo?: string;
    websiteUrl?: string;
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String },
    websiteUrl: { type: String },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});

const MessageModel =
    (mongoose.models.Message as mongoose.Model<Message>) ||
    mongoose.model<Message>("Message", MessageSchema);

export default MessageModel;
