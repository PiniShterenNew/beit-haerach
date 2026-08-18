import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";

const routes = [
  "",
  "/about",
  "/programs",
  "/programs/guesthouse",
  "/programs/dental",
  "/programs/kollels",
  "/programs/yeshiva",
  "/stories",
  "/volunteer",
  "/get-help",
  "/transparency",
  "/contact",
  "/donate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/donate" ? 0.9 : 0.6,
  }));
}
