import type { MetadataRoute } from "next"
import { SITIO } from "@/lib/sitio"

// Todo el sitio es público e indexable. Las páginas legales SOBRE TODO:
// el revisor de Apple y, en su caso, una autoridad tienen que poder
// abrirlas sin sesión y encontrarlas.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITIO}/sitemap.xml`,
  }
}
