// Cambia SITE.url por tu dominio real antes de publicar (canonical, sitemap, OG).
export const SITE = {
  url: 'https://josephvega.com',
  name: 'Joseph Vega',
  title: 'Programador con leucemia: la historia de Joseph Vega | LLA tipo B',
  description:
    'Soy Joseph Vega, desarrollador web de 26 años en Lima, Perú. Tengo Leucemia Linfoblástica Aguda (LLA) tipo B. Esta es mi historia y cómo puedes ayudarme a continuar mi tratamiento en España.',
  phone: '+51 927 834 271',
  phoneRaw: '51927834271',
  locale: 'es_PE',
  ogImage: '/og.jpg',
  published: '2026-10-02',
};
export const waLink = (msg = 'Hola Joseph, leí tu historia y quiero ayudarte.') =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
