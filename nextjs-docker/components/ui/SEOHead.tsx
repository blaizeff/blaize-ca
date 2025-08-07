import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteConfig } from '../../config/site';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = siteConfig.description,
  image = siteConfig.seo.ogImage,
  noindex = false,
  canonicalUrl,
}) => {
  const router = useRouter();
  const fullTitle = title ? `${title} | Blaize` : 'Blaize - Full Stack Developer';
  const url = canonicalUrl || `https://blaize.ca${router.asPath}`;
  const fullImageUrl = image?.startsWith('http') ? image : `https://blaize.ca${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Blaize",
    "jobTitle": "Full Stack Developer",
    "description": description,
    "url": "https://blaize.ca",
    "email": "me@blaize.ca",
    "image": "https://blaize.ca/images/profile-photo.jpg",
    "sameAs": [
      "https://github.com/blaizeff",
      "https://linkedin.com/in/blaizeff",
    ],
    "knowsAbout": [
      ...siteConfig.skills.frontend,
      ...siteConfig.skills.backend,
      ...siteConfig.skills.database
    ] as string[],
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
      <meta name="author" content="Blaize" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#354E73" />
      
      <link rel="canonical" href={url} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blaize" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={fullImageUrl} />}
      {image && <meta property="og:image:alt" content="Blaize - Full Stack Developer" />}
      <meta property="og:locale" content="en_US" />
      
      <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={fullImageUrl} />}
      
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}; 