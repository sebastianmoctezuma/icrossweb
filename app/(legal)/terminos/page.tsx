import type { Metadata } from "next"
import { CORREO, DOMICILIO, EMPRESA, MARCA, VIGENCIA } from "@/lib/sitio"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones de uso de la aplicación iCross, incluida la política de tolerancia cero al contenido ofensivo.",
  alternates: { canonical: "/terminos" },
}

// ============================================================
//  TÉRMINOS Y CONDICIONES DE iCROSS
//
//  LA SECCIÓN 6 NO ES RELLENO. La guía 1.2 de la App Store exige
//  que una app con contenido de usuarios tenga un acuerdo donde
//  el usuario acepte que NO HAY TOLERANCIA al contenido ofensivo
//  ni a los usuarios abusivos, y que ese acuerdo se acepte al
//  registrarse. Es la causa de rechazo más común en apps con
//  feed. Si alguien recorta este documento, esa sección se queda.
//
//  La sección 9 tampoco: esta app da estimados de tiempo con los
//  que la gente decide manejar hasta un puente. El deslinde tiene
//  que estar escrito y tiene que ser legible.
// ============================================================

export default function Terminos() {
  return (
    <>
      <h1>Términos y Condiciones</h1>
      <p className="legal-fecha">Última actualización: {VIGENCIA}</p>

      <div className="legal-nota">
        <p>
          Al crear una cuenta o usar la aplicación {MARCA} aceptas estos Términos. Si no estás de
          acuerdo con ellos, no uses la aplicación. Te pedimos leer con atención la{" "}
          <a href="#tolerancia">sección 6, sobre contenido ofensivo</a>, y la{" "}
          <a href="#exactitud">sección 9, sobre la exactitud de los tiempos</a>.
        </p>
      </div>

      <h2 id="prestador">1. Quién presta el servicio</h2>
      <p>
        La aplicación {MARCA} es operada por <strong>{EMPRESA}</strong>, con domicilio en{" "}
        {DOMICILIO}, a quien en adelante se le llama “nosotros”. Puedes contactarnos en{" "}
        <a href={`mailto:${CORREO}`}>{CORREO}</a>.
      </p>

      <h2 id="servicio">2. Qué es y qué no es {MARCA}</h2>
      <p>
        {MARCA} es una aplicación informativa que reúne los tiempos de espera que publican las
        autoridades aduanales, estimaciones propias de traslado, clima, tipo de cambio, cartelera de
        eventos y un espacio donde los usuarios comparten información sobre los cruces.
      </p>
      <p>
        <strong>
          No somos una autoridad y no tenemos relación oficial, patrocinio ni afiliación con U.S.
          Customs and Border Protection, con el Gobierno de los Estados Unidos, con el Gobierno de
          México ni con ninguna administración de puentes.
        </strong>{" "}
        Tomamos información que esas instituciones publican de forma abierta y la presentamos. Las
        marcas y nombres de terceros que aparecen en la aplicación pertenecen a sus titulares y se
        usan únicamente para identificar la fuente del dato.
      </p>
      <p>
        {MARCA} <strong>no vende ni gestiona cruces, citas, trámites migratorios, permisos ni
        seguros</strong>, y no cobra por consultar la información.
      </p>

      <h2 id="aceptacion">3. Aceptación y capacidad</h2>
      <p>
        Para usar la aplicación debes tener al menos <strong>17 años</strong>. Al registrarte
        declaras que cumples ese requisito y que la información que proporcionas es veraz. Si usas la
        aplicación en nombre de una persona moral, declaras tener facultades para obligarla.
      </p>

      <h2 id="cuenta">4. Tu cuenta</h2>
      <ul>
        <li>
          Consultar la información de los puentes, el clima, el tipo de cambio y los eventos{" "}
          <strong>no requiere cuenta</strong>. Solo se necesita para participar en el espacio
          comunitario.
        </li>
        <li>
          Al registrarte debes proporcionar un correo válido y tu nombre y apellido reales.{" "}
          <strong>No se permite suplantar a otra persona</strong> ni usar el nombre de un tercero.
        </li>
        <li>
          Eres responsable de tu contraseña y de la actividad que ocurra en tu cuenta. Avísanos de
          inmediato si crees que alguien más accedió a ella.
        </li>
        <li>
          Puedes <strong>eliminar tu cuenta en cualquier momento</strong> desde la propia
          aplicación, en Mi cuenta. El borrado es inmediato, permanente y alcanza tus publicaciones,
          comentarios y fotografías.
        </li>
      </ul>

      <h2 id="contenido">5. El contenido que publicas</h2>
      <p>
        Tú sigues siendo el titular de lo que publicas. Al publicarlo nos otorgas una licencia no
        exclusiva, gratuita y revocable para alojarlo, reproducirlo y mostrarlo dentro de la
        aplicación, con el único fin de operarla. Esa licencia{" "}
        <strong>termina cuando borras el contenido o tu cuenta</strong>.
      </p>
      <p>
        Eres el único responsable de lo que publicas y declaras que tienes derecho a hacerlo.{" "}
        <strong>Todo lo que publiques en el espacio comunitario es público.</strong>
      </p>

      <h2 id="tolerancia">6. Tolerancia cero al contenido ofensivo</h2>
      <div className="legal-nota">
        <p>
          <strong>
            No hay tolerancia para el contenido ofensivo ni para los usuarios abusivos.
          </strong>{" "}
          Al usar {MARCA} aceptas esta condición de forma expresa. El incumplimiento puede causar la
          eliminación inmediata del contenido y la cancelación permanente de tu cuenta, sin aviso
          previo y sin derecho a reembolso alguno.
        </p>
      </div>
      <p>Queda prohibido publicar, enviar o compartir contenido que:</p>
      <ul>
        <li>
          Sea difamatorio, calumnioso, acosador, amenazante, intimidatorio o que incite al odio o a
          la violencia contra una persona o un grupo, incluido por razones de origen, nacionalidad,
          estatus migratorio, sexo, identidad o expresión de género, preferencia sexual, religión,
          discapacidad o edad.
        </li>
        <li>
          Sea sexualmente explícito, pornográfico o que muestre desnudez. Queda absolutamente
          prohibido cualquier contenido de explotación o abuso de menores, que será eliminado y
          denunciado a las autoridades competentes.
        </li>
        <li>
          Muestre violencia gráfica, lesiones, cadáveres, accidentes con víctimas identificables o
          material morboso.
        </li>
        <li>
          Promueva, facilite o describa actividades ilegales, incluidos el tráfico de personas, el
          tráfico de drogas, el contrabando, la evasión de controles migratorios o aduanales, la
          falsificación de documentos o la venta de sustancias y artículos prohibidos.
        </li>
        <li>
          Divulgue información privada de un tercero sin su consentimiento, como domicilio, teléfono,
          documentos de identidad o placas, ni fotografías de personas identificables tomadas sin su
          permiso.
        </li>
        <li>
          Sea deliberadamente falso respecto de las condiciones de un cruce, o busque provocar
          pánico, alarma o congestión artificial.
        </li>
        <li>
          Sea correo basura, publicidad no autorizada, esquemas de fraude, cadenas o enlaces a
          programas maliciosos.
        </li>
        <li>Infrinja derechos de autor, marcas u otros derechos de terceros.</li>
      </ul>
      <p>
        También queda prohibido <strong>acosar a otros usuarios</strong>, crear cuentas para evadir
        una suspensión, usar medios automatizados para extraer información de la aplicación, o
        intentar vulnerar su seguridad.
      </p>

      <h3>Cómo se hace valer</h3>
      <ul>
        <li>
          <strong>Puedes reportar</strong> cualquier publicación desde el menú de la propia
          publicación. Revisamos los reportes y actuamos sobre el contenido que infrinja estos
          Términos <strong>dentro de las 24 horas siguientes</strong>, retirándolo y, cuando
          corresponda, cancelando la cuenta responsable.
        </li>
        <li>
          <strong>El sistema retira contenido de forma automática.</strong> Una publicación reportada
          por varias personas distintas deja de mostrarse de inmediato, sin esperar revisión humana.
        </li>
        <li>
          <strong>Puedes bloquear</strong> a cualquier usuario. Dejarás de ver por completo su
          contenido. Los bloqueos se administran, y se pueden deshacer, desde Cuentas bloqueadas.
        </li>
        <li>
          Puedes escribirnos directamente a <a href={`mailto:${CORREO}`}>{CORREO}</a> para cualquier
          asunto de moderación.
        </li>
      </ul>
      <p>
        Nos reservamos el derecho de retirar contenido y de suspender o cancelar cuentas cuando
        infrinjan estos Términos, sin que ello genere responsabilidad alguna a nuestro cargo. No
        estamos obligados a revisar previamente todo el contenido publicado, pero sí a atender los
        reportes que recibimos.
      </p>

      <h2 id="publicaciones-terceros">7. Contenido de otros usuarios</h2>
      <p>
        Las publicaciones, comentarios y fotografías que verás en la aplicación{" "}
        <strong>son creadas por otros usuarios y no por nosotros</strong>. No las hacemos nuestras,
        no garantizamos su veracidad y no respondemos por ellas. Si algo te parece incorrecto o
        inapropiado, repórtalo.
      </p>

      <h2 id="anuncios">8. Anuncios de negocios</h2>
      <p>
        La aplicación puede mostrar anuncios de negocios de la región, siempre identificados como
        tales. La relación por cualquier producto o servicio anunciado es{" "}
        <strong>exclusivamente entre tú y ese negocio</strong>: no somos parte de ella y no
        respondemos por sus precios, promociones, existencias ni calidad.
      </p>

      <h2 id="exactitud">9. Exactitud de la información y tiempos estimados</h2>
      <div className="legal-nota">
        <p>
          <strong>
            La información de {MARCA} es orientativa. No la uses como única base para una decisión
            que no admita error.
          </strong>
        </p>
      </div>
      <ul>
        <li>
          <strong>Los tiempos de espera provienen de la autoridad aduanal</strong>, que los publica
          con el retraso y la periodicidad que ella determina. La aplicación indica a qué hora se
          actualizó cada dato precisamente porque puede no reflejar el momento presente.
        </li>
        <li>
          <strong>El tiempo total estimado es un cálculo propio</strong>, basado en condiciones de
          tráfico y en el comportamiento histórico de cada puente. Es una estimación, no una
          medición, y puede diferir de lo que tardes en realidad.
        </li>
        <li>
          <strong>Los horarios de operación pueden cambiar sin previo aviso.</strong> Un puente puede
          cerrar, abrir carriles o modificar su horario por razones operativas, climáticas o de
          seguridad que no conocemos.
        </li>
        <li>
          El clima, el tipo de cambio y la cartelera provienen de terceros y se muestran{" "}
          <strong>como referencia</strong>. El tipo de cambio no es una cotización de compraventa ni
          una oferta.
        </li>
        <li>
          <strong>No manejes usando la aplicación.</strong> Consúltala antes de salir o con el
          vehículo detenido.
        </li>
      </ul>

      <h2 id="propiedad">10. Propiedad intelectual</h2>
      <p>
        La aplicación, su nombre, su logotipo, su diseño, su código y sus modelos de estimación son
        propiedad de {EMPRESA} y están protegidos por la legislación aplicable. Se te concede una
        licencia personal, limitada, revocable y no transferible para usar la aplicación conforme a
        estos Términos. No puedes copiarla, modificarla, descompilarla, revenderla ni crear obras
        derivadas de ella.
      </p>

      <h2 id="disponibilidad">11. Disponibilidad del servicio</h2>
      <p>
        Procuramos que la aplicación esté disponible de forma continua, pero{" "}
        <strong>no garantizamos que funcione sin interrupciones ni errores</strong>. Podemos
        suspenderla, modificarla o descontinuarla, total o parcialmente, por mantenimiento o por
        cualquier otra causa. Las fuentes externas de las que depende también pueden fallar o dejar
        de estar disponibles.
      </p>

      <h2 id="responsabilidad">12. Limitación de responsabilidad</h2>
      <p>
        La aplicación se proporciona <strong>“tal cual”</strong>, sin garantías de ninguna clase,
        expresas o implícitas. En la medida en que lo permita la ley aplicable, no seremos
        responsables por daños indirectos, incidentales o consecuenciales, ni por pérdida de tiempo,
        gastos de traslado, oportunidades perdidas, pérdida de ganancias o cualquier perjuicio
        derivado de:
      </p>
      <ul>
        <li>la inexactitud, el retraso o la falta de disponibilidad de la información mostrada;</li>
        <li>las decisiones de viaje que tomes con base en ella;</li>
        <li>el contenido publicado por otros usuarios;</li>
        <li>la interrupción o falla del servicio o de las fuentes de las que depende.</li>
      </ul>
      <p>
        Nada en estos Términos limita las responsabilidades que no pueden excluirse conforme a la ley
        aplicable, ni los derechos que la legislación de protección al consumidor te reconoce.
      </p>

      <h2 id="suspension">13. Suspensión y cancelación</h2>
      <p>
        Podemos suspender o cancelar tu cuenta si infringes estos Términos, si tu conducta perjudica
        a otros usuarios o al servicio, o si la ley nos lo exige. Tú puedes dejar de usar la
        aplicación y eliminar tu cuenta cuando quieras, desde Mi cuenta.
      </p>

      <h2 id="datos">14. Datos personales</h2>
      <p>
        El tratamiento de tus datos personales se rige por nuestro{" "}
        <a href="/privacidad">Aviso de Privacidad</a>, que forma parte integrante de estos Términos.
      </p>

      <h2 id="tiendas">15. Tiendas de aplicaciones</h2>
      <p>
        Estos Términos se celebran entre tú y {EMPRESA}, <strong>no con Apple Inc.</strong> ni con
        ningún otro operador de tienda de aplicaciones. Ellos no son responsables de la aplicación ni
        de su contenido, ni tienen obligación alguna de darte soporte o mantenimiento. El soporte lo
        damos nosotros en <a href={`mailto:${CORREO}`}>{CORREO}</a>. Apple Inc. y sus filiales son
        terceros beneficiarios de estos Términos y podrán hacerlos valer frente a ti.
      </p>

      <h2 id="modificaciones">16. Modificaciones</h2>
      <p>
        Podemos modificar estos Términos. La versión vigente siempre está publicada en esta
        dirección, con su fecha de última actualización. Si el cambio es sustancial, te lo
        avisaremos dentro de la aplicación antes de que entre en vigor. Seguir usando la aplicación
        después de esa fecha significa que aceptas la nueva versión.
      </p>

      <h2 id="ley">17. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para la interpretación
        y cumplimiento de los mismos, las partes se someten a la jurisdicción de los tribunales
        competentes de <strong>Reynosa, Tamaulipas</strong>, renunciando a cualquier otro fuero que
        pudiera corresponderles, sin perjuicio de los derechos que la legislación de protección al
        consumidor reconozca a los usuarios.
      </p>

      <h2 id="contacto">18. Contacto</h2>
      <p>
        Para cualquier duda sobre estos Términos, para reportar contenido o para solicitar soporte,
        escríbenos a <a href={`mailto:${CORREO}`}>{CORREO}</a>.
      </p>
    </>
  )
}
