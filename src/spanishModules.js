// ============================================================
// HORIZONS GETAWAYS — B2B Script: Spanish (Latin American)
// Dialect: South American / Florida Hispanic community
// Cultural adaptation, not literal translation
// ============================================================

export const SPANISH_DATA = {
  gatekeeper: {
    id: "gatekeeper",
    stage: "Opening",
    stageNum: 1,
    method: "SNAP",
    title: "Gatekeeper — ¿Con quién hablo?",
    cogTip: "Tu único objetivo aquí es saber si esta persona puede decir 'sí' a una alianza. No hagas pitch todavía — solo califica. Mantén el tono cálido y respetuoso.",
    script: `"Hola, buenas tardes. Le habla [Tu Nombre] de Horizons Getaways — somos una empresa de hospitalidad al aire libre. Me comunico porque trabajamos con agencias de viaje en un programa de referidos con comisión, y quería conectar con la persona que maneja nuevas alianzas o relaciones con proveedores. ¿Sería usted, o hay alguien más indicado con quien debería hablar?"`,
    notes: [
      "Esto NO es un pitch — es una pregunta de enrutamiento. Mantente ligero.",
      "Escucha el tono: si suena senior y comprometido, probablemente es eLPR aunque no lo diga",
      "Si dice 'sí, yo manejo eso' — transiciona de inmediato, no sobre-califiques",
      "Si duda — probablemente no es el LPR pero puede ser influyente",
      "En cultura hispana, 'buenas tardes' establece respeto desde la primera frase"
    ],
    responses: [
      { label: "Sí, yo manejo eso", next: "opening" },
      { label: "Déjeme transferirlo / un momento", next: "opening" },
      { label: "No está disponible ahora", next: "gatekeeper_front_desk" },
      { label: "Yo puedo pasar la información", next: "gatekeeper_influencer" },
      { label: "No nos interesa", next: "obj_not_interested" }
    ]
  },

  gatekeeper_influencer: {
    id: "gatekeeper_influencer",
    stage: "Opening",
    stageNum: 1,
    method: "H2H",
    title: "Influencer — Construir un Aliado Interno",
    cogTip: "Esta persona no puede decir sí, pero PUEDE llevar tu mensaje a quien sí puede. Trátala como aliada, no como obstáculo.",
    script: `"Eso me ayuda mucho, gracias. Y para saber con quién tengo el gusto — ¿cuál es su nombre y su rol? [Esperar respuesta]\n\nMucho gusto, [Nombre]. Le cuento brevemente para que tenga el contexto: trabajamos con agencias de viaje para ofrecer a sus clientes experiencias de glamping premium en el sureste de Estados Unidos, y las agencias ganan comisión por cada referido. Cero trabajo operativo de su parte.\n\n¿Tendría sentido que le enviara un resumen de una página para que pueda compartirlo con [el dueño / su gerente / quien maneje alianzas]? Así pueden ver si vale la pena una conversación — y con mucho gusto hago seguimiento directamente con ellos si les interesa.\n\n¿Cuál es el mejor correo para enviarlo, y a nombre de quién lo dirijo?"`,
    notes: [
      "Obtén su nombre — lo necesitas como referencia cuando llames de vuelta",
      "Dale justo lo suficiente para generar curiosidad, no un pitch completo",
      "El resumen de una página hace la venta por ti — hazle fácil reenviarlo",
      "Siempre pide el nombre y correo del LPR — ese es el verdadero premio aquí",
      "Agradece con sinceridad — puede que te mencione positivamente al LPR",
      "'Mucho gusto' establece un tono personal y cálido — esencial en cultura hispana"
    ],
    responses: [
      { label: "Claro, se lo paso — aquí está el correo", next: "callback" },
      { label: "Déjeme conectarlo directamente", next: "opening" },
      { label: "Mándelo al correo general", next: "callback" },
      { label: "No estamos buscando nuevos socios", next: "graceful_exit" }
    ]
  },

  gatekeeper_front_desk: {
    id: "gatekeeper_front_desk",
    stage: "Opening",
    stageNum: 1,
    method: "SNAP",
    title: "Recepción — Obtener el Contacto Correcto",
    cogTip: "Recepcionista = fuente de información. Sé cálido, sé breve, obtén un nombre y un horario. No intentes hacer pitch a través de ellos.",
    script: `"No hay problema, lo entiendo perfectamente. ¿Me podría ayudar con dos cosas rápidas?\n\nPrimero, ¿quién sería la mejor persona para hablar sobre nuevas alianzas o programas de referidos? Solo para pedir por nombre la próxima vez.\n\n[Esperar nombre]\n\nPerfecto, muchas gracias. ¿Y hay algún buen horario para encontrar a [Nombre] — mañanas, tardes? Quiero ser respetuoso con su agenda.\n\n[Esperar respuesta]\n\nExcelente — intento con [Nombre] el [día/hora]. Muchísimas gracias por su ayuda, [Nombre del Recepcionista]. ¡Que tenga muy buen día!"`,
    notes: [
      "Objetivo #1: Obtener el nombre del LPR",
      "Objetivo #2: Obtener el mejor horario para llamar",
      "Objetivo #3: Obtener el nombre del recepcionista (para que la próxima vez digas 'hola [Nombre], soy [tú] de nuevo')",
      "No expliques la alianza — no pueden actuar sobre ella",
      "Registra todo en CRM inmediatamente: nombre del LPR, mejor horario, nombre del recepcionista",
      "'Muchísimas gracias' es genuino y cálido — el superlativo funciona naturalmente en español"
    ],
    responses: [
      { label: "Tengo nombre + horario — llamaré de vuelta", next: "callback" },
      { label: "¡Me transfirieron!", next: "opening" },
      { label: "No quiere compartir información", next: "graceful_exit" }
    ]
  },

  opening: {
    id: "opening",
    stage: "Opening",
    stageNum: 1,
    method: "H2H",
    title: "Apertura Personalizada",
    cogTip: "Máximo 30 segundos. Menciona UN detalle específico de su agencia. El tono debe ser cálido y respetuoso — tuteo solo si ellos lo inician.",
    script: `"Hola [Nombre], ¿cómo está? Le habla [Tu Nombre] de Horizons Getaways. Encontré [Nombre de la Agencia] y me llamó la atención que se especializan en [viajes de aventura / destinos del sureste / experiencias boutique]. Le hago una pregunta rápida: ¿estaría abierto a conocer una alianza que les ha generado un ingreso adicional a agencias como la suya? Le tomo solo 60 segundos."`,
    notes: [
      "Investiga la agencia antes de llamar — busca su nicho o algo reciente en redes",
      "Usa 'usted' hasta que ellos cambien a tuteo — es señal de respeto en el mercado hispano",
      "El marco de 60 segundos respeta su tiempo y baja la resistencia",
      "Si detectas acento caribeño/cubano, el tono puede ser más directo y enérgico"
    ],
    responses: [
      { label: "Sí, cuénteme / Dale, dime", next: "pitch" },
      { label: "No me interesa", next: "obj_not_interested" },
      { label: "¿De qué empresa? / ¿Quién habla?", next: "credibility" },
      { label: "Estoy ocupado ahora", next: "obj_busy" }
    ]
  },

  credibility: {
    id: "credibility",
    stage: "Opening",
    stageNum: 1,
    method: "SNAP",
    title: "Establecer Credibilidad",
    cogTip: "Regla de Tres: quiénes somos, qué hacemos, una prueba concreta.",
    script: `"Excelente pregunta — Horizons Getaways es una marca de glamping y hospitalidad al aire libre con base en South Carolina. Operamos retiros de naturaleza premium y trabajamos con agencias de viaje para ofrecer a sus clientes experiencias únicas. Las agencias que trabajan con nosotros típicamente reciben un [X]% de comisión por cada reserva que nos refieren. ¿Le parece que valdría la pena una conversación rápida sobre esto?"`,
    notes: [
      "Tres tiempos: quiénes somos → qué hacemos → beneficio concreto",
      "Anclar con el % de comisión lo hace tangible de inmediato",
      "En cultura latina, la credibilidad se construye con confianza personal — no solo datos"
    ],
    responses: [
      { label: "Bueno, cuénteme más", next: "pitch" },
      { label: "Ya tenemos socios de glamping", next: "obj_competitor" },
      { label: "No es nuestro nicho", next: "obj_not_niche" },
      { label: "Mándeme un correo", next: "obj_send_email" }
    ]
  },

  pitch: {
    id: "pitch",
    stage: "Value Pitch",
    stageNum: 2,
    method: "SNAP",
    title: "Propuesta de Valor — Alianza",
    cogTip: "Problema → Impacto → Solución. Máximo tres oraciones antes de hacer una pregunta.",
    script: `"Le cuento brevemente: el turismo de naturaleza y glamping ha crecido más del 40% desde 2020, y muchas agencias nos dicen que sus clientes les piden cada vez más experiencias únicas al aire libre, pero no tienen un socio confiable para ofrecerlas.\n\nAhí es donde entramos nosotros. Horizons Getaways se encarga de todo — la propiedad, la experiencia, el servicio al huésped — y su agencia gana una comisión por cada referido. Cero riesgo de inventario, cero logística de su parte."`,
    notes: [
      "Empieza con la tendencia del mercado (validación externa)",
      "Enmarca el problema que ELLOS enfrentan (demanda sin oferta)",
      "En el mercado hispano, enfatiza 'cero riesgo' — la seguridad financiera pesa mucho",
      "Usa 'alianza' en vez de 'partnership' — suena más personal y comprometido"
    ],
    responses: [
      { label: "¿Cuál es la estructura de comisión?", next: "commission" },
      { label: "¿Qué tipo de propiedades tienen?", next: "properties" },
      { label: "Suena interesante — ¿cómo funciona?", next: "qualification" },
      { label: "No manejamos turismo al aire libre", next: "obj_not_niche" }
    ]
  },

  commission: {
    id: "commission",
    stage: "Value Pitch",
    stageNum: 2,
    method: "SNAP",
    title: "Comisión y Economía",
    cogTip: "Sé específico con los números. Lo vago genera desconfianza.",
    script: `"Nuestra comisión estándar para socios es del [X]% por reserva, y se paga [mensualmente / por reserva]. El valor promedio de una reserva está entre $[Y] y $[Z] por noche, así que para una estadía típica de 2 noches, estamos hablando de $[monto] por cada referido.\n\nAdemás, tenemos bonos escalonados — las agencias que refieren [N]+ reservas por trimestre pasan a una tasa del [más alto]%. Y les proporcionamos materiales de marketing co-branded sin costo para que su equipo pueda presentarlo a los clientes."`,
    notes: [
      "Llena los números reales antes de llamar",
      "La estructura escalonada crea aspiración y compromiso a largo plazo",
      "Materiales co-branded = menos trabajo para ellos",
      "Con hispanos, enfatiza la palabra 'sin costo' — elimina fricción"
    ],
    responses: [
      { label: "Eso está bien — ¿qué sigue?", next: "qualification" },
      { label: "La comisión es muy baja", next: "obj_commission_low" },
      { label: "¿Cómo rastrean los referidos?", next: "tracking" },
      { label: "Déjeme pensarlo", next: "obj_think" }
    ]
  },

  properties: {
    id: "properties",
    stage: "Value Pitch",
    stageNum: 2,
    method: "H2H",
    title: "Propiedades y Experiencias",
    cogTip: "Pinta una imagen. Usa lenguaje sensorial — ellos van a vender esto a sus clientes.",
    script: `"Operamos [X] propiedades en South Carolina — piense en tiendas de lujo, casas en los árboles y cabañas en lugares como [ubicaciones específicas]. Cada sitio está diseñado para una experiencia premium: fogatas privadas, opciones de comida local de granja a mesa, excursiones guiadas en la naturaleza.\n\nNuestros huéspedes son típicamente parejas, grupos pequeños o equipos corporativos buscando algo más allá del resort estándar. El tipo de experiencia que sus clientes van a publicar en redes y después le van a llamar para darle las gracias por la recomendación."`,
    notes: [
      "La especificidad vende: nombra lugares y amenidades reales",
      "Termina con el beneficio emocional para el AGENTE (gratitud del cliente = fidelización)",
      "Para público hispano: 'fogatas' y 'comida local' resuenan con la cultura de reunión familiar"
    ],
    responses: [
      { label: "A mis clientes les encantaría", next: "qualification" },
      { label: "¿Es de temporada?", next: "seasonal" },
      { label: "¿Qué hay para familias con niños?", next: "families" },
      { label: "Mándeme un folleto", next: "obj_send_email" }
    ]
  },

  qualification: {
    id: "qualification",
    stage: "Qualification",
    stageNum: 3,
    method: "SPIN",
    title: "Descubrimiento y Calificación",
    cogTip: "Haz UNA pregunta a la vez. Escucha. El objetivo es entender su negocio, no interrogar.",
    script: `SITUACIÓN:\n"Para poder adaptar esto a cómo trabaja su agencia — ¿cómo consiguen y recomiendan actualmente socios de alojamiento a sus clientes?"\n\nPROBLEMA:\n"Cuando un cliente les pide algo diferente — glamping, retiros en la naturaleza — ¿tienen opciones de confianza, o es un vacío que han querido llenar?"\n\nIMPLICACIÓN:\n"Y cuando no pueden ofrecer lo que buscan, ¿esos clientes terminan reservando por otro lado, o simplemente se enfrían?"\n\nNECESIDAD-BENEFICIO:\n"Si tuvieran un socio de glamping confiable que se encargara de todo y simplemente les enviara un cheque de comisión — ¿sería algo que valdría la pena integrar a su portafolio?"`,
    notes: [
      "No leas las cuatro preguntas — elige el flujo según la conversación",
      "S → P suele ser suficiente si ya están receptivos",
      "I → N solo si necesitan más convencimiento",
      "ESCUCHA más de lo que hablas: apunta a 60/40 ellos-a-ti",
      "En cultura hispana, las preguntas abiertas funcionan mejor que las directas"
    ],
    responses: [
      { label: "Sí, vamos a coordinar algo", next: "close" },
      { label: "Ya tenemos socios de turismo outdoor", next: "obj_competitor" },
      { label: "Necesito hablar con mi socio/equipo", next: "obj_decision_maker" },
      { label: "¿Cómo es el proceso de incorporación?", next: "onboarding" }
    ]
  },

  onboarding: {
    id: "onboarding",
    stage: "Qualification",
    stageNum: 3,
    method: "SNAP",
    title: "Proceso de Incorporación",
    cogTip: "Máximo tres pasos. La complejidad mata los negocios en esta etapa.",
    script: `"Es muy sencillo — tres pasos:\n\n1. Hacemos una llamada de incorporación de 20 minutos donde le muestro las propiedades, los precios y su enlace de referido.\n2. Le enviamos un kit digital co-branded — fotos de las propiedades, descripciones, precios — todo lo que su equipo necesita para presentarlo a los clientes.\n3. Empieza a referir. Nosotros nos encargamos de las reservas, la experiencia del huésped, todo. Usted recibe reportes de comisión mensualmente.\n\nLa mayoría de las agencias están operando en menos de una semana."`,
    notes: [
      "Regla de Tres: 3 pasos, no más",
      "Enfatiza la velocidad: 'menos de una semana' = baja barrera de compromiso",
      "La llamada de 20 minutos es el próximo paso real — hazlo fácil",
      "Con hispanos, usar 'nosotros nos encargamos' refuerza que no les dará trabajo extra"
    ],
    responses: [
      { label: "Suena fácil — hagámoslo", next: "close" },
      { label: "¿Qué pasa si un huésped tiene un problema?", next: "guest_support" },
      { label: "Necesito pensarlo", next: "obj_think" },
      { label: "Mándeme los detalles primero", next: "obj_send_email" }
    ]
  },

  close: {
    id: "close",
    stage: "Close",
    stageNum: 4,
    method: "SNAP",
    title: "Agendar y Cerrar",
    cogTip: "Ofrece DOS horarios específicos. Un 'cuándo le conviene' abierto mata el impulso.",
    script: `"Perfecto — vamos a agendar esa llamada de incorporación. Tengo disponibilidad el [Día A] a las [Hora] o el [Día B] a las [Hora] — ¿cuál le funciona mejor?\n\n[Después de confirmación]\n\nExcelente. Le envío una invitación con el link de Zoom y un resumen de una página sobre el programa para que pueda compartirlo con su equipo antes de la reunión. Con mucho gusto, [Nombre], ¡hablamos pronto!"`,
    notes: [
      "Dos opciones, no abierto — reduce la fatiga de decisión",
      "Confirma con invitación de calendario inmediatamente después de la llamada",
      "El resumen de una página les da algo para compartir = construir un aliado interno",
      "Cierra con calidez — en cultura hispana el cierre personal importa tanto como el negocio"
    ],
    responses: [
      { label: "¡Reunión agendada!", next: "success" },
      { label: "¿Puede llamarme la próxima semana?", next: "callback" },
      { label: "En realidad, déjeme pensarlo", next: "obj_think" }
    ]
  },

  success: {
    id: "success",
    stage: "Complete",
    stageNum: 5,
    method: "Complete",
    title: "Reunión Agendada — Llamada Completa",
    cogTip: "Registra la llamada en el CRM de inmediato. Toma un descanso de 90 segundos antes del siguiente marcaje.",
    script: `CHECKLIST POST-LLAMADA:\n\n✓ Registrar resultado en CRM (reunión agendada)\n✓ Enviar invitación de calendario dentro de 5 minutos\n✓ Adjuntar PDF de una página a la invitación\n✓ Programar recordatorio de seguimiento 24hrs antes de la reunión\n✓ Anotar detalles personales mencionados (familia, preferencias de viaje, nicho de la agencia, país de origen) para la llamada de incorporación`,
    notes: [
      "Regla de 90 segundos: descanso físico breve antes de la siguiente llamada",
      "Detalles personales = munición H2H para la reunión de incorporación",
      "En el mercado hispano, anotar el país de origen ayuda a personalizar futuras conversaciones",
      "Esto es un ÉXITO — reconócelo antes de seguir"
    ],
    responses: []
  },

  callback: {
    id: "callback",
    stage: "Complete",
    stageNum: 5,
    method: "Follow-Up",
    title: "Callback Programado",
    cogTip: "Fija un día Y hora específicos. Solo 'la próxima semana' = te van a ghostear.",
    script: `"Por supuesto — ¿le funcionaría el [día específico] como a las [hora específica]? Lo pongo en mi calendario para no dejarlo pasar.\n\n[Después de confirmación]\n\nPerfecto, también le mando un correo rápido con un resumen de lo que hablamos y un enlace a nuestra página de socios para que lo revise cuando tenga un momento. Hablamos el [día], [Nombre]. ¡Que tenga excelente día!"`,
    notes: [
      "Fija la llamada a una hora específica — lo vago = perdido",
      "El correo con resumen te mantiene presente en su mente",
      "Registra en CRM con fecha/hora del callback inmediatamente",
      "Cierra con calidez genuina — no fórmula"
    ],
    responses: []
  },

  obj_not_interested: {
    id: "obj_not_interested",
    stage: "Objection",
    stageNum: "OBJ",
    method: "Challenger",
    title: '"No me interesa"',
    cogTip: "No discutas. Reenmarca con una pregunta. Tienes UNA oportunidad para pivotar.",
    script: `"Totalmente entendido — y le agradezco la honestidad. Solo por curiosidad: ¿es porque ya tienen cubierto el tema de glamping/turismo al aire libre, o es más que no es una categoría que sus clientes les piden?\n\n[Si ya tienen socios]: "Entiendo. No buscamos reemplazar a nadie — algunas agencias nos usan como opción complementaria específicamente para el sureste. ¿Valdría la pena un resumen de 2 minutos solo para tenerlo como alternativa?"\n\n[Si no es su categoría]: "Tiene sentido. Lo que hemos escuchado de otras agencias es que los clientes están pidiendo cada vez más escapadas en la naturaleza, incluso a agencias que no se especializan en eso. Si esa tendencia toca su puerta, ¿le gustaría tener un socio listo para responder?"`,
    notes: [
      "La pregunta diagnóstica revela la objeción REAL",
      "Enfoque Challenger: ofrece un insight (tendencia del mercado) para reencuadrar",
      "'Tenerlo como alternativa' = cero compromiso, alta curiosidad",
      "Con hispanos, 'le agradezco la honestidad' muestra respeto genuino y abre la puerta"
    ],
    responses: [
      { label: "Bueno, deme la versión rápida", next: "pitch" },
      { label: "No, de verdad no me interesa", next: "graceful_exit" },
      { label: "Mándeme algo por correo", next: "obj_send_email" }
    ]
  },

  obj_busy: {
    id: "obj_busy",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: '"Estoy ocupado ahora"',
    cogTip: "Respeta su tiempo. Ofrece un callback específico — no ruegues por 'solo 30 segundos.'",
    script: `"Lo entiendo perfectamente — le digo en una sola oración y agendamos un mejor momento: trabajamos con agencias de viaje para ofrecer glamping premium en el sureste de Estados Unidos y pagamos comisión por cada referido.\n\n¿Le funcionaría el [mañana / jueves] como a las [hora] para una llamada rápida de 5 minutos?"`,
    notes: [
      "Una oración = respeto (SNAP: Simple)",
      "Hora específica, no '¿cuándo le conviene?'",
      "Si dice que no al callback también — salida elegante",
      "En cultura hispana, 'lo entiendo perfectamente' valida sin ser condescendiente"
    ],
    responses: [
      { label: "Sí, llámeme el [día/hora]", next: "callback" },
      { label: "Mándeme un correo nada más", next: "obj_send_email" },
      { label: "No me interesa", next: "graceful_exit" }
    ]
  },

  obj_send_email: {
    id: "obj_send_email",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: '"Mándeme un correo"',
    cogTip: "No lo pelees — pero agrega un micro-compromiso para mantener el hilo vivo.",
    script: `"Con mucho gusto — ¿cuál es su mejor correo? Le envío un resumen de una página con los detalles de comisión y las propiedades destacadas.\n\nUna pregunta rápida para personalizarlo: ¿sus clientes tienden más a escapadas de pareja, viajes familiares o retiros corporativos? Así le incluyo las propiedades más relevantes.\n\n[Después de que respondan]\n\nPerfecto, lo tiene en su bandeja dentro de la hora. Y le doy seguimiento el [día] solo para asegurarme de que no cayó en spam — ¿le parece?"`,
    notes: [
      "Obtener su correo = contacto real capturado",
      "La pregunta de 'personalizar' = micro-engagement + datos de calificación",
      "Agenda la llamada de seguimiento EN ESTA LLAMADA — no lo dejes abierto",
      "'Dentro de la hora' = urgencia y profesionalismo",
      "'Con mucho gusto' suena natural y servicial en español — úsalo"
    ],
    responses: [
      { label: "Correo enviado + seguimiento agendado", next: "callback" },
      { label: "No quiere dar correo", next: "graceful_exit" }
    ]
  },

  obj_competitor: {
    id: "obj_competitor",
    stage: "Objection",
    stageNum: "OBJ",
    method: "Challenger",
    title: '"Ya tenemos socios"',
    cogTip: "No compitas — complementa. Posiciónate como adición, no reemplazo.",
    script: `"Qué bueno — eso significa que sus clientes ya piden este tipo de experiencias, y eso es exactamente nuestro fuerte. La mayoría de nuestras mejores agencias socias trabajan con varias marcas de hospitalidad al aire libre.\n\nLa pregunta es: ¿su socio actual cubre South Carolina y el sureste específicamente? Porque ahí es donde somos más fuertes, y tener profundidad regional importa cuando los clientes preguntan por detalles.\n\n¿Tendría sentido tenernos como su opción para el sureste, complementando lo que ya tienen?"`,
    notes: [
      "Valida su alianza existente (H2H: respeto)",
      "Insight Challenger: la especialización regional importa",
      "'Complementando' elimina la amenaza de reemplazo",
      "Con hispanos, 'qué bueno' es validación genuina — no suena sarcástico como podría en inglés"
    ],
    responses: [
      { label: "Nos vendría bien una opción para el sureste", next: "qualification" },
      { label: "Nuestro socio actual cubre esa zona", next: "graceful_exit" },
      { label: "Cuénteme más de sus propiedades", next: "properties" }
    ]
  },

  obj_not_niche: {
    id: "obj_not_niche",
    stage: "Objection",
    stageNum: "OBJ",
    method: "Challenger",
    title: '"No es nuestro nicho / No manejamos outdoor"',
    cogTip: "Movimiento Challenger: enséñales algo sobre su propio mercado.",
    script: `"Justamente eso es lo que lo hace interesante — muchas agencias que no se especializan en outdoor están descubriendo que sus clientes lo piden de todas formas. El mercado de hospitalidad al aire libre alcanzó los $[X]B el año pasado, y el segmento que más crece es gente que nunca ha acampado pero quiere una experiencia de naturaleza de lujo.\n\nEntonces no es realmente 'aventura al aire libre' — es más como hospitalidad boutique que sucede en la naturaleza. ¿Valdría la pena ver si funciona como complemento para sus clientes actuales?"`,
    notes: [
      "Reencuadra: no es camping, es hospitalidad de lujo en la naturaleza",
      "Datos del mercado = credibilidad (ten números reales listos)",
      "Enfoque Challenger: dales un insight que no tenían",
      "'Complemento' = bajo compromiso",
      "Para hispanos, 'justamente' refuerza que entiendes su perspectiva"
    ],
    responses: [
      { label: "Hmm, quizás como complemento", next: "pitch" },
      { label: "Aún así no es para nosotros", next: "graceful_exit" },
      { label: "Mándeme más información", next: "obj_send_email" }
    ]
  },

  obj_think: {
    id: "obj_think",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SPIN",
    title: '"Déjeme pensarlo"',
    cogTip: "Aísla la duda. 'Déjeme pensarlo' = objeción no expresada.",
    script: `"Por supuesto — y quiero que se sienta cómodo con la decisión. ¿Puedo preguntarle: hay algún punto específico que le gustaría evaluar? A veces es la estructura de comisión, a veces es simplemente el timing.\n\n[Si es comisión]: → Navegar al módulo de comisión\n[Si es timing]: "Totalmente justo. ¿Qué tal si dejamos una llamada tentativa de incorporación para el [fecha] — sin presión, y si decide que no es para ustedes, la cancela sin problema? Así no tiene que acordarse de contactarnos después."\n[Si necesita aprobación]: → Navegar al módulo de decision maker`,
    notes: [
      "SPIN Need-Payoff: ayúdales a articular qué los detiene",
      "La pregunta diagnóstica convierte una excusa vaga en una objeción accionable",
      "'Dejamos una llamada tentativa' = lenguaje de bajo compromiso",
      "Nunca termines sin un próximo paso en el calendario",
      "Con hispanos, 'quiero que se sienta cómodo' muestra que priorizas la relación sobre la venta"
    ],
    responses: [
      { label: "Es la comisión — explíqueme más", next: "commission" },
      { label: "Necesito consultarlo con mi socio/jefe", next: "obj_decision_maker" },
      { label: "Dejemos algo tentativo", next: "close" },
      { label: "Yo le aviso cuando esté listo", next: "graceful_exit" }
    ]
  },

  obj_commission_low: {
    id: "obj_commission_low",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: '"La comisión es muy baja"',
    cogTip: "Ancla en el valor total, no solo en el porcentaje. Y menciona el escalón superior.",
    script: `"Lo entiendo — el porcentaje de comisión importa. Déjeme ponerlo en contexto: nuestra reserva promedio es de $[X] por una estadía de 2 noches, así que al [Y]% estamos hablando de $[Z] por referido, sin ningún costo operativo de su parte.\n\nY aquí viene lo bueno: una vez que llegan a [N] referidos en un trimestre, la tasa sube al [más alto]%. Algunos de nuestros mejores socios de agencias están generando $[monto anual] al año solo con referidos de glamping.\n\n¿Le ayudaría ver los números concretos en un resumen de una página?"`,
    notes: [
      "Reencuadra de % a $ por referido — más tangible",
      "Estructura escalonada = motivación aspiracional",
      "Cero gastos operativos = ganancia pura",
      "Ofrece el resumen como próximo paso concreto",
      "Para hispanos, 'aquí viene lo bueno' crea anticipación natural"
    ],
    responses: [
      { label: "Mándeme los números", next: "obj_send_email" },
      { label: "Eso es más razonable", next: "close" },
      { label: "Sigue siendo bajo para nosotros", next: "graceful_exit" }
    ]
  },

  obj_decision_maker: {
    id: "obj_decision_maker",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: '"Necesito hablar con mi socio/equipo"',
    cogTip: "Equípalos para vender internamente. Ahora son tu aliado.",
    script: `"Tiene todo el sentido — es inteligente incluir a su equipo. ¿Qué le parece si le envío un resumen de una página que pueda reenviar? Cubre la estructura de comisión, las propiedades destacadas y cómo funciona el rastreo de referidos — todo lo que ellos querrían ver.\n\n¿Y tendría sentido que yo me uniera a una llamada rápida con ambos? A veces es más fácil cuando puedo responder preguntas directamente. Podría el [Día A] o el [Día B] — ¿alguno les funciona?"`,
    notes: [
      "Dale munición: el resumen de una página hace que ELLOS se vean preparados",
      "Ofrece una llamada de tres — elimina el riesgo del 'teléfono descompuesto'",
      "Dos opciones de tiempo específicas, no abierto",
      "Ahora son tu aliado interno — trátalos así",
      "En cultura hispana, las decisiones en equipo/familia son la norma — respétalo"
    ],
    responses: [
      { label: "Mándeme el resumen, yo lo comparto", next: "obj_send_email" },
      { label: "Hagamos una llamada juntos", next: "close" },
      { label: "Yo le aviso", next: "callback" }
    ]
  },

  tracking: {
    id: "tracking",
    stage: "Info Module",
    stageNum: "INFO",
    method: "SNAP",
    title: "Sistema de Rastreo de Referidos",
    cogTip: "Mantenlo simple — no quieren especificaciones técnicas, quieren confianza de que funciona.",
    script: `"Lo mantenemos sencillo: cada agencia recibe un enlace de referido único y un panel de socios donde pueden ver las reservas, la comisión ganada y el estado de pago en tiempo real. Sus clientes también pueden mencionar el nombre de su agencia al reservar directamente, y lo acreditamos a su cuenta.\n\nLos pagos se procesan [mensualmente] vía [depósito directo / cheque]. Sin perseguir facturas — todo es automático."`,
    notes: [
      "Dos métodos de rastreo = flexible, fácil",
      "Panel en tiempo real = transparencia = confianza",
      "Pagos automáticos = cero carga administrativa para ellos",
      "Para hispanos, 'sin perseguir facturas' resuelve un dolor real — úsalo con énfasis"
    ],
    responses: [
      { label: "Eso funciona — avancemos", next: "close" },
      { label: "¿Cómo es el proceso de incorporación?", next: "onboarding" },
      { label: "Mándeme los datos de acceso", next: "obj_send_email" }
    ]
  },

  seasonal: {
    id: "seasonal",
    stage: "Info Module",
    stageNum: "INFO",
    method: "H2H",
    title: "Temporalidad y Disponibilidad",
    cogTip: "Convierte la temporalidad de debilidad en punto de venta.",
    script: `"Excelente pregunta — operamos todo el año, pero la experiencia cambia con las estaciones. Primavera y otoño son los picos para parejas y grupos pequeños. El verano es fuerte para familias. Y el invierno — ese es nuestro secreto mejor guardado: tarifas más bajas, temporada de fogatas, y esa vibra acogedora de cabaña que a los clientes les encanta.\n\nEntonces, desde el punto de vista de referidos, siempre hay algo que recomendar sin importar cuándo quiera viajar su cliente."`,
    notes: [
      "Todo el año = oportunidad constante de referidos",
      "Cada temporada tiene un gancho — dales puntos de venta",
      "Invierno como 'secreto mejor guardado' = insight Challenger",
      "Para hispanos, 'fogatas' evoca reunión familiar — concepto culturalmente poderoso"
    ],
    responses: [
      { label: "Bueno saberlo — cuénteme de la alianza", next: "qualification" },
      { label: "¿Qué hay de disponibilidad en temporada alta?", next: "properties" },
      { label: "Agendemos una llamada", next: "close" }
    ]
  },

  families: {
    id: "families",
    stage: "Info Module",
    stageNum: "INFO",
    method: "H2H",
    title: "Opciones para Familias",
    cogTip: null,
    script: `"Por supuesto — tenemos varias propiedades diseñadas específicamente para familias. Actividades para niños como senderos naturales, kits para hacer s'mores, guías de observación de estrellas, y algunos sitios incluso tienen acceso a arroyos y juegos al aire libre.\n\nLos padres obtienen la experiencia de lujo, y los niños viven una aventura de la que van a hablar en la escuela por semanas. De hecho, es uno de nuestros segmentos con más rebookings."`,
    notes: [
      "Pinta la imagen para el agente — ellos van a usar estas palabras con sus clientes",
      "El dato de rebooking = oportunidad de comisión recurrente para ellos",
      "En el mercado hispano, la familia es central — este módulo tiene peso extra"
    ],
    responses: [
      { label: "Perfecto para mi base de clientes", next: "qualification" },
      { label: "¿Cuáles son los detalles de la alianza?", next: "commission" },
      { label: "Agendemos una llamada", next: "close" }
    ]
  },

  guest_support: {
    id: "guest_support",
    stage: "Info Module",
    stageNum: "INFO",
    method: "SNAP",
    title: "Soporte al Huésped y Responsabilidad",
    cogTip: null,
    script: `"Esa es una pregunta inteligente — y la respuesta es: nosotros nos encargamos de todo. Soporte al huésped, problemas en sitio, cancelaciones, reembolsos — todo eso es nuestra responsabilidad. La reputación de su agencia queda protegida porque nosotros somos dueños de la experiencia del huésped de principio a fin.\n\nUsted refiere, nosotros entregamos. Si algo sale mal, el cliente viene a nosotros, no a usted."`,
    notes: [
      "Cero responsabilidad = cero riesgo para la agencia",
      "La protección de reputación es el disparador emocional clave para dueños de agencias",
      "Corto y directo — SNAP: Simple",
      "Para hispanos, 'nosotros nos encargamos de todo' es muy poderoso — lo quita todo de sus hombros"
    ],
    responses: [
      { label: "Eso es lo que necesitaba escuchar", next: "close" },
      { label: "¿Cómo es la incorporación?", next: "onboarding" },
      { label: "Déjeme pensarlo", next: "obj_think" }
    ]
  },

  graceful_exit: {
    id: "graceful_exit",
    stage: "Complete",
    stageNum: 5,
    method: "H2H",
    title: "Salida Elegante — Puerta Abierta",
    cogTip: "Despídete con calidez. El 'no' de hoy es el 'sí' del próximo trimestre.",
    script: `"Le agradezco mucho su tiempo, [Nombre]. Le dejo mi correo — [email] — por si alguna vez un cliente le pregunta por algo diferente y quiere tener una opción rápida. Sin ninguna presión.\n\n¡Le deseo lo mejor a usted y a [Nombre de la Agencia] este [temporada/trimestre]. Que le vaya muy bien, ¡cuídese!"`,
    notes: [
      "Siempre deja la puerta abierta — las relaciones con agencias son juego largo",
      "Planta la semilla: 'por si un cliente pregunta'",
      "Registra en CRM con estado 'No Ahora', programa re-engagement a 90 días",
      "Regla de 90 segundos: toma un micro-descanso antes del siguiente marcaje",
      "'Cuídese' es una despedida cálida y natural en español — úsala siempre"
    ],
    responses: []
  }
};

export const SPANISH_TOPIC_GROUPS = {
  "Opening": ["gatekeeper", "gatekeeper_influencer", "gatekeeper_front_desk", "opening", "credibility"],
  "Value Pitch": ["pitch", "commission", "properties"],
  "Qualification": ["qualification", "onboarding"],
  "Close": ["close", "success", "callback"],
  "Objections": ["obj_not_interested", "obj_busy", "obj_send_email", "obj_competitor", "obj_not_niche", "obj_think", "obj_commission_low", "obj_decision_maker"],
  "Info Modules": ["tracking", "seasonal", "families", "guest_support", "graceful_exit"],
};
