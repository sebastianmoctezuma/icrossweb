import Image from "next/image"
import Link from "next/link"
import { APP_STORE_URL, CORREO, MARCA } from "@/lib/sitio"
import { PieSitio } from "@/components/pie-sitio"

// ============================================================
//  Landing de iCross.
//
//  REGLA QUE MANDA SOBRE EL DISEÑO: aquí no se anuncia nada que
//  la app no haga hoy. Nada de "inicia sesión con Google", nada
//  de descuentos de patrocinadores, nada de Wallet. La guía 2.3
//  de Apple trata el material promocional engañoso igual que un
//  control que no funciona, y es la clase de detalle que cuesta
//  una ronda de revisión completa.
// ============================================================

const CAPACIDADES = [
  {
    titulo: "La espera de cada puente, con la hora del puerto",
    cuerpo:
      "Los minutos que publica la aduana de Estados Unidos para cada carril, y hace cuánto los publicó. Cuando un puente está cerrado lo dice, en vez de dejar la tarjeta en blanco.",
  },
  {
    titulo: "El carril alterno que te ahorra la vuelta",
    cuerpo:
      "Si el carril de al lado va quince minutos más rápido, aparece en la misma tarjeta. Es el dato más útil que tiene la app y no hay que buscarlo.",
  },
  {
    titulo: "Qué tanto conviene cruzar hoy",
    cuerpo:
      "El clima, el tipo de cambio del día y un resumen corto de lo que pasa en tu corredor, sin repetirte las cifras que ya tienes enfrente.",
  },
  {
    titulo: "Lo que la gente está viendo ahora",
    cuerpo:
      "Un feed donde quien va cruzando reporta lo que se encuentra, con foto si hace falta. Se puede reportar y bloquear, y lo que tres personas distintas reportan se oculta solo.",
  },
  {
    titulo: "Conciertos y partidos de los dos lados",
    cuerpo:
      "La cartelera a cien kilómetros de donde estás, con la hora del recinto y no la de tu teléfono, que es donde casi todas las apps se equivocan de día.",
  },
]

const FUENTES = [
  { que: "Esperas y horarios", quien: "U.S. Customs and Border Protection" },
  { que: "Tráfico del tramo", quien: "Google Routes" },
  { que: "Clima", quien: "Open-Meteo" },
  { que: "Tipo de cambio", quien: "Banco Central Europeo" },
  { que: "Cartelera", quien: "Ticketmaster y SeatGeek" },
]

