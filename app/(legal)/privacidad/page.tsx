import type { Metadata } from "next"
import { CORREO, DOMICILIO, EMPRESA, MARCA, VIGENCIA } from "@/lib/sitio"

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad de iCross conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  alternates: { canonical: "/privacidad" },
}

// ============================================================
//  AVISO DE PRIVACIDAD DE iCROSS
//
//  ESTE DOCUMENTO ESTÁ ESCRITO CONTRA EL CÓDIGO, NO CONTRA UNA
//  PLANTILLA. Cada dato que declara aquí corresponde a algo que
//  la app realmente recoge, y la lista tiene que CUADRAR con
//  `ios/Runner/PrivacyInfo.xcprivacy` y con las etiquetas de
//  privacidad de App Store Connect: Apple compara los tres, y
//  una diferencia entre ellos es motivo de rechazo por 5.1.1.
//
//  SI LA APP EMPIEZA A RECOGER UN DATO NUEVO, SE ACTUALIZAN LOS
//  TRES LUGARES EL MISMO DÍA.
// ============================================================

export default function AvisoPrivacidad() {
  return (
    <>
      <h1>Aviso de Privacidad</h1>
      <p className="legal-fecha">Última actualización: {VIGENCIA}</p>

      <div className="legal-nota">
        <p>
          Este Aviso de Privacidad se emite conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares, su Reglamento y demás disposiciones aplicables
          en los Estados Unidos Mexicanos. Describe qué información recoge la aplicación {MARCA},
          para qué la usa y cómo puedes controlarla.
        </p>
      </div>

      <h2 id="responsable">1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de tus datos personales, y titular de la aplicación {MARCA},
        es:
      </p>
      <dl className="legal-ficha">
        <div>
          <dt>Razón social</dt>
          <dd>{EMPRESA}</dd>
        </div>
        <div>
          <dt>Domicilio</dt>
          <dd>{DOMICILIO}</dd>
        </div>
        <div>
          <dt>Correo de contacto</dt>
          <dd>
            <a href={`mailto:${CORREO}`}>{CORREO}</a>
          </dd>
        </div>
      </dl>
      <p>
        {MARCA} es un producto de {EMPRESA}. Cualquier duda, solicitud o queja sobre el tratamiento
        de tus datos se atiende en el correo de arriba.
      </p>

      <h2 id="que-es">2. Qué es {MARCA}</h2>
      <p>
        {MARCA} es una aplicación móvil que muestra los tiempos de espera en los puentes fronterizos
        entre México y Estados Unidos, junto con información útil para quien cruza: clima, tipo de
        cambio, cartelera de eventos cercanos y un espacio donde los usuarios comparten lo que están
        viendo en el cruce.
      </p>
      <p>
        <strong>Buena parte de la aplicación funciona sin cuenta.</strong> Consultar las esperas de
        los puentes, el clima, el tipo de cambio y los eventos no requiere registrarse. Solo se pide
        una cuenta para participar en el espacio comunitario: publicar, comentar, reaccionar,
        reportar contenido o bloquear a otra persona.
      </p>

      <h2 id="datos">3. Qué datos recabamos</h2>

      <h3>A) Datos de tu cuenta</h3>
      <p>Solo si decides registrarte:</p>
      <ul>
        <li>
          <strong>Correo electrónico.</strong> Es la credencial de acceso y la vía para recuperar tu
          contraseña.
        </li>
        <li>
          <strong>Nombre y apellido.</strong> Son obligatorios al registrarte. En el espacio público
          de la aplicación apareces como tu nombre seguido de la inicial de tu apellido, por ejemplo
          “Jorge V.”; tu apellido completo solo lo ves tú, en tu propia pantalla de cuenta.
        </li>
        <li>
          <strong>Contraseña.</strong> Nunca la vemos ni la almacenamos en texto legible: la guarda
          cifrada nuestro proveedor de autenticación.
        </li>
      </ul>

      <h3>B) Contenido que tú publicas</h3>
      <ul>
        <li>
          <strong>El texto de tus publicaciones y comentarios</strong>, la categoría que les asignas
          y el lugar que escribes como referencia.
        </li>
        <li>
          <strong>Las fotografías que decides subir</strong> a una publicación. Solo se toman de tu
          galería o cámara cuando tú lo pides expresamente.
        </li>
        <li>
          <strong>Tus reacciones, reportes de contenido y bloqueos</strong> de otras cuentas.
        </li>
      </ul>
      <p>
        Todo lo que publiques en el espacio comunitario es <strong>público</strong> y puede verlo
        cualquier persona con la aplicación instalada. No publiques ahí información que no quieras
        que se conozca.
      </p>

      <h3>C) Ubicación</h3>
      <p>
        La aplicación puede pedirte acceso a la ubicación de tu dispositivo para ordenar los puentes
        por cercanía, mostrarte el clima de tu zona y filtrar los eventos que están cerca de ti.
      </p>
      <ul>
        <li>
          <strong>Es opcional.</strong> Si la niegas, la aplicación sigue funcionando: muestra todos
          los puentes de la frontera sin ordenarlos por distancia.
        </li>
        <li>
          <strong>No guardamos tu ubicación en ningún servidor.</strong> Se lee en tu teléfono, se
          usa ahí mismo y se conserva un máximo de cinco minutos en la memoria de la aplicación para
          no volver a pedirla en cada pantalla.
        </li>
        <li>
          <strong>No la compartimos con quien calcula el tráfico.</strong> Para estimar el tiempo de
          traslado, nuestro servidor consulta tramos de carretera fijos, definidos por nosotros junto
          a cada puente. Tus coordenadas nunca salen hacia ese servicio.
        </li>
        <li>
          <strong>La única excepción, y la decimos porque existe:</strong> al buscar eventos
          cercanos, tu aplicación envía a nuestro propio servidor un rango aproximado de coordenadas
          para acotar la consulta. Viaja como parámetro de búsqueda, no se registra ni se asocia a tu
          cuenta.
        </li>
        <li>
          <strong>No hay seguimiento en segundo plano.</strong> La aplicación no consulta tu
          ubicación cuando no la estás usando.
        </li>
      </ul>

      <h3>D) Identificadores técnicos</h3>
      <ul>
        <li>
          <strong>Identificador de tu cuenta</strong>, que genera nuestro proveedor de autenticación
          al registrarte.
        </li>
        <li>
          <strong>Identificador de instalación</strong>, un valor anónimo que sirve para contar
          cuántos dispositivos usan la aplicación. No está ligado a tu identidad.
        </li>
      </ul>
      <p>
        Además, tu dispositivo guarda <strong>localmente</strong> algunas preferencias, como los
        puentes que marcaste como favoritos y una copia temporal de las imágenes que ya viste, para
        no descargarlas dos veces. Esa información no sale de tu teléfono y desaparece al desinstalar
        la aplicación.
      </p>

      <h2 id="sensibles">4. Datos sensibles</h2>
      <p>
        <strong>No recabamos datos personales sensibles</strong> en los términos de la Ley: ni origen
        racial o étnico, ni estado de salud, ni información genética o biométrica, ni creencias
        religiosas, filosóficas o morales, ni afiliación sindical, ni opiniones políticas, ni
        preferencia sexual. Tampoco pedimos datos financieros o patrimoniales: la aplicación no
        procesa pagos.
      </p>

      <h2 id="finalidades">5. Para qué usamos tus datos</h2>
      <p>
        Todas las finalidades que siguen son <strong>necesarias</strong> para prestarte el servicio:
      </p>
      <ul>
        <li>Crear tu cuenta, identificarte al entrar y permitirte recuperar tu contraseña.</li>
        <li>
          Mostrar tu nombre público junto a lo que publicas, para que el espacio comunitario no sea
          anónimo.
        </li>
        <li>Publicar, alojar y mostrar el contenido que tú decides compartir.</li>
        <li>
          Atender reportes de contenido, aplicar los bloqueos que solicitas y moderar el espacio
          comunitario conforme a nuestros Términos.
        </li>
        <li>Ordenar los puentes por cercanía y mostrarte información relevante para tu zona.</li>
        <li>Mantener la seguridad del servicio y prevenir abusos.</li>
      </ul>
      <p>
        <strong>No usamos tus datos para publicidad personalizada.</strong> La aplicación puede
        mostrar anuncios de negocios de la región, pero salen de nuestro propio catálogo y{" "}
        <strong>no saben quién los está viendo</strong>: no se elige qué anuncio mostrarte con base
        en tu perfil ni en tu comportamiento.
      </p>
      <p>
        <strong>No hacemos seguimiento entre aplicaciones ni entre sitios.</strong> No hay
        identificador de publicidad, ni redes de anuncios de terceros, ni cruce de tu información con
        la de otras empresas. Así está declarado también ante Apple.
      </p>
      <p>
        <strong>No vendemos tus datos personales</strong> a nadie, ni los cedemos con fines
        comerciales.
      </p>

      <h2 id="terceros">6. Quién más interviene</h2>
      <p>
        Para operar usamos proveedores de servicios que actúan por cuenta nuestra y únicamente
        conforme a nuestras instrucciones:
      </p>
      <ul>
        <li>
          <strong>Supabase Inc.</strong> — aloja la base de datos, el sistema de cuentas y el
          almacenamiento de las fotografías. Es el único proveedor que trata datos personales por
          nuestra cuenta. Sus servidores están en Estados Unidos.
        </li>
        <li>
          <strong>Apple Inc.</strong> — distribuye la aplicación. Recibe los datos propios de la
          descarga, conforme a sus propias políticas.
        </li>
      </ul>
      <p>
        Además, la aplicación consulta fuentes de información que{" "}
        <strong>no reciben ningún dato personal tuyo</strong>: U.S. Customs and Border Protection
        (tiempos de espera), Google Routes (tráfico de tramos fijos), Open-Meteo (clima), Ticketmaster
        y SeatGeek (cartelera), el Banco Central Europeo a través de un servicio público de
        referencia (tipo de cambio) y medios informativos por sus canales públicos. El resumen diario
        que ves en la aplicación se redacta con un modelo de lenguaje de Google al que{" "}
        <strong>solo se le envían cifras públicas</strong> de clima, tipo de cambio y cartelera,
        nunca información de usuarios.
      </p>

      <h3>Transferencias internacionales</h3>
      <p>
        Nuestros proveedores de infraestructura operan en <strong>Estados Unidos</strong>, por lo que
        tus datos se almacenan y procesan fuera de México. Estas remisiones se realizan al amparo del
        artículo 36 de la Ley, exclusivamente para prestarte el servicio, y no requieren tu
        consentimiento adicional. Fuera de estos casos,{" "}
        <strong>no transferimos tus datos a terceros</strong> sin tu consentimiento, salvo en los
        supuestos del artículo 37 de la Ley o por requerimiento fundado de una autoridad competente.
      </p>

      <h2 id="conservacion">7. Cuánto tiempo conservamos tu información</h2>
      <p>
        Conservamos los datos de tu cuenta y tu contenido <strong>mientras la cuenta exista</strong>.
        Cuando la eliminas, se borran de inmediato y de forma permanente tu perfil, tus
        publicaciones, tus comentarios, tus reacciones, tus reportes, tus bloqueos y las fotografías
        que hayas subido.
      </p>
      <p>
        Los datos que no identifican a ninguna persona —los tiempos de espera históricos de cada
        puente, por ejemplo— se conservan indefinidamente, porque son los que permiten estimar a qué
        hora suele abrir un carril.
      </p>

      <h2 id="seguridad">8. Seguridad</h2>
      <p>
        Aplicamos medidas de seguridad administrativas, técnicas y físicas razonables para proteger
        tu información: todas las comunicaciones viajan cifradas, el acceso a la base de datos está
        restringido por reglas que impiden que una cuenta lea o modifique la información de otra, y
        las contraseñas se almacenan cifradas.
      </p>
      <p>
        Ningún sistema es infalible. Si llegara a ocurrir una vulneración que afecte de forma
        significativa tus derechos, te lo informaremos sin demora por el correo asociado a tu cuenta.
      </p>

      <h2 id="arco">9. Tus derechos y cómo ejercerlos</h2>
      <p>
        Tienes derecho a <strong>acceder</strong> a tus datos personales, a solicitar su{" "}
        <strong>rectificación</strong> cuando sean inexactos, a pedir su <strong>cancelación</strong>{" "}
        y a <strong>oponerte</strong> a su tratamiento (derechos ARCO). También puedes revocar tu
        consentimiento en cualquier momento.
      </p>

      <h3>Directamente en la aplicación</h3>
      <ul>
        <li>
          <strong>Corregir tu nombre:</strong> en Mi cuenta.
        </li>
        <li>
          <strong>Borrar una publicación tuya:</strong> en Mis publicaciones.
        </li>
        <li>
          <strong>Ver y deshacer tus bloqueos:</strong> en Cuentas bloqueadas.
        </li>
        <li>
          <strong>Eliminar tu cuenta por completo:</strong> en Mi cuenta. Esta acción borra tu
          perfil, tus publicaciones, tus comentarios, tus reacciones y tus fotografías. Es
          inmediata y no se puede deshacer.
        </li>
      </ul>

      <h3>Por escrito</h3>
      <p>
        Envía tu solicitud a <a href={`mailto:${CORREO}`}>{CORREO}</a> indicando tu nombre, el correo
        con el que te registraste, qué derecho quieres ejercer y sobre qué datos, y adjuntando una
        identificación oficial que acredite tu identidad o la representación con la que actúas.
        Responderemos en un plazo máximo de <strong>veinte días hábiles</strong> y, de resultar
        procedente, la haremos efectiva dentro de los <strong>quince días hábiles</strong>{" "}
        siguientes.
      </p>
      <p>
        Si consideras que tu derecho a la protección de datos fue vulnerado, puedes acudir ante la
        autoridad competente en materia de protección de datos personales en México.
      </p>

      <h2 id="menores">10. Menores de edad</h2>
      <p>
        {MARCA} <strong>no está dirigida a menores de 13 años</strong> y así está clasificada en la
        tienda de aplicaciones. No recabamos conscientemente datos de menores de esa edad; si
        detectamos una cuenta de alguien menor de 13, la eliminaremos junto con su información.
      </p>
      <p>
        Si tienes <strong>entre 13 y 17 años</strong>, usa la aplicación con el conocimiento y el
        consentimiento de tu madre, padre o tutor, que es quien autoriza el tratamiento de tus datos
        personales conforme a la Ley. Si eres madre, padre o tutor y quieres que eliminemos la cuenta
        de un menor a tu cargo, escríbenos a <a href={`mailto:${CORREO}`}>{CORREO}</a>.
      </p>

      <h2 id="cookies">11. Cookies</h2>
      <p>
        <strong>Este sitio web no usa cookies</strong> de análisis, de publicidad ni de seguimiento.
        La aplicación tampoco: guarda en tu dispositivo el testigo de tu sesión, para que no tengas
        que escribir tu contraseña cada vez, y tus preferencias locales.
      </p>

      <h2 id="cambios">12. Cambios a este Aviso</h2>
      <p>
        Podemos actualizar este Aviso cuando cambie la aplicación o la normativa aplicable. La
        versión vigente siempre está publicada en esta dirección, con su fecha de última
        actualización arriba. Si el cambio afecta de manera sustancial la forma en que tratamos tus
        datos, te lo avisaremos dentro de la aplicación o por correo antes de que entre en vigor.
      </p>

      <h2 id="contacto">13. Contacto</h2>
      <p>
        Para cualquier duda sobre este Aviso o sobre el tratamiento de tus datos personales,
        escríbenos a <a href={`mailto:${CORREO}`}>{CORREO}</a>, o al domicilio de {EMPRESA} señalado
        en el punto 1.
      </p>
    </>
  )
}
