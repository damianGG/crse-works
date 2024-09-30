import createMiddleware from 'next-intl/middleware';
    
    export default createMiddleware({
        // A list of all locales that are supported
        locales: ['pl', 'uk','en'],
        // Used when no locale matches
        defaultLocale: 'pl',
    });
    
    export const config = {
        // Match only internationalized pathnames
        matcher: ['/', '/(pl|uk|en)/:path*'],
    };