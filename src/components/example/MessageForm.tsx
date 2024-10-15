"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export default function MessageForm() {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        websiteUrl: "",
        content: "",
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await axios.post("/api/message", {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNo: formData.phoneNo,
                websiteUrl: formData.websiteUrl,
                content: formData.content,
            });

            if (response.status === 200) {
                toast({
                    title: "Success",
                    description: "Message sent successfully!",
                    variant: "default",
                });

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNo: "",
                    websiteUrl: "",
                    content: "",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 pt-0 md:p-8 md:pt-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-1 pt-0">
                Type your message here
            </h3>
            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-row gap-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                            id="firstName"
                            placeholder="John"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                            id="lastName"
                            placeholder="Doe"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="johndoe@me.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phoneNo">Phone No. (Optional)</Label>
                    <Input
                        id="phoneNo"
                        placeholder="9876543210"
                        type="text"
                        value={formData.phoneNo}
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="websiteUrl">Website URL (Optional)</Label>
                    <Input
                        id="websiteUrl"
                        placeholder="www.example.com"
                        type="text"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="content">Message</Label>
                    <TextArea
                        id="content"
                        placeholder="Type your message..."
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </LabelInputContainer>
                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={submitting}
                >
                    {submitting ? "Please Wait..." : "Submit"}
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
