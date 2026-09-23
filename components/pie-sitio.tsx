import Link from "next/link"
import { CORREO, EMPRESA, MARCA } from "@/lib/sitio"

// Pie compartido por la landing y por Soporte. Lleva SIEMPRE los dos
// enlaces legales y el correo: la guía 1.2 de Apple exige información
// de contacto publicada para una app con contenido de usuarios, y el
// campo de política de privacidad de App Store Connect apunta aquí.
export function PieSitio() {
  return (
    <footer className="border-t border-linea bg-superficie">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[15px] font-extrabold tracking-[-0.02em]">{MARCA}</p>
          <p className="mt-1.5 max-w-[42ch] text-[13.5px] leading-[1.6] text-gris">
            Un producto de {EMPRESA}
          </p>
          <a
            href={`mailto:${CORREO}`}
            className="mt-2 inline-block text-[13.5px] font-semibold text-azul underline-offset-4 hover:underline"
          >
            {CORREO}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[13.5px] font-semibold text-gris">
          <Link href="/" className="transition-colors hover:text-azul">
            Inicio
          </Link>
          <Link href="/soporte" className="transition-colors hover:text-azul">
            Soporte
          </Link>
          <Link href="/terminos" className="transition-colors hover:text-azul">
            Términos
          </Link>
          <Link href="/privacidad" className="transition-colors hover:text-azul">
            Aviso de Privacidad
          </Link>
        </nav>
      </div>
    </footer>
  )
}