export default function Inicio() {
  return (
    <div className="min-h-dvh bg-fondo">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <span className="flex items-center gap-2.5">
          <Image src="/icross.png" alt="" width={1024} height={1024} className="size-9 rounded-[9px]" priority />
          <span className="text-[17px] font-extrabold tracking-[-0.02em]">{MARCA}</span>
        </span>
        <nav className="flex items-center gap-6 text-[14px] font-semibold text-gris">
          <Link href="/soporte" className="transition-colors hover:text-azul">
            Soporte
          </Link>
          <Link href="/privacidad" className="transition-colors hover:text-azul">
            Privacidad
          </Link>
        </nav>
      </header>

      {/* Hero. Alineado a la izquierda a propósito: un titular centrado
          sobre un degradado es la plantilla que usa todo el mundo, y
          además aquí el texto es el producto. */}
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 className="max-w-[15ch] text-[2.75rem] leading-[1.03] font-extrabold tracking-[-0.035em] sm:text-[4rem]">
              Cuánto vas a tardar en cruzar.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[1.125rem] leading-[1.65] text-gris">
              iCross junta lo que publica la aduana con el tráfico que hay en la calle en este
              momento, y te dice por cuál puente te conviene irte. Para la frontera de México y
              Estados Unidos.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {APP_STORE_URL ? (
                <a
                  href={APP_STORE_URL}
                  className="rounded-xl bg-azul px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_6px_16px_-6px_rgba(30,64,175,0.7)] transition-transform duration-150 ease-[var(--ease-salida)] active:scale-[0.97]"
                >
                  Descargar en el App Store
                </a>
              ) : (
                <p className="rounded-xl border border-linea bg-superficie px-5 py-3.5 text-[15px] font-semibold text-tinta">
                  Muy pronto en el App Store
                </p>
              )}
              <a
                href={`mailto:${CORREO}`}
                className="text-[15px] font-semibold text-azul underline-offset-4 hover:underline"
              >
                Avísame cuando salga
              </a>
            </div>
          </div>

          {/* El diferenciador REAL de la app, dicho con su propia
              aritmética. Vale más que una captura de pantalla: una
              captura envejece con cada rediseño y esta fórmula no. */}
          <div className="rounded-3xl border border-linea bg-superficie p-7 shadow-[0_18px_40px_-28px_rgba(31,36,48,0.35)] sm:p-9">
            <p className="text-[13px] font-bold tracking-[0.08em] text-azul uppercase">Smart Time</p>
            <p className="mt-3 text-[1.35rem] leading-[1.35] font-extrabold tracking-[-0.02em]">
              El letrero de la aduana solo cuenta la fila.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-gris">
              Pero tú sales de tu casa, no de la caseta. iCross suma las dos partes:
            </p>
            <div className="mt-6 space-y-px overflow-hidden rounded-2xl border border-linea">
              <div className="flex flex-col gap-0.5 bg-fondo px-4 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-[14px] font-semibold">Camino al puente</span>
                <span className="font-mono text-[13px] text-gris">con el tráfico de ahora</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-fondo px-4 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-[14px] font-semibold">Fila en la caseta</span>
                <span className="font-mono text-[13px] text-gris">lo típico de esta hora</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-azul px-4 py-4 text-white sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-[14px] font-bold">Lo que de verdad tardas</span>
                <span className="font-mono text-[13px] text-white/75">total</span>
              </div>
            </div>
            <p className="mt-5 text-[13.5px] leading-[1.6] text-gris">
              La aduana entra como un coeficiente: dice si la cola va cargada o ligera respecto de
              lo normal a esa hora. Es lo que sí sabe, porque hay alguien mirándola.
            </p>
          </div>
        </div>
      </section>

      {/* Capacidades. Lista editorial y no una reja de tarjetas iguales:
          estos cinco puntos no tienen el mismo peso ni la misma longitud,
          y meterlos en cajas idénticas los aplana. */}
      <section className="border-y border-linea bg-superficie">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="max-w-[20ch] text-[2rem] leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
            Lo que la app hace hoy
          </h2>
          <dl className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2">
            {CAPACIDADES.map((c) => (
              <div key={c.titulo} className="border-t border-linea pt-5">
                <dt className="text-[1.0625rem] font-bold tracking-[-0.01em]">{c.titulo}</dt>
                <dd className="mt-2 max-w-[46ch] text-[15px] leading-[1.65] text-gris">{c.cuerpo}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Transparencia de fuentes. No es relleno: es la promesa central
          del producto y la respuesta a "¿de dónde sacan esto?". */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="max-w-[18ch] text-[2rem] leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Si el dato no es real, no se pinta
            </h2>
            <p className="mt-6 max-w-[50ch] text-[1.0625rem] leading-[1.65] text-gris">
              iCross no inventa precios, ni promociones, ni calificaciones de negocios. Cuando una
              sección todavía no tiene información de verdad, lo dice en lugar de llenarse con
              ejemplos. Y cuando una cifra es un estimado nuestro y no un dato oficial, también lo
              dice.
            </p>
          </div>
          <dl className="divide-y divide-linea border-y border-linea">
            {FUENTES.map((f) => (
              <div key={f.que} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="text-[15px] font-semibold">{f.que}</dt>
                <dd className="text-[14px] text-gris">{f.quien}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PieSitio />
    </div>
  )
}
