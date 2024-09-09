"use client"

import { usePathname } from "@/i18n.config";

const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;
const path = usePathname();

async function getStrapiData() {
    const data = await fetch(`${backendLink}/api/aktualnoscis-workts?sort=id:desc&locale=${path}`,

        {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            },
        }
    );
    console.log(data);
    return data.json();
}