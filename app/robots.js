export default function robots() {
  const siteUrl = 'https://theparkercollectiveco.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}