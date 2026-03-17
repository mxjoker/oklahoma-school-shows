import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { allServiceAreaSlugs } from "@/lib/serviceAreaData";

const BASE_URL = "https://oklahomeschoolshows.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                    lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,         lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/shows`,         lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/shows/science`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/shows/reading`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/shows/math`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/shows/character-education`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/shows/anti-bullying`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/service-area`,  lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/testimonials`,  lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/faq`,           lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/blog`,          lastModified: now, changeFrequency: "weekly",   priority: 0.8 },
    { url: `${BASE_URL}/book-now`,      lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/contact`,       lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
  ];

  const serviceAreaRoutes: MetadataRoute.Sitemap = allServiceAreaSlugs.map((slug) => ({
    url: `${BASE_URL}/service-area/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceAreaRoutes, ...blogRoutes];
}
