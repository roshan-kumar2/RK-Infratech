
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

// Open WhatsApp with a pre-filled enquiry message
export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
