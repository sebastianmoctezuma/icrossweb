import type { MetadataRoute } from "next"
import { SITIO } from "@/lib/sitio"

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/soporte", "/privacidad", "/terminos"]
  return rutas.map((r) => ({
    url: `${SITIO}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }))
}
