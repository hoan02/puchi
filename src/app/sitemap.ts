import type { MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/helpers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    // Add more URLs here
  ];
}
