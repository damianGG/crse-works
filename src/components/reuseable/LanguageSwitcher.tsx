"use client"

import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname(); // Get the current URL path

    // Check if URL contains "/pl", "/uk", or "/en" to determine locale
    const isPolishLocale = pathname.includes('/pl');
    const isUkrainianLocale = pathname.includes('/uk');
    const isEnglishLocale = pathname.includes('/en');

    // Function to determine the appropriate text based on the locale
    const getTextByLocale = () => {
        if (isPolishLocale) return "Zapisz się"; // Polish
        if (isUkrainianLocale) return "Зареєструватися"; // Ukrainian
        return "Sign up"; // Default to English
    };

    return (

        <span>
            {getTextByLocale()}
        </span>

    );
}