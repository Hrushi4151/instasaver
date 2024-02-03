export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_HOST}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}privacypolicy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}terms-and-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
