export const SITE = {
  name: "Souza Serviços",
  phone: "(27) 99514-9942",
  whatsappNumber: "5527995149942",
  years: 10,
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
