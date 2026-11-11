export const dynamic = 'force-static';

export default function robots() {
  const siteUrl = 'https://theparkercollective.co';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}