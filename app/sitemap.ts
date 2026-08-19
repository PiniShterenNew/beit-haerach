import type { MetadataRoute } from "next";
import { SITE, BRANCHES } from "@/lib/content/site";

/** נגזר מ-BRANCHES כדי שהוספת זרוע לא תשאיר את המפה מאחור. */
const routes = [
  "",
  "/about",
  "/programs",
  ...BRANCHES.map((branch) => branch.href),
  "/impact",
  "/legacy",
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
