
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// Bootstrap and custom scss
import "@/assets/scss/style.scss";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
import Toplogo from "@/components/blocks/navbar/top-logo/Toplogo";
import Footer2 from "@/components/blocks/footer/Footer2";
import Link from "next/link";
import AccessibilityButton from "@/components/reuseable/AccessibilityButton";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from 'next-intl/server';
import FooterBase from "@/components/blocks/footer/FooterBase";
import LanguageSwitcher from "@/components/reuseable/LanguageSwitcher";
import { usePathname } from "next/navigation";



const manrope = Manrope({ subsets: ["latin"] });



export default async function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {


  // try {
  //   messages = (await import(`../messages/${locale}.json`)).default;
  // } catch (error) {
  //   // notFound();
  // }



  return (


    <html lang={locale} data-bs-theme="light">
      <head>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/img/favicon.ico" />
      </head>
      <body className={manrope.className}>
        <NavbarOne button={
          <>
            {/* <Link title="Contact" href={getLocalizedPath('/rekrutacja')} className="btn btn-sm btn-primary rounded-pill">

            </Link>
            <LanguageSwitcher /> */}
          </>
        } />

        <AccessibilityButton />
        <div>{children}</div>
        <NextIntlClientProvider>
          <FooterBase params={{
            locale: locale
          }} />

        </NextIntlClientProvider>
      </body>


    </html>

  );
}
