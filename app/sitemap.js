export default function sitemap() {
  const siteUrl = 'https://theparkercollective.co';

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}