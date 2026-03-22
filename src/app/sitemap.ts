import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString(); // Use ISO string for consistency

  return [
    {
      url: "https://orangeseva.in",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/about/mission",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/about/impact",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/about/team",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/about/history",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/donate",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/testimonials",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/gallery",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://orangeseva.in/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
