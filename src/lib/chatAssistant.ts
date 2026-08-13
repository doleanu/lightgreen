// Copy + intent-matching for the site-wide chat widget. 100% client-side,
// rule-based (regex intent matching + scripted booking flow) — no external
// API calls, no LLM backend. Facts below come from the business's real
// Google Maps listing (name, phone/WhatsApp, address, hours, rating,
// review-sourced dish mentions) — nothing here is invented.

export const business = {
  name: "Light Green",
  fullName: "Light Green Bar & Grill",
  phoneDisplay: "+39 351 173 3108",
  phoneHref: "tel:+393511733108",
  whatsappNumber: "393511733108",
  // Real page confirmed at facebook.com/lightgreentenerife — m.me deep link
  // opens a Messenger chat with that page directly.
  messengerUrl: "https://m.me/lightgreentenerife",
  address: "C. San Blas, Local 4 · 38639 Golf del Sur",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Light+Green+Bar+%26+Grill%2C+Calle+San+Blas%2C+Local+4%2C+Golf+del+Sur",
  priceRange: "€20–30 por persona",
  rating: "4,7★ en Google",
  hours: "Todos los días, 11:00–23:00 (desayuno también los domingos)",
};

// Dish mentions sourced from the Google Business description and reviews —
// no invented prices or dishes not actually referenced there.
export const signatureDishes = [
  "Corte argentino a la parrilla",
  "Chimichurri casero",
  "T-Bone Steak",
  "Ensaladilla rusa",
];

export const waHref = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const quickReplies = {
  hours: "Horario",
  menu: "Ver carta",
  reserve: "Reservar mesa",
  location: "Cómo llegar",
};

export const mainQuickReplies = [
  quickReplies.hours,
  quickReplies.menu,
  quickReplies.reserve,
  quickReplies.location,
];

export const greeting =
  `¡Hola! Soy el asistente de ${business.name} 👋 Puedo ayudarte con el horario, la carta, reservas o cómo llegar. ¿En qué te ayudo?`;

export const greetingReply =
  "¡Hola! ¿Quieres saber el horario, ver la carta, reservar mesa o cómo llegar?";

export const unknownReply =
  "No estoy seguro de haber entendido, pero puedo ayudarte con esto:";

export const hoursReply = `${business.hours}. ¿Reservamos mesa?`;

export const menuReply =
  `Lo más pedido: ${signatureDishes.join(", ")}. Carta completa disponible en el local — también la puedes escanear en la mesa con el código QR. ¿Reservamos mesa?`;

export const locationReply =
  `Estamos en ${business.address}. Aquí tienes el mapa: ${business.mapsUrl} ¿Te ayudo a reservar mesa?`;

export const reserveStart = "¡Genial! ¿Para qué día quieres la mesa?";
export const dateOptions = ["Hoy", "Mañana", "Este sábado"];

export const askTime = "Perfecto. ¿A qué hora?";
export const timeOptions = ["20:00", "21:00", "22:00"];

export const askPeople = "¿Para cuántas personas?";
export const peopleOptions = ["2", "4", "6", "Grupo (10+)"];

export const askName = "Última cosa — ¿a nombre de quién hago la reserva?";

export const confirmReply = (name: string, people: string, date: string, time: string) =>
  `¡Listo, ${name}! Mesa para ${people} ${date} a las ${time}. Pulsa abajo para confirmarlo por WhatsApp — lo verán al instante.`;

export const waMessage = (name: string, people: string, date: string, time: string) =>
  `¡Hola Light Green! Soy ${name}. Me gustaría reservar mesa para ${people} ${date} a las ${time}.`;

export const inputPlaceholder = "Escribe tu pregunta…";
export const sendLabel = "Enviar";
export const openLabel = "Abrir asistente";
export const closeLabel = "Cerrar asistente";
export const headerTitle = `Asistente ${business.name}`;
export const headerStatus = "Responde al instante";

type Intent = "hours" | "menu" | "reserve" | "location" | "greeting" | "unknown";

const INTENT_PATTERNS: Record<Exclude<Intent, "unknown">, RegExp> = {
  greeting: /hola|buenas|hey|qu[eé] tal/i,
  hours: /hora|horario|abiert|cerrad/i,
  menu: /carta|men[uú]|comida|plato|carne|corte|chimichurri|precio/i,
  reserve: /reserv|mesa|sitio/i,
  location: /d[oó]nde|ubicaci|direcci|llegar|maps/i,
};

export function matchIntent(raw: string): Intent {
  if (INTENT_PATTERNS.greeting.test(raw)) return "greeting";
  if (INTENT_PATTERNS.hours.test(raw)) return "hours";
  if (INTENT_PATTERNS.menu.test(raw)) return "menu";
  if (INTENT_PATTERNS.reserve.test(raw)) return "reserve";
  if (INTENT_PATTERNS.location.test(raw)) return "location";
  return "unknown";
}

export function normalizeDatePhrase(raw: string): string {
  const t = raw.trim().toLowerCase();
  if (t === dateOptions[0].toLowerCase()) return "hoy";
  if (t === dateOptions[1].toLowerCase()) return "mañana";
  if (t === dateOptions[2].toLowerCase()) return "este sábado";
  return `el ${raw.trim()}`;
}

export function peopleText(raw: string): string {
  if (/10\+/.test(raw)) return "un grupo de 10 o más personas";
  const n = parseInt(raw, 10);
  if (Number.isNaN(n)) return raw;
  return `${n} ${n === 1 ? "persona" : "personas"}`;
}
