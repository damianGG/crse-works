"use client";

import { Fragment, ReactElement, useRef } from "react";
import { usePathname } from 'next/navigation';
import useSticky from "@/hooks/useSticky";
import useNestedDropdown from "@/hooks/useNestedDropdown";
import Image from "next/image";
import Link from "next/link";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import JPLogo from "../../../../../public/img/logos/logo-workts.jpg";
import Toplogo from "../top-logo/Toplogo";

interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}

export default function NavbarOne({
  fancy,
  button,
  logoAlt,
  cart = false,
  info = false,
  social = false,
  search = false,
  language = true,
  stickyBox = true,
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light mt-5 mb-5",

}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  const pathname = usePathname(); // Get the current URL path

  // Check if URL contains "/pl", "/uk", or "/en" to determine locale
  const isPolishLocale = pathname.includes('/pl');
  const isUkrainianLocale = pathname.includes('/uk');
  const isEnglishLocale = pathname.includes('/en');

  const getLocalizedPath = (slug: string) => {
    // Determine the correct prefix for the URL based on the current locale
    if (isPolishLocale) return `/pl${slug}`;
    if (isUkrainianLocale) return `/uk${slug}`;
    return `/en${slug}`; // Default to English if none match
  };

  // Dynamically added navbar className
  const fixedClassName = "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed ";

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <Link href={getLocalizedPath('/')}>
          <Image
            src={JPLogo}
            alt={logoAlt || "JP company logo"}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '150px',
            }}
          />
        </Link>
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Workts</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav ">
            {/* Dynamically switch text based on the current locale */}
            <li><Link className="nav-link fs-20" href={getLocalizedPath('/o-projekcie')}>
              {isPolishLocale ? "O Projekcie" : isUkrainianLocale ? "Про проєкт" : "About the Project"}
            </Link></li>
            <li><Link className="nav-link fs-20" href={getLocalizedPath('/aktualnosci')}>
              {isPolishLocale ? "Aktualności" : isUkrainianLocale ? "Новини" : "News"}
            </Link></li>
            <li><Link className="nav-link fs-20" href={getLocalizedPath('/rekrutacja')}>
              {isPolishLocale ? "Rekrutacja" : isUkrainianLocale ? "Реєстрація" : "Recruitment"}
            </Link></li>
            <li><Link className="nav-link fs-20" href={getLocalizedPath('/kontakt')}>
              {isPolishLocale ? "Kontakt" : isUkrainianLocale ? "Контакт" : "Contact"}
            </Link></li>
          </ul>

          {/* Contact info displayed in small device sidebar */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <Link title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <Link href="tel:0123456789" title="00 (123) 456 78 90" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side header content */}
      <HeaderRight
        cart={cart}
        info={info}
        button={button}
        search={search}
        social={social}
        language={language}
        navOtherClass={navOtherClass}
        colorModeSwitcher={false}
      />
    </Fragment>
  );

  return (
    <Fragment>
      <Toplogo />
      {stickyBox ? <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} /> : null}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
}
