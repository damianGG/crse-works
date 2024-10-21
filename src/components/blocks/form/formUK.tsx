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
    name: z.string().min(2, { message: 'Будь ласка, введіть своє ім’я' }),
    email: z.string().email({ message: 'Будь ласка, введіть правильну електронну адресу' }),
    phone: z
        .string()
        .min(9, { message: 'Будь ласка, введіть правильний номер телефону' })
        .regex(/^\d+$/, { message: 'Номер телефону може містити лише цифри' }),
});

export default function ContactFormUkrainian() {
    const [submitted, setSubmitted] = useState(false); // Стан відстеження надсилання форми

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
        const mailText = `Ім'я: ${values.name}\nEmail: ${values.email}\nНомер телефону: ${values.phone}`;
        const response = await sendMail({
            email: values.email,
            subject: 'Надіслано форму з сайту czaskobiet.com.pl',
            text: mailText,
        });
        if (response?.messageId) {
            toast.success('Форму успішно надіслано.');
            setSubmitted(true); // Встановлюємо стан на true після надсилання
        } else {
            toast.error('Помилка під час надсилання електронного листа');
        }
    };

    return (
        <form className="p-4 lg:p-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Ім’я та прізвище:
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
                                placeholder="Іван Коваль"
                                {...field}
                                className={`form-control ${fieldState.error ? 'is-invalid' : ''}`}
                                disabled={submitted} // Деактивуємо поле після надсилання
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
                    Адреса електронної пошти:
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
                                placeholder="ivan@example.com"
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
                    Номер телефону:
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
                    Дані, подані у формі, будуть оброблені для розгляду вашого запиту,
                    відповідно до його обсягу, згідно з правилами, викладеними в документі під назвою &nbsp;
                    <a className="link-primary" href="" target="_blank" rel="noopener noreferrer">
                        Інформація про обробку персональних даних.
                    </a>
                </p>
            </div>
            <button
                type="submit"
                disabled={isLoading || submitted} // Деактивуємо кнопку після надсилання
                className="btn btn-primary"
            >
                {submitted
                    ? 'Дякуємо за повідомлення, ми зв’яжемося з вами.'
                    : isLoading
                        ? 'Надсилання...'
                        : 'Надіслати'}
            </button>
        </form>
    );
}
