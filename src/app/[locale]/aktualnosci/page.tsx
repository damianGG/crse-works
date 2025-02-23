import Link from "next/link";
import { format } from 'date-fns';
import { pl, uk, enUS } from 'date-fns/locale'; // Added enUS for English
import './style.css';
import flagaUe from '@/icons/flaga-ue-tlo.png';

const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

async function getStrapiData(locale: string) {
    const res = await fetch(`${backendLink}/api/aktualnoscis-workts?sort=id:desc&locale=${locale}&pagination[pageSize]=100`,
        {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            },
        }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

function createSlug(text: string): string {
    const polishChars: { [key: string]: string } = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'a', 'Ć': 'c', 'Ę': 'e', 'Ł': 'l', 'Ń': 'n', 'Ó': 'o', 'Ś': 's', 'Ź': 'z', 'Ż': 'z'
    };

    return text
        .split('')
        .map(char => polishChars[char] || char)
        .join('')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

// Now using Next.js 13+ dynamic routing and server-side data fetching
export default async function News({ params }: { params: { locale: string } }) {
    // Determine the locale from the URL params
    const locale = ['pl', 'uk', 'en'].includes(params.locale) ? params.locale : 'en'; // Added English as the default locale

    console.log(locale);
    // Fetch data dynamically based on locale
    const { data } = await getStrapiData(locale);

    // Sort the data based on the 'data' field in descending order
    const sortedData = data.sort((a: any, b: any) => {
        const dateA = new Date(a.attributes.data);
        const dateB = new Date(b.attributes.data);
        return dateB.getTime() - dateA.getTime(); // Descending order
    });

    // Set the appropriate locale for date formatting
    const dateLocale = locale === 'pl' ? pl : locale === 'uk-UA' ? uk : enUS;
    console.log(dateLocale);
    console.log(sortedData);

    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: `url(${flagaUe.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                {locale === 'pl' ? 'Aktualności' : locale === 'uk' ? 'Новини' : 'News'}
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15">
                <div className="row gx-0 gx-md-3 gx-xl-8 gy-8 align-items-center">
                    {sortedData.map((article: any) => {
                        const slug = createSlug(article.attributes.tytul);

                        // Generate article URL: without 'pl' prefix for Polish, 'uk' for Ukrainian, 'en' for English
                        const articleUrl = locale === 'pl'
                            ? `/pl/aktualnosci/${article.id}-${slug}`  // No 'pl' prefix for Polish
                            : locale === 'uk-UA'
                                ? `/uk/aktualnosci/${article.id}-${slug}`  // 'uk' prefix for Ukrainian
                                : `/en/aktualnosci/${article.id}-${slug}`;  // 'en' prefix for English

                        return (
                            <div className="col-md-4" key={article.id}>
                                <Link href={articleUrl}>
                                    <div className="card news-card">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <h2 className="post-title h3 mt-1 mb-3">{article.attributes.tytul}</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>{article.attributes.podtytul}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <ul className="post-meta d-flex mb-0">
                                                <li className="post-date">
                                                    <i className="uil uil-calendar-alt"></i>
                                                    <span>{format(new Date(article.attributes.data), 'dd MMMM yyyy', { locale: dateLocale })}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
