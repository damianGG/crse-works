import { ReactNode } from "react";
// -------- PARTIAL LOCAL COMPONENTS -------- //
import Social from "./social";
import Language from "./language";
import ColorModeSwitcher from "@/components/reuseable/ColorModeSwitcher";
import AccessibilityButton from "@/components/reuseable/AccessibilityButton";
import { useLocale } from "next-intl";
import { Link, type Locale } from "../../../../i18n.config";
import { usePathname } from "next/navigation";
import PopupForm from "../../form/popupform";
import PopupFormUkrainian from "../../form/popupformUK";
import PopupFormEnglish from "../../form/popupformEN";

// ===================================================================
interface HeaderRightProps {
  info?: boolean;
  cart?: boolean;
  social?: boolean;
  search?: boolean;
  button?: ReactNode;
  language?: boolean;
  navOtherClass?: string;
  colorModeSwitcher?: boolean;
}
// ===================================================================

export default function HeaderRight({
  info,
  cart,
  button,
  social,
  search,
  language,
  navOtherClass,
  colorModeSwitcher,
}: HeaderRightProps) {

  const locale = useLocale() as Locale;

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

  return (
    <div className={navOtherClass}>
      <ul className="navbar-nav flex-row align-items-center ms-auto">
        <li className="ms-auto">

          {isPolishLocale ? <PopupForm /> : isUkrainianLocale ? <PopupFormUkrainian /> : <PopupFormEnglish />}

        </li>
        {/* ============= info button ============= */}
        {info ? (
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
              <i className="uil uil-info-circle" />
            </a>
          </li>
        ) : null}

        {/* ============= search icon button ============= */}
        {search ? (
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
              <i className="uil uil-search" />
            </a>
          </li>
        ) : null}

        {/* ============= contact button ============= */}
        {button ? <li className="nav-item d-none d-md-block">{button}</li> : null}
        {/* ============= language dropdwown ============= */}
        {/* {language ? <Language locale={"pl-pl"} /> : null} */}
        <Language locale={locale} />
        {/* ============= shopping cart button ============= */}
        {cart ? (
          <li className="nav-item">
            <a
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-cart"
              className="nav-link position-relative d-flex flex-row align-items-center">
              <i className="uil uil-shopping-cart" />
              <span className="badge badge-cart bg-primary">3</span>
            </a>
          </li>
        ) : null}

        {/* ============= social icons link ============= */}
        {social ? <Social /> : null}

        {/* ============= hamburger button for small device ============= */}
        <li className="nav-item d-lg-none">
          <button
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-nav"
            className="hamburger offcanvas-nav-btn">
            <span />
          </button>
        </li>

        {/* ============= color mode switcher ============= */}
        {colorModeSwitcher ? (
          <li className="nav-item  d-none d-lg-block">
            <AccessibilityButton />
          </li>
        )
          : null}
      </ul>
    </div>
  );
}
