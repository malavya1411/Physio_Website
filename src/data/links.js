import clinic from './clinic.js'

/**
 * Returns a tel: link string for click-to-call.
 * Use this everywhere instead of hardcoding the number.
 */
export function telLink() {
  return `tel:${clinic.phone}`
}

/**
 * Returns a wa.me deep link with a URL-encoded prefilled message.
 * @param {string} message - The prefilled text to send on WhatsApp.
 */
export function waLink(message = 'Hi! I\u2019d like to book a home physiotherapy appointment.') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${clinic.whatsapp}?text=${encoded}`
}

/** Prefilled messages — import whichever you need */
export const WA_GENERAL  = 'Hi! I\u2019d like to book a home physiotherapy appointment.'
export const WA_MESSAGE_PAGE = (name, phone, concern) =>
  `Hi, my name is ${name} (${phone}). I need help with: ${concern}`
