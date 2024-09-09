import { useTranslations } from 'next-intl';

export default function NavbarTranslations() {
    const t = useTranslations('Menu');
    return {
        title: t('o-projekcie'),
        aktualnosci: t('aktualnosci'),
        rekrutacja: t('rekrutacja'),
        kontakt: t('kontakt')
    };
}