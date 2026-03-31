// ============================================================
// HORIZONS GETAWAYS — Birthday Outreach: Spanish (Latin American)
// Warm call to past Florida guests — birthday in April/May
// Dialect: South American / Florida Hispanic community
// Cultural adaptation, not literal translation
// ============================================================

export const SPANISH_BIRTHDAY_DATA = {
  bday_opening_warm: {
    id: "bday_opening_warm",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Apertura Cálida — Ya Nos Conocen",
    cogTip: "No eres un desconocido. Eligieron Horizons antes. Habla como alguien que los recuerda — no como alguien leyendo una lista.",
    script: `"¿Hola, hablo con [Nombre]? ¡Hola [Nombre]! Le habla [tu nombre] de Horizons Getaways. Usted se hospedó con nosotros en nuestra ubicación de Florida hace un tiempo, y quería llamarle personalmente — acabamos de abrir una nueva ubicación y me acordé de usted."`,
    notes: [
      "Usa su nombre al menos dos veces en los primeros 30 segundos",
      "Pausa después de 'me acordé de usted' — deja que aterrice antes de continuar",
      "Cálido y sin prisa — esto NO es tono de llamada en frío",
      "En español, 'me acordé de usted' suena más personal y genuino que en inglés"
    ],
    responses: [
      { label: "¡Ah sí, claro que me acuerdo!", next: "bday_pitch_news" },
      { label: "¿Quién habla?", next: "bday_credibility" },
      { label: "Estoy ocupado/a ahora", next: "bday_obj_busy" },
      { label: "No me interesa", next: "bday_obj_not_interested" },
    ],
  },

  bday_opening_news: {
    id: "bday_opening_news",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Apertura — Empezar con la Noticia",
    cogTip: "Un gancho real ('acabamos de abrir') te da una razón genuina para llamar. No suena a pitch de ventas — suena a actualización.",
    script: `"¡Hola [Nombre]! Le habla [tu nombre] de Horizons Getaways. Usted se hospedó con nosotros en Florida — y le llamo con una noticia muy buena. Acabamos de abrir una ubicación nueva en South Carolina, y quería que fuera de los primeros en enterarse."`,
    notes: [
      "Usa esta versión si la Opción A se siente muy suave para la situación",
      "'De los primeros en enterarse' crea exclusividad leve — úsalo naturalmente, no como táctica de presión",
      "En cultura hispana, compartir una primicia genera confianza y cercanía"
    ],
    responses: [
      { label: "¡Qué bueno, cuénteme más!", next: "bday_pitch_news" },
      { label: "¿Quién habla?", next: "bday_credibility" },
      { label: "Estoy ocupado/a", next: "bday_obj_busy" },
      { label: "No me interesa", next: "bday_obj_not_interested" },
    ],
  },

  bday_opening_birthday: {
    id: "bday_opening_birthday",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Apertura — Cumpleaños Primero (La Más Fuerte)",
    cogTip: "Empieza con el cumpleaños solo cuando sabes su mes. Es la apertura más personal — pero tiene que sentirse natural, no invasiva. El tono cálido lo es todo aquí.",
    script: `"¡Hola [Nombre]! Le habla [tu nombre] de Horizons Getaways — usted se hospedó con nosotros en Florida. Me di cuenta de que su cumpleaños es esta primavera, y tuve que llamarle — acabamos de abrir una ubicación nueva preciosa en South Carolina que sería absolutamente perfecta para celebrarlo."`,
    notes: [
      "MEJOR versión cuando sabes que su cumpleaños es en abril o mayo",
      "'Tuve que llamarle' señala entusiasmo genuino — no un guión",
      "Si se sorprenden de que sepas su cumpleaños: 'Está en su perfil de huésped de cuando se hospedó con nosotros'",
      "En español, 'tuve que llamarle' suena más personal y menos comercial"
    ],
    responses: [
      { label: "¡Ja, cómo supieron?", next: "bday_credibility" },
      { label: "Cuénteme del lugar nuevo", next: "bday_pitch_news" },
      { label: "Estoy ocupado/a", next: "bday_obj_busy" },
      { label: "No me interesa", next: "bday_obj_not_interested" },
    ],
  },

  bday_credibility: {
    id: "bday_credibility",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Reestablecer Quiénes Somos",
    cogTip: "Mantenlo breve. Un recuerdo vívido de su estadía en Florida vale más que una descripción de la empresa.",
    script: `"¡Claro! Horizons Getaways, somos el retiro de glamping donde se hospedó en Florida. Cabañas privadas, espacios al aire libre — esa experiencia Horizons. Tenemos su perfil de huésped de su estadía, y ahí fue donde noté que su cumpleaños se acerca. Acabamos de abrir una segunda ubicación en South Carolina y quise comunicarme personalmente."`,
    notes: [
      "Si no recuerdan la estadía en Florida para nada — pivotea a bday_pitch_news y no insistas",
      "Mantén este bloque bajo 20 segundos — es un puente, no un pitch",
      "'Quise comunicarme personalmente' refuerza la conexión humana"
    ],
    responses: [
      { label: "¡Ah sí, ya me acuerdo!", next: "bday_pitch_news" },
      { label: "OK, ¿qué hay en la nueva ubicación?", next: "bday_pitch_news" },
      { label: "No estoy seguro/a de recordar", next: "bday_pitch_news" },
    ],
  },

  bday_pitch_news: {
    id: "bday_pitch_news",
    stage: "Pitch",
    stageNum: "2",
    method: "H2H",
    title: "La Nueva Ubicación + Gancho de Cumpleaños",
    cogTip: "Pinta UNA imagen vívida, no listes características. 'Despertar en su propia cabaña el día de su cumpleaños' hace más que cualquier lista de amenidades.",
    script: `"Le cuento — acabamos de abrir Horizons Sand Hills en South Carolina. Es un retiro de glamping con cabañas privadas, espacios al aire libre y naturaleza hermosa por todos lados. Una vibra muy diferente a Florida, pero con esa misma esencia Horizons que usted ya conoce.\n\nY con su cumpleaños acercándose en [abril / mayo] — se me ocurrió, qué manera de celebrar. Imagínese despertar en su propia cabaña privada en medio de la naturaleza la mañana de su cumpleaños."`,
    notes: [
      "Pausa después de la imagen — deja que reaccionen antes de decir algo más",
      "No listes amenidades. Una imagen > cinco puntos",
      "'Esa misma esencia Horizons que usted ya conoce' activa su memoria — úsalo",
      "Si responden con energía — ve directo a bday_availability",
      "'Imagínese' es una palabra poderosa en español — invita a soñar"
    ],
    responses: [
      { label: "¡Eso suena increíble!", next: "bday_availability" },
      { label: "Cuénteme más del lugar", next: "bday_pitch_details" },
      { label: "¿Cuánto cuesta?", next: "bday_obj_price" },
      { label: "Ya tengo planes", next: "bday_obj_has_plans" },
      { label: "Quizás, no estoy seguro/a", next: "bday_obj_maybe" },
    ],
  },

  bday_pitch_details: {
    id: "bday_pitch_details",
    stage: "Pitch",
    stageNum: "2",
    method: "H2H",
    title: "Detalles del Lugar — A Pedido",
    cogTip: "Preguntaron — así que dales información real. Pero mantenlo conversacional, no como leyendo un folleto.",
    script: `"¡Con gusto! Sand Hills es nuestra propiedad más nueva — está en South Carolina, en medio de la naturaleza, con cabañas privadas que puedes reservar por una noche o un fin de semana. Tienes tu propio espacio, hay actividades al aire libre en el sitio, y tiene esa misma sensación de retiro que Florida pero en un paisaje completamente diferente. Abre en abril, así que el timing con su cumpleaños es perfecto."`,
    notes: [
      "Máximo 3-4 oraciones — todavía estás en la etapa de pitch",
      "Termina con una pregunta: '¿Suena como algo que le gustaría?'",
      "Si preguntan por amenidades específicas que no sabes — di 'Déjeme verificar eso y le confirmo'",
      "Nota: aquí se puede cambiar a tuteo si el tono de la conversación lo permite"
    ],
    responses: [
      { label: "Sí, suena muy bien", next: "bday_availability" },
      { label: "¿Cuánto sale?", next: "bday_obj_price" },
      { label: "Ya tengo planes", next: "bday_obj_has_plans" },
      { label: "No es lo mío realmente", next: "bday_obj_not_interested" },
    ],
  },

  bday_availability: {
    id: "bday_availability",
    stage: "Close",
    stageNum: "3",
    method: "SNAP",
    title: "Verificar Disponibilidad — Cierre Suave",
    cogTip: "No preguntes '¿quiere reservar?' — pregunta si quiere que revises disponibilidad. Es un micro-compromiso fácil de aceptar.",
    script: `"Entonces [Nombre] — ¿quiere que revise qué hay disponible cerca de su cumpleaños? Le puedo decir exactamente qué está abierto y cómo están las tarifas. Son dos minutos. Y si quiere apartar una fecha, lo podemos hacer ahora mismo."`,
    notes: [
      "Revisa Cloudbeds antes o durante esta llamada si es posible",
      "'Apartar una fecha' tiene menos fricción que 'hacer una reserva' — usa ese lenguaje",
      "Si dicen que sí — mueve a bday_booking_confirm",
      "Si dudan — bday_obj_maybe",
      "'Ahora mismo' crea urgencia suave sin presión"
    ],
    responses: [
      { label: "Sí, revisemos", next: "bday_booking_confirm" },
      { label: "Bueno, ¿cuáles son las tarifas?", next: "bday_obj_price" },
      { label: "Quizás, déjeme pensarlo", next: "bday_obj_maybe" },
      { label: "Ahora no", next: "bday_obj_not_interested" },
    ],
  },

  bday_booking_confirm: {
    id: "bday_booking_confirm",
    stage: "Close",
    stageNum: "3",
    method: "SNAP",
    title: "Confirmar la Reserva",
    cogTip: "Mantén la energía cálida y festiva — están reservando un cumpleaños, no firmando un contrato. Que se sienta emocionante.",
    script: `"¡Perfecto! Estoy viendo las fechas de [fechas] — tenemos [disponibilidad]. La tarifa sería de [precio]. Para apartar esa fecha solo necesito su nombre y correo — el resto lo manejamos nosotros. ¡Y feliz cumpleaños adelantado, [Nombre] — va a ser uno muy especial!"`,
    notes: [
      "Llena [fechas], [disponibilidad], [precio] desde Cloudbeds en tiempo real",
      "Confirma detalles en Cloudbeds inmediatamente después de la llamada",
      "Envía confirmación a su correo el mismo día",
      "Registra resultado en CRM: nombre, mes de cumpleaños, fechas reservadas",
      "'Va a ser uno muy especial' — cierra con emoción, no con logística"
    ],
    responses: [
      { label: "¡Listo, hagámoslo!", next: "bday_success" },
      { label: "¿Puedo pensarlo?", next: "bday_obj_maybe" },
      { label: "El precio es muy alto", next: "bday_obj_price" },
    ],
  },

  bday_success: {
    id: "bday_success",
    stage: "Close",
    stageNum: "3",
    method: "H2H",
    title: "Reserva Confirmada",
    cogTip: "Termina en alto. Esto es una celebración — iguala la energía.",
    script: `"¡Maravilloso! Le tengo apartado para [fechas] en Sand Hills. Va a recibir una confirmación a [correo] en breve. Estamos muy emocionados de que celebre su cumpleaños con nosotros en la nueva ubicación — va a ser algo especial. Si tiene alguna pregunta antes de eso, contáctenos en gohorizons.com. ¡No vemos la hora de verle ahí, [Nombre]!"`,
    notes: [
      "Confirma la reserva en Cloudbeds inmediatamente",
      "Envía correo de confirmación el mismo día",
      "Registra en CRM: reservado, fechas, nombre del huésped",
      "Esto es una victoria — celébralo internamente también"
    ],
    responses: [
      { label: "Llamada completa — registrar", next: "bday_post_call" },
    ],
  },

  bday_callback: {
    id: "bday_callback",
    stage: "Close",
    stageNum: "3",
    method: "H2H",
    title: "Programar Callback",
    cogTip: "Una hora específica tiene 3 veces más probabilidad de resultar en un callback real que un 'lo intento después'.",
    script: `"No hay problema, [Nombre]. ¿Cuándo le quedaría mejor para hablar — le funcionaría el [día], como a las [hora]? Mientras tanto le envío nuestro sitio web para que le eche un vistazo: gohorizons.com."`,
    notes: [
      "Obtén un día y hora específicos — no 'algún día de la próxima semana'",
      "Programa recordatorio en CRM inmediatamente",
      "Envía el enlace del sitio web por texto o correo antes de colgar si es posible"
    ],
    responses: [
      { label: "Callback programado — registrar", next: "bday_post_call" },
    ],
  },

  bday_post_call: {
    id: "bday_post_call",
    stage: "Close",
    stageNum: "3",
    method: "H2H",
    title: "Checklist Post-Llamada",
    cogTip: "La llamada termina — el trabajo no. Registra todo ahora mientras está fresco.",
    script: `— Checklist interno — no se dice en voz alta —`,
    notes: [
      "Registrar en CRM: nombre del huésped, mes de cumpleaños, nivel de interés, resultado",
      "Si pidieron disponibilidad — revisar Cloudbeds y enviar detalles dentro de 24h",
      "Si 'quizás después' — programar seguimiento para 7 días",
      "Si reservó — confirmar en Cloudbeds + enviar correo de confirmación",
      "Si no contestó — intentar una vez más otro día, luego marcar como no localizado",
      "Enviar enlace del sitio web: gohorizons.com",
    ],
    responses: [
      { label: "Iniciar nueva llamada", next: "bday_opening_birthday" },
    ],
  },

  bday_obj_busy: {
    id: "bday_obj_busy",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objeción — Estoy Ocupado/a",
    cogTip: "No insistas. Respeta su tiempo — es la forma más rápida de mantener la puerta abierta.",
    script: `"Entiendo perfectamente. Le digo rápido — somos Horizons Getaways, se hospedó con nosotros en Florida. Acabamos de abrir una nueva ubicación de glamping en South Carolina, y su cumpleaños es en [abril/mayo] — pensé que podría ser perfecto. ¿Le puedo enviar un enlace rápido y hacer seguimiento la próxima semana?"`,
    notes: [
      "Menos de 20 segundos — honra lo que dijiste ('le digo rápido')",
      "El objetivo aquí: obtener permiso para seguimiento, no hacer pitch",
      "Si aceptan un callback — obtén una hora específica",
      "'Entiendo perfectamente' valida sin condescender"
    ],
    responses: [
      { label: "OK, mándeme el enlace", next: "bday_callback" },
      { label: "En realidad cuénteme más", next: "bday_pitch_news" },
      { label: "No, gracias", next: "bday_graceful_exit" },
    ],
  },

  bday_obj_not_interested: {
    id: "bday_obj_not_interested",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — No Me Interesa",
    cogTip: "No pelees. Deja la puerta abierta — fueron huéspedes una vez, pueden serlo de nuevo.",
    script: `"No se preocupe para nada, [Nombre] — lo entiendo completamente. Si alguna vez quiere conocer la nueva ubicación, nuestro sitio web es gohorizons.com. Vale la pena echarle un vistazo cuando tenga un momento. ¡Que tenga un cumpleaños maravilloso esta primavera!"`,
    notes: [
      "No hay segundo intento después de un 'no me interesa' claro",
      "Cierre cálido y genuino — pueden volver por su cuenta",
      "Registrar en CRM: no interesado, fecha de llamada",
      "'No se preocupe para nada' es la mejor forma de despresurizar en español"
    ],
    responses: [
      { label: "Fin de llamada — registrar", next: "bday_post_call" },
    ],
  },

  bday_obj_price: {
    id: "bday_obj_price",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objeción — ¿Cuánto Cuesta? / Muy Caro",
    cogTip: "No des precio sin contexto de disponibilidad. Ancla primero en la experiencia, luego en el número.",
    script: `"Muy buena pregunta. Las tarifas dependen de las fechas y el tipo de cabaña — déjeme revisar qué hay disponible cerca de su cumpleaños para darle números exactos. ¿Qué fechas estaba pensando? Así le doy algo concreto, no una estimación vaga."`,
    notes: [
      "Nunca des un rango vago de precios — los ancla al número equivocado",
      "Abre Cloudbeds y da disponibilidad + precios reales",
      "Si el precio genuinamente es muy alto: 'Tenemos diferentes tipos de cabañas a diferentes precios — déjeme mostrarle qué hay disponible'",
      "En cultura hispana, 'darle algo concreto' muestra seriedad y respeto"
    ],
    responses: [
      { label: "OK, revisemos fechas", next: "bday_availability" },
      { label: "Sigue pareciendo mucho", next: "bday_graceful_exit" },
      { label: "En realidad hagámoslo", next: "bday_booking_confirm" },
    ],
  },

  bday_obj_has_plans: {
    id: "bday_obj_has_plans",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — Ya Tengo Planes de Cumpleaños",
    cogTip: "No insistas. Pivotea a más adelante en el año o deja una buena impresión para la próxima vez.",
    script: `"¡Qué bueno! ¡Feliz cumpleaños adelantado! Si algo cambia o busca una escapada más adelante este año, ténganos en cuenta. Sand Hills va a estar espectacular en el verano también. Le dejo el enlace — gohorizons.com — solo para que lo tenga."`,
    notes: [
      "Este no es un contacto perdido — son un huésped anterior con futuro",
      "Registrar en CRM: tiene planes, seguimiento en 3 meses",
      "Escapada de verano/otoño es un gancho secundario genuino",
      "'¡Qué bueno!' valida sus planes sin sarcasmo — importante en español"
    ],
    responses: [
      { label: "En realidad, ¿qué fechas hay?", next: "bday_availability" },
      { label: "Fin de llamada — registrar", next: "bday_post_call" },
    ],
  },

  bday_obj_maybe: {
    id: "bday_obj_maybe",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objeción — Quizás / Necesito Pensarlo",
    cogTip: "Urgencia suave — no presión. Abril y mayo sí se llenan. Menciónalo una vez, naturalmente.",
    script: `"Lo entiendo totalmente — sin ninguna presión. Lo único que le menciono es que abril y mayo tienden a llenarse bastante rápido porque es nuestra temporada de apertura. ¿Quiere que simplemente revise qué queda disponible cerca de su cumpleaños para que tenga la información? No tiene que decidir nada ahora."`,
    notes: [
      "Ofrecer revisar disponibilidad — es un 'sí' de bajo compromiso",
      "'No tiene que decidir nada ahora' reduce la resistencia",
      "Si todavía están indecisos — ofrece un callback a una hora específica",
      "'Sin ninguna presión' es clave — en cultura hispana la presión directa genera rechazo"
    ],
    responses: [
      { label: "Sí, revise disponibilidad", next: "bday_availability" },
      { label: "Yo les llamo", next: "bday_callback" },
      { label: "No, paso", next: "bday_graceful_exit" },
    ],
  },

  bday_graceful_exit: {
    id: "bday_graceful_exit",
    stage: "Info",
    stageNum: "INFO",
    method: "H2H",
    title: "Salida Elegante",
    cogTip: "Cada llamada que termina bien es una reserva futura. Déjalos con calidez.",
    script: `"Entendido completamente, [Nombre]. Sin presión — solo quería asegurarme de que supiera de esto. Nuestro sitio web es gohorizons.com si alguna vez quiere echarle un vistazo. ¡Que tenga un cumpleaños increíble esta primavera — cuídese mucho!"`,
    notes: [
      "Cálido, genuino — sin frustración en la voz",
      "Registrar en CRM: resultado, fecha, notas",
      "No volver a llamar a menos que ellos se comuniquen primero",
      "'Cuídese mucho' es la despedida cálida perfecta en español"
    ],
    responses: [
      { label: "Fin de llamada — registrar", next: "bday_post_call" },
    ],
  },

  bday_venue_info: {
    id: "bday_venue_info",
    stage: "Info",
    stageNum: "INFO",
    method: "H2H",
    title: "Referencia Rápida del Lugar",
    cogTip: "Datos disponibles si preguntan algo específico. Mantén las respuestas cortas — estás en una llamada, no en un tour.",
    script: `— Solo referencia — responde preguntas según sea necesario —`,
    notes: [
      "Ubicación: South Carolina — Horizons Sand Hills",
      "Tipo de propiedad: Glamping — cabañas privadas, espacios al aire libre",
      "Actividades: Actividades al aire libre en sitio (detalles en Cloudbeds)",
      "Apertura: Abril 2026",
      "Capacidad: Individuales, parejas, grupos pequeños",
      "Sitio web: gohorizons.com",
      "Reservas: Vía Cloudbeds — revisar disponibilidad en tiempo real",
    ],
    responses: [
      { label: "Volver al pitch", next: "bday_pitch_news" },
      { label: "Revisar disponibilidad", next: "bday_availability" },
    ],
  },
};

export const SPANISH_BIRTHDAY_TOPIC_GROUPS = {
  "Opening": ["bday_opening_birthday", "bday_opening_warm", "bday_opening_news", "bday_credibility"],
  "Pitch": ["bday_pitch_news", "bday_pitch_details"],
  "Close": ["bday_availability", "bday_booking_confirm", "bday_success", "bday_callback", "bday_post_call"],
  "Objections": ["bday_obj_busy", "bday_obj_not_interested", "bday_obj_price", "bday_obj_has_plans", "bday_obj_maybe"],
  "Info": ["bday_graceful_exit", "bday_venue_info"],
};
