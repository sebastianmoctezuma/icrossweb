import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { MARCA, SITIO } from "@/lib/sitio"
import "./globals.css"

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: `${MARCA} — tiempos de espera en los puentes de la frontera`,
    template: `%s — ${MARCA}`,
  },
  description:
    "Cuánto vas a tardar en cruzar a Estados Unidos, con los datos de la aduana y el tráfico de este momento. Puentes de la frontera México–EE.UU.",
  applicationName: MARCA,
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: MARCA,
    url: SITIO,
    title: `${MARCA} — tiempos de espera en los puentes de la frontera`,
    description:
      "Cuánto vas a tardar en cruzar, con los datos de la aduana y el tráfico de este momento.",
  },
  icons: { icon: "/icross.png", apple: "/icross.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
