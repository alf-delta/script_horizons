// ============================================================
// HORIZONS GETAWAYS — Inbound Leads: Spanish (Latin American)
// Warm leads from ad campaigns ("beach town south carolina" etc.)
// Dialect: South American / Florida Hispanic community
// Cultural adaptation — not a literal translation
// ============================================================

export const SPANISH_INBOUND_DATA = {

  inbound_opening: {
    id: "inbound_opening",
    stage: "Opening",
    stageNum: 1,
    method: "H2H",
    title: "Apertura Cálida — Llenaron el Formulario",
    cogTip: "Ellos vinieron a ti — eso es enorme. Ya están interesados en un viaje a South Carolina. Tu trabajo no es vender desde cero, es redirigir. Empieza con la intención de ellos, no con tu producto.",
    script: `"Hola, ¿hablo con [Nombre]? ¡Hola [Nombre]! Le habla [Tu Nombre] de Horizons Getaways — recientemente nos contactó sobre una escapada en South Carolina y quería hacerle seguimiento personalmente.\n\nPrimero — ¿le llamé en buen momento? [Esperar]\n\nPerfecto. Vi que estaba buscando opciones en South Carolina para un viaje — me gustaría escuchar un poco sobre lo que tenía en mente. ¿Qué tipo de experiencia estaba buscando?"`,
    notes: [
      "Siempre pregunta si es buen momento — llenaron un formulario, no respondieron una llamada en frío",
      "Empieza con una pregunta sobre SU visión — no hagas pitch todavía",
      "Escucha: con quién viajan, cuándo, qué ambiente buscan",
      "El objetivo de este módulo es recopilar información, no vender",
      "En cultura hispana, 'hacerle seguimiento personalmente' establece conexión genuina desde el inicio"
    ],
    responses: [
      { label: "Playa / ambiente costero", next: "inbound_reposition" },
      { label: "Solo explorando opciones", next: "inbound_pitch" },
      { label: "Ya sabe qué es el glamping", next: "inbound_pitch" },
      { label: "Ocupado / mal momento", next: "inbound_callback" },
      { label: "Número equivocado / no interesa", next: "inbound_graceful_exit" }
    ]
  },

  inbound_reposition: {
    id: "inbound_reposition",
    stage: "Reposition",
    stageNum: 2,
    method: "H2H",
    title: "El Pivote — De Playa a Naturaleza",
    cogTip: "No desestimes lo que querían. Valídalo primero. Luego ofrece una reinterpretación — no un reemplazo. El objetivo es '¿qué tal si le cuento que hay algo aún mejor para lo que realmente busca?'",
    script: `"Lo entiendo perfectamente — South Carolina tiene lugares costeros increíbles, y ese ambiente de pueblo playero es muy atractivo. Pero permítame compartirle algo.\n\nMuchos de nuestros huéspedes llegaron a nosotros de la misma manera — pensando en playa, y luego vivieron algo completamente diferente y, honestamente, no podían creer que no lo habían hecho antes.\n\nSomos un retiro de glamping a unos 90 minutos de Charlotte, en medio de la naturaleza en South Carolina. Imagínese: cabañas privadas, fogatas al aire libre, kayak, piscina — pero sin las multitudes, el tráfico, ni los restaurantes caros que uno encuentra en los pueblos playeros en temporada alta.\n\nEs el mismo South Carolina, pero con una esencia completamente diferente. Más privado, más personal, y honestamente más memorable. ¿El viaje es en pareja, con familia, o con un grupo de amigos?"`,
    notes: [
      "'Lo entiendo perfectamente' — valida antes de pivotar, nunca descarte",
      "La frase 'llegaron a nosotros de la misma manera' = prueba social + normaliza el pivote",
      "'No podían creer que no lo habían hecho antes' = arrepentimiento futuro como frame",
      "Los problemas reales de los pueblos playeros (multitudes, tráfico, precios) son universales — úsalos naturalmente",
      "Termina con pregunta calificadora — recopila información para el pitch"
    ],
    responses: [
      { label: "Viaje romántico / en pareja", next: "inbound_pitch_couples" },
      { label: "Familia con niños", next: "inbound_pitch_families" },
      { label: "Grupo de amigos", next: "inbound_pitch" },
      { label: "Solo / flexible", next: "inbound_pitch" },
      { label: "Pero yo realmente quería la playa", next: "inbound_obj_wanted_beach" }
    ]
  },

  inbound_pitch: {
    id: "inbound_pitch",
    stage: "Pitch",
    stageNum: 3,
    method: "H2H",
    title: "Lo Que Ofrecemos — La Experiencia",
    cogTip: "Pinta una imagen. No listes amenidades — describe una sensación. 'Despertar solo con árboles y pájaros alrededor' supera cualquier lista de características.",
    script: `"Le cuento cómo es Horizons Getaways en la práctica: llega a su propia cabaña privada — sin paredes compartidas, sin recepción, sin lobby. Solo su espacio, su fogata, y la naturaleza alrededor.\n\nDurante el día tiene kayak, pesca, bicicletas eléctricas, piscina, voleibol — hay bastante para hacer si quiere actividad. Y si prefiere sentarse en el porche con un café y no hablar con nadie, también puede hacer eso.\n\nEstamos en South Carolina, a unos 90 minutos de Charlotte — así que es una escapada de verdad sin el estrés de un vuelo.\n\n¿Qué fechas estaba pensando? Puedo revisar disponibilidad y darle una idea real de los precios."`,
    notes: [
      "'Sin paredes compartidas, sin recepción' — habla directamente de lo que la gente detesta de los hoteles",
      "Lista actividades pero equilibra con la opción de 'no hacer nada' — cubre ambos tipos de huéspedes",
      "90 minutos de Charlotte = manejo fácil, escape real",
      "Termina moviéndose hacia disponibilidad — siguiente paso natural"
    ],
    responses: [
      { label: "Eso suena increíble — ¿fechas y precios?", next: "inbound_availability" },
      { label: "¿Cuánto cuesta?", next: "inbound_obj_price" },
      { label: "No soy muy de naturaleza/aire libre", next: "inbound_obj_not_outdoors" },
      { label: "¿Qué exactamente es el glamping?", next: "inbound_what_is_glamping" },
      { label: "Ya tenemos algo reservado", next: "inbound_obj_already_booked" },
      { label: "Déjeme pensarlo / consultarlo con mi pareja", next: "inbound_obj_think" }
    ]
  },

  inbound_pitch_couples: {
    id: "inbound_pitch_couples",
    stage: "Pitch",
    stageNum: 3,
    method: "H2H",
    title: "Pitch para Parejas — Escapada Romántica",
    cogTip: "El romance tiene que ver con privacidad, presencia y novedad. Un pueblo playero raramente entrega ninguna de las tres. Enfatiza lo que el glamping hace mejor.",
    script: `"Perfecto — honestamente, para un viaje de pareja, esto podría ser incluso mejor que un pueblo playero.\n\nImagínese: su propia cabaña privada, una fogata justo afuera de la puerta, despertar con nada más que árboles y silencio — sin multitudes, sin ruido, sin personas chocando con ustedes en una explanada.\n\nNuestros huéspedes en pareja nos dicen constantemente que fue el viaje más presente, más desconectado de todo, que han tenido en años. No pasan la mitad del día buscando estacionamiento o esperando mesa en un restaurante — simplemente están ahí, juntos.\n\nTambién tenemos kayak y piscina si quieren mezclar algo de actividad, pero la vibra es realmente sobre desacelerar.\n\n¿Qué fechas están considerando? Puedo revisar disponibilidad y darle una imagen real de lo que costaría."`,
    notes: [
      "La privacidad es romántica, y los pueblos playeros notoriamente carecen de ella en verano",
      "'El viaje más presente en años' = lenguaje de experiencia emocional cúspide",
      "Estacionamiento y esperas en restaurantes son dolores reales — mencionarlos naturalmente genera complicidad",
      "No sobrevendas actividades a parejas — el ángulo de 'desacelerar' es el cierre"
    ],
    responses: [
      { label: "Suena perfecto — revisemos fechas", next: "inbound_availability" },
      { label: "¿Cuánto cuesta?", next: "inbound_obj_price" },
      { label: "No soy muy de naturaleza", next: "inbound_obj_not_outdoors" },
      { label: "Realmente queríamos la playa", next: "inbound_obj_wanted_beach" },
      { label: "Déjeme consultarlo con mi pareja", next: "inbound_obj_think" }
    ]
  },

  inbound_pitch_families: {
    id: "inbound_pitch_families",
    stage: "Pitch",
    stageNum: 3,
    method: "H2H",
    title: "Pitch para Familias — Todos Ganan",
    cogTip: "Los padres quieren que los niños estén entretenidos y ellos sin estrés. Los pueblos playeros frecuentemente entregan lo contrario. Presenta el glamping como el viaje donde todos la pasan bien de verdad.",
    script: `"¡Los viajes familiares son donde más brillamos! Le digo por qué.\n\nLos pueblos playeros con niños pueden ser... agotadores. Arena en todo, bloqueador solar cada hora, los niños aburridos al segundo día, todo el rollo.\n\nEn Horizons, los niños tienen actividades para todo el día — bicicletas eléctricas, kayak, pesca, piscina, voleibol, senderos naturales. Quedan genuinamente entretenidos y cansados para la noche. Mientras tanto, usted por fin puede relajarse de verdad.\n\nEstán en una cabaña privada — así que la siesta es siesta, la hora de dormir es hora de dormir, y nadie comparte paredes con desconocidos. Se siente como su propia casa base.\n\n¿Qué edades tienen los niños? Eso me ayuda a orientarlos mejor."`,
    notes: [
      "La frase de la arena en todo es universal — todo padre ríe y asiente",
      "'Cansados para la noche' = sueño dorado de todo padre — dilo",
      "Cabaña privada = ritmo familiar preservado (siestas, hora de dormir)",
      "Preguntar por las edades = personalizar + calificar, avanza hacia disponibilidad",
      "Para familias hispanas, 'su propia casa base' resuena con el sentido de hogar y seguridad"
    ],
    responses: [
      { label: "Suena perfecto — ¿precios y fechas?", next: "inbound_availability" },
      { label: "¿Cuánto cuesta?", next: "inbound_obj_price" },
      { label: "¿Hay suficiente para que hagan los niños?", next: "inbound_obj_kids_activities" },
      { label: "Queríamos la playa para los niños", next: "inbound_obj_wanted_beach" },
      { label: "Déjeme hablar con mi esposo/esposa", next: "inbound_obj_think" }
    ]
  },

  inbound_availability: {
    id: "inbound_availability",
    stage: "Close",
    stageNum: 4,
    method: "SNAP",
    title: "Verificar Disponibilidad — Cierre Suave",
    cogTip: "No preguntes '¿quiere reservar?' — pregunta por las fechas. Es un 'sí' más pequeño que lleva naturalmente al más grande.",
    script: `"Déjeme revisar disponibilidad ahora mismo. ¿Qué fechas tienen en mente — tienen algo específico o son flexibles?\n\n[Después de que dan fechas — revisar Cloudbeds]\n\nPerfecto, estoy viendo las fechas de [fechas] — tenemos [disponibilidad]. La tarifa para eso sería de [precio] para [cabaña/casa]. Eso incluye todo — la propiedad, acceso a todas las amenidades, la experiencia completa.\n\nPara apartar esa fecha solo necesito su nombre y correo, y desde ahí coordinamos todo. ¿Le parece bien?"`,
    notes: [
      "Revisar Cloudbeds en tiempo real — no adivinar disponibilidad ni precio",
      "'Incluye todo' = elimina el miedo a costos ocultos",
      "'Apartar la fecha' es más suave que 'reservar' — menos fricción",
      "Si dudan con el precio — ir a inbound_obj_price",
      "Si necesitan pensar — ir a inbound_obj_think"
    ],
    responses: [
      { label: "Sí, reservemos", next: "inbound_booking" },
      { label: "El precio es más alto de lo esperado", next: "inbound_obj_price" },
      { label: "Las fechas no me funcionan — otras opciones", next: "inbound_availability" },
      { label: "Déjeme pensarlo / consultar", next: "inbound_obj_think" }
    ]
  },

  inbound_booking: {
    id: "inbound_booking",
    stage: "Close",
    stageNum: 4,
    method: "SNAP",
    title: "Confirmar la Reserva",
    cogTip: "Mantén la energía cálida y emocionada — están reservando vacaciones, no firmando papeleo. Que sientan que el viaje ya empezó.",
    script: `"¡Perfecto! Entonces los tengo para [fechas] — [tipo de cabaña/casa]. El total es de [precio].\n\nNecesito su nombre, correo, y les enviamos una confirmación con todo lo que necesitan. El check-in es a las [hora], check-out a las [hora], y les incluyo un enlace a nuestra guía de huéspedes para que empiecen a emocionarse con lo que hay disponible en el lugar.\n\nY de verdad — van a encantarse. Este es de esos viajes de los que la gente regresa y empieza a planear el siguiente de inmediato. ¡Bienvenidos a Horizons, [Nombre]!"`,
    notes: [
      "Confirma fechas, tipo y precio en voz alta — evita confusiones después",
      "Los detalles de check-in/out reducen la ansiedad y crean impulso",
      "La guía de huéspedes = empiezan a imaginar el viaje = el compromiso se fortalece",
      "Cierra con calidez genuina — esto es una celebración",
      "En cultura hispana, '¡Bienvenidos a Horizons!' crea sentido de pertenencia desde el primer momento"
    ],
    responses: [
      { label: "Reserva confirmada — registrar", next: "inbound_success" }
    ]
  },

  inbound_success: {
    id: "inbound_success",
    stage: "Complete",
    stageNum: 5,
    method: "Complete",
    title: "Reserva Confirmada — Llamada Completa",
    cogTip: "Regístralo de inmediato. El correo de seguimiento dentro de la hora es lo que separa las grandes experiencias de huésped de las olvidables.",
    script: `CHECKLIST POST-LLAMADA:\n\n✓ Confirmar reserva en Cloudbeds de inmediato\n✓ Enviar correo de confirmación dentro de la hora\n✓ Adjuntar guía de huéspedes / descripción de la propiedad\n✓ Registrar en CRM: nombre, fechas, tipo de propiedad, cómo nos encontraron (consulta del anuncio)\n✓ Anotar detalles personales (edades de niños, ocasión, tamaño del grupo) para el equipo de experiencia al huésped\n✓ Programar recordatorio para contactarlos 48hrs antes de la llegada`,
    notes: [
      "El contacto pre-llegada de 48hrs = enorme para la satisfacción del huésped",
      "Registrar la consulta del anuncio en CRM — valioso para retroalimentación de marketing",
      "Detalles personales al equipo de experiencia = momentos de sorpresa y deleite"
    ],
    responses: []
  },

  inbound_callback: {
    id: "inbound_callback",
    stage: "Close",
    stageNum: 4,
    method: "H2H",
    title: "Programar Callback",
    cogTip: "Ellos vinieron a ti — o sea que sí quieren saber de ti. Una hora específica de callback casi siempre se acepta.",
    script: `"No hay ningún problema — le agradezco que haya contestado. ¿Cuándo sería mejor momento para una charla rápida? Solo quiero tomarme cinco minutos para contarle lo que ofrecemos y ver si podría ser una buena opción para su viaje.\n\n¿Le funcionaría [mañana / más tarde hoy] como a las [hora]? Le mando un mensaje rápido con mi número para que lo tenga."`,
    notes: [
      "Mantenerlo breve — 'cinco minutos' se siente manejable",
      "Enviar tu número = eres real, no un call center",
      "Hora específica = 3 veces más probable de reconectarse que algo abierto"
    ],
    responses: [
      { label: "Callback programado — registrar", next: "inbound_success" },
      { label: "No le interesa para nada", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_wanted_beach: {
    id: "inbound_obj_wanted_beach",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — Realmente Quería la Playa",
    cogTip: "No pelees con la playa. Valídala completamente, luego amplía hacia el deseo más profundo detrás de ella — que probablemente es relajación, sol y descanso. Luego muestra cómo entregas todo eso sin los problemas.",
    script: `"Honestamente lo entiendo — hay algo en la playa que simplemente se siente como vacaciones. No estoy aquí para quitarle esa idea.\n\n¿Puedo preguntarle — qué es lo que más le atrae de la playa? ¿Es el agua, el sol, la sensación de estar en un lugar diferente?\n\n[Escuchar]\n\nTiene todo el sentido. Mire — la mayoría de eso que describe, nosotros sí lo tenemos. [Sol y calor: 'Los veranos en South Carolina son preciosos tierra adentro también, va a estar afuera todo el día.'] [Agua: 'Tenemos kayak, pesca, piscina.'] [La vibra de estar lejos: 'Cabaña privada, sin horarios, sin obligaciones — para eso exactamente estamos hechos.']\n\nLo único que no podemos ofrecer son las olas del mar. Pero todo lo demás está aquí — y honestamente sin los inconvenientes que vienen con los pueblos playeros en temporada alta."`,
    notes: [
      "Pregunta qué les gusta de la playa — la mayoría de las respuestas son abordables",
      "Relaciona cada deseo de playa con un equivalente de glamping específicamente",
      "'No estoy aquí para quitarle esa idea' = desactiva defensas",
      "La única concesión honesta: sin océano. Dilo — genera confianza",
      "En español, 'tiene todo el sentido' valida sin condescender"
    ],
    responses: [
      { label: "Bueno, estoy abierto/a a escuchar más", next: "inbound_pitch" },
      { label: "Es realmente el océano lo que quiero", next: "inbound_graceful_exit" },
      { label: "¿Y para niños en la playa?", next: "inbound_pitch_families" }
    ]
  },

  inbound_obj_not_outdoors: {
    id: "inbound_obj_not_outdoors",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — No Soy de Naturaleza / Aire Libre",
    cogTip: "El punto entero del glamping es que es para gente que no es de naturaleza. Empieza con eso.",
    script: `"¿Sabe qué? Eso es exactamente lo que más escuchamos de los huéspedes antes de llegar. Y después regresan.\n\nEl glamping no es acampar. No está armando una carpa, no está durmiendo en el suelo, no está cocinando sobre una fogata si no quiere. Está en una cabaña privada con una cama de verdad, aire acondicionado, baño — es básicamente un alquiler de cabaña que resulta estar rodeado de naturaleza.\n\nNo tiene que ser de naturaleza para disfrutarlo. Honestamente puede pasar todo el viaje sentado en el porche leyendo un libro. La naturaleza es solo el paisaje de fondo — no es un requisito.\n\n¿Eso cambia la imagen?"`,
    notes: [
      "'Lo que más escuchamos antes de llegar — y después regresan' = prueba social",
      "La distinción camping vs glamping es crucial — dígalo explícitamente",
      "Liste las comodidades: cama, AC, baño — esos son los que matan la objeción",
      "'La naturaleza es el paisaje de fondo, no un requisito' = reencuadre perfecto",
      "En español, '¿eso cambia la imagen?' es una pregunta natural y abierta"
    ],
    responses: [
      { label: "Okay, eso me tranquiliza", next: "inbound_pitch" },
      { label: "Todavía no estoy seguro/a", next: "inbound_obj_think" },
      { label: "¿Qué hay de los bichos?", next: "inbound_obj_bugs" }
    ]
  },

  inbound_obj_bugs: {
    id: "inbound_obj_bugs",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — Bichos / Preocupación por Fauna",
    cogTip: "Tómalo en serio — no lo descarte. Reconoce, luego reencuadra con detalles concretos.",
    script: `"Totalmente válido — y no le voy a decir que en South Carolina no hay bichos, porque eso sería mentira.\n\nLa realidad es esta: está en una estructura sólida con mallas y puertas. No está en una carpa. La propiedad está bien mantenida y los huéspedes no reportan nada alarmante. Es más como sentarse en un porche cerrado que estar en el bosque abierto.\n\nAdemás, usamos leña tratada con un bio-insecticida natural — así que cuando tienen la fogata encendida, en realidad ayuda a mantener los mosquitos alejados del área exterior. Es uno de esos detalles que marca una diferencia real en las noches.\n\nY honestamente, los pueblos playeros tampoco están libres de mosquitos — las zonas costeras los tienen igual que cualquier otro lugar.\n\n¿Eso es algo que realmente lo detiene, o es más de 'bueno saberlo'?"`,
    notes: [
      "No sobrevendas 'sin bichos' — destruye la confianza cuando llegan",
      "Estructura sólida con mallas = tranquilidad concreta",
      "La comparación de pueblos playeros / mosquitos iguala el terreno",
      "La pregunta final ayuda a medir qué tan seria es realmente la objeción"
    ],
    responses: [
      { label: "Bueno saberlo — okay, estoy abierto/a", next: "inbound_pitch" },
      { label: "Sí, eso es definitivamente un obstáculo", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_price: {
    id: "inbound_obj_price",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objeción — Precio / Costo",
    cogTip: "Ancla en el valor, no solo en el número. Compara con lo que realmente cuesta un viaje a un pueblo playero cuando sumas todo.",
    script: `"Es una pregunta justa — y quiero darle una respuesta real, no un discurso de ventas.\n\nNuestras cabañas empiezan en alrededor de $910 por una estadía de 2 noches, las casas alrededor de $1,460 por 2 noches. Eso cubre la propiedad completa — sin tarifa de resort, sin cobro de estacionamiento, sin 'cargo por amenidades'. Lo que ve es lo que paga.\n\nFíjese en esto — cuando suma un viaje a un pueblo playero: el hotel, el estacionamiento, las comidas en restaurantes dos veces al día, los cobros de entrada... se acumula rápido. Con nosotros tiene su propio espacio, cocina si la quiere, y todas las actividades del lugar están incluidas.\n\n¿Cuál era su presupuesto aproximado para el viaje? Eso me ayuda a ver qué tiene más sentido para usted."`,
    notes: [
      "Números reales — $910 cabaña, $1,460 casa — no sea vago",
      "'Sin tarifa de resort, sin cobro de estacionamiento' = habla directamente de una frustración conocida",
      "La comparación del costo total del viaje a pueblo playero es efectiva — úsala",
      "Preguntar por el presupuesto = avanza hacia encontrar una opción, no defender un precio",
      "En español, 'fíjese en esto' introduce el argumento de valor de forma natural"
    ],
    responses: [
      { label: "En realidad es razonable — revisemos fechas", next: "inbound_availability" },
      { label: "Sigue siendo fuera de nuestro presupuesto", next: "inbound_graceful_exit" },
      { label: "Déjeme pensarlo", next: "inbound_obj_think" }
    ]
  },

  inbound_obj_already_booked: {
    id: "inbound_obj_already_booked",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — Ya Tienen Planes / Ya Reservaron",
    cogTip: "No insistas. Planta una semilla para el próximo viaje. Todo huésped que reservó hoy es una posible reserva repetida.",
    script: `"¡Qué bueno — parece que el viaje está tomando forma! No voy a intentar cambiarle algo en lo que ya está emocionado.\n\nSí quiero asegurarme de que nos tenga en mente para la próxima vez. Muchos de nuestros huéspedes son personas que lo probaron una vez — a veces casi de casualidad — y ahora regresan cada año.\n\n¿Le parece bien si le mando un resumen rápido para que lo tenga? Sin ninguna presión — solo útil para cuando esté planeando la próxima escapada."`,
    notes: [
      "Cero presión — ya reservaron, insistir es inútil y quema goodwill",
      "'Casi de casualidad' = humor auto-referencial sobre la situación del pivote",
      "Capturar el correo es el objetivo real aquí — mantenerse en su órbita",
      "Registrar en CRM: 'ya reservó, seguimiento en 3 meses'"
    ],
    responses: [
      { label: "Sí, mándelo", next: "inbound_callback" },
      { label: "No, gracias", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_think: {
    id: "inbound_obj_think",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objeción — Necesito Pensar / Consultarlo",
    cogTip: "Urgencia suave — la disponibilidad de primavera/verano genuinamente se llena. Menciónalo una vez, naturalmente. Luego ofrece apartar una fecha de forma tentativa.",
    script: `"Por supuesto — tiene todo el sentido, especialmente si están planeando juntos.\n\nLo único que le menciono: las fechas de [primavera / verano] sí se llenan, y una vez que un fin de semana se va, se va. Pero no quiero que sienta presión.\n\n¿Qué tal si aparto una fecha de forma tentativa mientras lo consultan? Sin cargo, sin nada comprometido — solo para que la opción siga abierta. Si deciden que no es para ustedes, la libero sin ningún problema.\n\n¿Qué fechas estaban considerando?"`,
    notes: [
      "Aparto tentativo = 'sí' de bajo compromiso que mantiene el impulso",
      "'Sin cargo, sin nada comprometido' elimina el miedo a comprometerse",
      "Si no quieren dar fechas — ofrecer hacer seguimiento a una hora específica",
      "No repitas la urgencia más de una vez — se convierte en presión",
      "En cultura hispana, 'lo consultan' valida que la decisión es en familia/pareja — no lo apresures"
    ],
    responses: [
      { label: "Okay, apartemos una fecha tentativa", next: "inbound_availability" },
      { label: "Solo hágame seguimiento después", next: "inbound_callback" },
      { label: "No, yo les aviso cuando esté listo/a", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_kids_activities: {
    id: "inbound_obj_kids_activities",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objeción — ¿Suficiente para los Niños?",
    cogTip: "Los padres necesitan estar convencidos de que 'los niños van a estar bien' antes de poder relajarse en querer el viaje para ellos mismos.",
    script: `"Sí, esa es siempre la pregunta número uno de los padres — y con razón. No hay nada peor que un viaje donde los niños están aburridos para el mediodía.\n\nAquí va el resumen honesto: bicicletas eléctricas, kayak, piscina, pesca, voleibol, senderos naturales. La mayoría de las familias nos dice que los niños no quieren irse. Como, genuinamente difícil meterlos al carro de vuelta.\n\nY porque es una propiedad privada — los niños tienen espacio para correr y hacer ruido sin que nadie les ponga mala cara. No es un hotel donde constantemente les está pidiendo que bajen la voz.\n\n¿Qué edades tienen sus niños? Eso me ayuda a darle mejor idea de lo que les gustaría."`,
    notes: [
      "'No hay nada peor que un viaje donde los niños están aburridos para el mediodía' = los entiende",
      "Lista las actividades específicamente — la tranquilidad vaga no funciona con padres",
      "'Difícil meterlos al carro de vuelta' = el estándar de oro para los padres — dígalo",
      "Propiedad privada = niños pueden ser niños = enorme para padres con hijos pequeños",
      "Para familias hispanas, mencionar 'sin que nadie les ponga mala cara' resuena mucho"
    ],
    responses: [
      { label: "Okay eso cubre todo — revisemos fechas", next: "inbound_availability" },
      { label: "¿Hay límites de edad / seguridad?", next: "inbound_pitch_families" },
      { label: "¿Cuánto cuesta?", next: "inbound_obj_price" }
    ]
  },

  inbound_what_is_glamping: {
    id: "inbound_what_is_glamping",
    stage: "Info",
    stageNum: "INFO",
    method: "H2H",
    title: "¿Qué Es el Glamping?",
    cogTip: "Mantenlo simple y visual. La mayoría imagina una carpa lujosa. Reemplaza esa imagen de inmediato.",
    script: `"Buena pregunta — honestamente el nombre es un poco engañoso. 'Glamping' es básicamente camping glamoroso, pero en la práctica significa una cabaña privada en un entorno natural con todas las comodidades de un alojamiento normal.\n\nHablamos de: camas de verdad, aire acondicionado, baño, su propio espacio al aire libre. No es una carpa, no es una bolsa de dormir, no es comida de campamento. Es simplemente un lugar privado para quedarse que resulta estar rodeado de naturaleza en lugar de un estacionamiento.\n\nSi alguna vez se ha quedado en un alquiler de cabaña, es similar a eso — pero en una propiedad curada con actividades incluidas, así que no están solo sentados en una cabaña mirando árboles.\n\n¿Eso lo aclara?"`,
    notes: [
      "'No es una carpa, no es bolsa de dormir, no es comida de campamento' — diga lo que NO es primero",
      "La comparación con alquiler de cabaña es el marco más accesible",
      "'Rodeado de naturaleza en lugar de un estacionamiento' — comparación con hotel, visual y divertida",
      "Termina con pregunta para confirmar comprensión y volver a enganchar"
    ],
    responses: [
      { label: "Ah ok, tiene sentido — cuénteme más", next: "inbound_pitch" },
      { label: "¿Es completamente cerrado / a prueba del clima?", next: "inbound_obj_not_outdoors" },
      { label: "¿Qué actividades hay?", next: "inbound_pitch" }
    ]
  },

  inbound_graceful_exit: {
    id: "inbound_graceful_exit",
    stage: "Complete",
    stageNum: 5,
    method: "H2H",
    title: "Salida Elegante — Puerta Abierta",
    cogTip: "Vinieron a ti una vez. Pueden volver. Despídete con calidez y sin presión.",
    script: `"Absolutamente ningún problema, [Nombre] — de verdad le agradezco el tiempo. Si alguna vez quiere explorar algo diferente para una escapada en South Carolina, nuestro sitio es gohorizons.com — vale la pena echarle un vistazo cuando tenga un momento libre.\n\n¡Espero que su viaje salga increíble, haga lo que haga! ¡Cuídese mucho!"`,
    notes: [
      "Cero frustración en la voz — son un posible huésped futuro",
      "Mención del sitio web = punto de re-entrada pasiva",
      "Registrar en CRM: 'no convertido, fuente, fecha' — seguimiento en 60 días",
      "Nunca culpabilices — 'espero que su viaje salga increíble' es genuino",
      "'¡Cuídese mucho!' es la despedida cálida perfecta en español"
    ],
    responses: []
  },

};

export const SPANISH_INBOUND_TOPIC_GROUPS = {
  "Opening": ["inbound_opening"],
  "Reposition": ["inbound_reposition"],
  "Pitch": ["inbound_pitch", "inbound_pitch_couples", "inbound_pitch_families"],
  "Close": ["inbound_availability", "inbound_booking", "inbound_success", "inbound_callback"],
  "Objections": ["inbound_obj_wanted_beach", "inbound_obj_not_outdoors", "inbound_obj_bugs", "inbound_obj_price", "inbound_obj_already_booked", "inbound_obj_think", "inbound_obj_kids_activities"],
  "Info": ["inbound_what_is_glamping", "inbound_graceful_exit"],
};
