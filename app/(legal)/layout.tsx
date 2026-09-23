import Image from "next/image"
import Link from "next/link"
import { CORREO, EMPRESA, MARCA } from "@/lib/sitio"
import "./legal.css"

// Envoltura de los documentos legales. Públicos, indexables y sin sesión:
// el campo de política de privacidad de App Store Connect y la pantalla de
// registro de la app apuntan aquí, y los dos tienen que abrir sin cuenta.
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-envoltura">
      <header className="legal-cabeza">
        <Link href="/" className="legal-marca">
          <Image src="/icross.png" alt="" width={1024} height={1024} priority />
          {MARCA}
        </Link>
        <Link href="/" className="legal-volver">
          ← Volver al inicio
        </Link>
      </header>

      <main className="legal-cuerpo">{children}</main>

      <footer className="legal-pie">
        <Link href="/terminos">Términos y Condiciones</Link>
        <Link href="/privacidad">Aviso de Privacidad</Link>
        <Link href="/soporte">Soporte</Link>
        <a href={`mailto:${CORREO}`}>{CORREO}</a>
        <span>© 2026 {EMPRESA}</span>
      </footer>
    </div>
  )
}
