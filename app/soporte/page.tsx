import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CORREO, MARCA } from "@/lib/sitio"
import { PieSitio } from "@/components/pie-sitio"

export const metadata: Metadata = {
  title: "Soporte",
  description:
    "Ayuda de iCross: cómo reportar contenido, cómo borrar tu cuenta y cómo contactarnos.",
  alternates: { canonical: "/soporte" },
}

// ============================================================
//  Página de soporte.
//
//  Es la URL de soporte que pide App Store Connect, y de paso
//  cubre la "información de contacto publicada" que la guía 1.2
//  exige a una app con contenido de usuarios.
//
//  Las respuestas describen la app REAL. Si una pantalla cambia
//  de nombre, esta página cambia el mismo día: una instrucción
//  que no se puede seguir es peor que no tener ayuda.
// ============================================================

const PREGUNTAS = [
  {
    p: "Los minutos que veo no coinciden con la fila real",
    r: "Los tiempos de espera los publica la aduana de Estados Unidos, no nosotros, y los actualiza cuando ella decide. Por eso cada tarjeta dice a qué hora se actualizó ese dato. El total que calcula iCross incluye además el camino hasta el puente con el tráfico de ese momento, así que es normal que sea mayor que el número del letrero oficial, que solo cuenta la fila.",
  },
  {
    p: "Un puente aparece sin datos o cerrado",
    r: "Cuando un puente cierra sus carriles de automóviles, la aduana deja de publicar minutos. La app lo dice con todas sus letras en vez de dejar la tarjeta en blanco. Hay puentes que además solo operan para carga, y otros cuyos carriles de autos abren solo en ciertas horas.",
  },
  {
    p: "No me aparecen los puentes cercanos",
    r: "Eso pasa cuando la app no tiene permiso de ubicación. Sin él sigue funcionando, pero muestra todos los puentes de la frontera sin ordenarlos por cercanía. El permiso se activa en Ajustes del teléfono, en la sección de iCross.",
  },
  {
    p: "Quiero reportar una publicación ofensiva",
    r: "En el menú de la propia publicación, el botón de los tres puntos, están las opciones de reportar y de bloquear a quien la publicó. Revisamos los reportes y actuamos dentro de las 24 horas siguientes. Una publicación reportada por varias personas distintas deja de mostrarse de inmediato. También puedes escribirnos directamente.",
  },
  {
    p: "Bloqueé a alguien por error",
    r: "Los bloqueos se pueden deshacer. Están en Mi cuenta, en Cuentas bloqueadas.",
  },
  {
    p: "Olvidé mi contraseña",
    r: "En la pantalla de inicio de sesión hay un enlace debajo del campo de contraseña. Te llega un código de seis dígitos al correo con el que te registraste y con él defines una contraseña nueva.",
  },
  {
    p: "Quiero borrar mi cuenta",
    r: "Se hace desde la propia app, en Mi cuenta. El borrado es inmediato y permanente: se van tu perfil, tus publicaciones, tus comentarios, tus reacciones y las fotos que hayas subido. No se puede deshacer y no hace falta escribirnos para pedirlo.",
  },
  {
    p: "¿Hay versión para Android?",
    r: "Todavía no. Está en los planes y aquí se anunciará cuando exista. No prometemos fecha.",
  },
]

export default function Soporte() {
  return (
    <div className="min-h-dvh bg-fondo">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icross.png" alt="" width={1024} height={1024} className="size-9 rounded-[9px]" priority />
          <span className="text-[17px] font-extrabold tracking-[-0.02em]">{MARCA}</span>
        </Link>
        <Link href="/" className="text-[14px] font-semibold text-azul underline-offset-4 hover:underline">
          ← Volver al inicio
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24">
        <h1 className="mt-6 text-[2.25rem] leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-[2.75rem]">
          Soporte
        </h1>
        <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-gris">
          Si algo no funciona como esperabas, escríbenos. Contestamos los correos de una persona a
          otra, no con respuestas automáticas.
        </p>

        <a
          href={`mailto:${CORREO}`}
          className="mt-7 inline-block rounded-xl bg-azul px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_6px_16px_-6px_rgba(30,64,175,0.7)] transition-transform duration-150 ease-[var(--ease-salida)] active:scale-[0.97]"
        >
          {CORREO}
        </a>

        <h2 className="mt-16 text-[1.5rem] font-extrabold tracking-[-0.025em]">
          Preguntas frecuentes
        </h2>
        <dl className="mt-8 divide-y divide-linea border-y border-linea">
          {PREGUNTAS.map((f) => (
            <div key={f.p} className="py-6">
              <dt className="text-[1.0625rem] font-bold tracking-[-0.01em]">{f.p}</dt>
              <dd className="mt-2 max-w-[62ch] text-[15px] leading-[1.7] text-gris">{f.r}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-[15px] leading-[1.7] text-gris">
          Consulta también nuestros <Link href="/terminos" className="font-semibold text-azul underline-offset-4 hover:underline">Términos y Condiciones</Link> y el{" "}
          <Link href="/privacidad" className="font-semibold text-azul underline-offset-4 hover:underline">Aviso de Privacidad</Link>.
        </p>
      </main>

      <PieSitio />
    </div>
  )
}
