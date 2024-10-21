'use client';

import React, { useState } from 'react';
import {
    useForm,
    Controller,
    ControllerRenderProps,
    ControllerFieldState,
} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from '@/lib/send-mail';
import { toast } from 'sonner';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Please enter your name' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    phone: z
        .string()
        .min(9, { message: 'Please enter a valid phone number' })
        .regex(/^\d+$/, { message: 'Phone number can contain only digits' }),
});

export default function ContactFormEnglish() {
    const [submitted, setSubmitted] = useState(false); // Tracking the form submission state

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
    });

    const { control, handleSubmit, formState } = form;
    const isLoading = formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        const mailText = `Name: ${values.name}\nEmail: ${values.email}\nPhone number: ${values.phone}`;
        const response = await sendMail({
            email: values.email,
            subject: 'Contact Form Submission',
            text: mailText,
        });
        if (response?.messageId) {
            toast.success('Form submitted successfully.');
            setSubmitted(true); // Set the state to true after submission
        } else {
            toast.error('Error sending email');
        }
    };

    return (
        <form className="p-4 lg:p-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name:
                </label>
                <Controller
                    control={control}
                    name="name"
                    render={({
                        field,
                        fieldState,
                    }: {
                        field: ControllerRenderProps<z.infer<typeof contactFormSchema>, 'name'>;
                        fieldState: ControllerFieldState;
                    }) => (
                        <div>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                {...field}
                                className={`form-control ${fieldState.error ? 'is-invalid' : ''}`}
                                disabled={submitted} // Disable the field after submission
                            />
                            {fieldState.error && (
                                <div className="invalid-feedback">{fieldState.error.message}</div>
                            )}
                        </div>
                    )}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address:
                </label>
                <Controller
                    control={control}
                    name="email"
                    render={({
                        field,
                        fieldState,
                    }: {
                        field: ControllerRenderProps<z.infer<typeof contactFormSchema>, 'email'>;
                        fieldState: ControllerFieldState;
                    }) => (
                        <div>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                className={`form-control ${fieldState.error ? 'is-invalid' : ''}`}
                                disabled={submitted}
                            />
                            {fieldState.error && (
                                <div className="invalid-feedback">{fieldState.error.message}</div>
                            )}
                        </div>
                    )}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                    Phone number:
                </label>
                <Controller
                    control={control}
                    name="phone"
                    render={({
                        field,
                        fieldState,
                    }: {
                        field: ControllerRenderProps<z.infer<typeof contactFormSchema>, 'phone'>;
                        fieldState: ControllerFieldState;
                    }) => (
                        <div>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="123456789"
                                {...field}
                                className={`form-control ${fieldState.error ? 'is-invalid' : ''}`}
                                disabled={submitted}
                            />
                            {fieldState.error && (
                                <div className="invalid-feedback">{fieldState.error.message}</div>
                            )}
                        </div>
                    )}
                />
            </div>
            <div className="form-text mt-3">
                <p className="small text-muted">
                    The data provided in the form will be processed to handle your request,
                    in accordance with its scope, based on the rules contained in the document named &nbsp;
                    <a className="link-primary" href="" target="_blank" rel="noopener noreferrer">
                        Information on personal data processing.
                    </a>
                </p>
            </div>
            <button
                type="submit"
                disabled={isLoading || submitted} // Disable the button after submission
                className="btn btn-primary"
            >
                {submitted
                    ? 'Thank you for your message, we will contact you.'
                    : isLoading
                        ? 'Sending...'
                        : 'Submit'}
            </button>
        </form>
    );
}
