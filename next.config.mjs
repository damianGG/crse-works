import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Dodaj domenę res.cloudinary.com do listy dozwolonych domen
    },
};

export default withNextIntl(nextConfig);