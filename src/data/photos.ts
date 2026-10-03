import type { ImageMetadata } from 'astro';
import p01 from '../assets/story/p01.jpg';
import p02 from '../assets/story/p02.jpg';
import p03 from '../assets/story/p03.jpg';
import p04 from '../assets/story/p04.jpg';
import p06 from '../assets/story/p06.jpg';
import p07 from '../assets/story/p07.jpg';
import p09 from '../assets/story/p09.jpg';
import p10 from '../assets/story/p10.jpg';
import p11 from '../assets/story/p11.jpg';
import p12 from '../assets/story/p12.jpg';
import p13 from '../assets/story/p13.jpg';
import p14 from '../assets/story/p14.jpg';
import p15 from '../assets/story/p15.jpg';
import p16 from '../assets/story/p16.jpg';
import p17 from '../assets/story/p17.jpg';
import p18 from '../assets/story/p18.jpg';
import p19 from '../assets/story/p19.jpg';
import p20 from '../assets/story/p20.jpg';
import p21 from '../assets/story/p21.jpg';
import p22 from '../assets/story/p22.jpg';
import p23 from '../assets/story/p23.jpg';
import p24 from '../assets/story/p24.jpg';
import p25 from '../assets/story/p25.jpg';
import p26 from '../assets/story/p26.jpg';
import p27 from '../assets/story/p27.jpg';
import p28 from '../assets/story/p28.jpg';
import p29 from '../assets/story/p29.jpg';
import p30 from '../assets/story/p30.jpg';
import p31 from '../assets/story/p31.jpg';
import p32 from '../assets/story/p32.jpg';
import p33 from '../assets/story/p33.jpg';
import p34 from '../assets/story/p34.jpg';

export type Photo = { src: ImageMetadata; alt: string };
export const photos: Record<string, Photo> = {
  p01: { src: p01, alt: 'Joseph con mascarilla y una manta verde, sentado en su cama del hospital' },
  p02: { src: p02, alt: 'Cicatriz y moretón en el pecho tras un procedimiento médico' },
  p03: { src: p03, alt: 'Joseph en pijama de hospital sentado sobre la cama, cortando algo con tijeras' },
  p04: { src: p04, alt: 'Bomba de infusión y suero conectados junto a una cama de hospital' },
  p06: { src: p06, alt: 'Joseph con mascarilla mientras le rapan la cabeza por la quimioterapia' },
  p07: { src: p07, alt: 'Joseph con pijama de hospital y mascarilla, abrazado por un familiar' },
  p09: { src: p09, alt: 'Joseph pálido y agotado frente al espejo de un baño del hospital' },
  p10: { src: p10, alt: 'Joseph recostado con una vía en el brazo en la cama del hospital' },
  p11: { src: p11, alt: 'Joseph sentado junto a una bolsa de transfusión de sangre en el pasadizo de emergencia' },
  p12: { src: p12, alt: 'Primer plano del ojo de Joseph mostrando palidez por la anemia' },
  p13: { src: p13, alt: 'Joseph recostado con mascarilla en el pasadizo de emergencia junto a un familiar' },
  p14: { src: p14, alt: 'Bolsa de glóbulos rojos para transfusión colgada de un poste' },
  p15: { src: p15, alt: 'Joseph con gorro sentado en la cama de la habitación 469' },
  p16: { src: p16, alt: 'Joseph junto a una enfermera con traje de aislamiento' },
  p17: { src: p17, alt: 'Joseph acostado en la cama del hospital usando el celular' },
  p18: { src: p18, alt: 'Joseph sentado al borde de la cama junto al poste de suero' },
  p19: { src: p19, alt: 'Joseph leyendo sentado en su cama de hospital' },
  p20: { src: p20, alt: 'Joseph recostado en la cama de hospital con el celular en la mano' },
  p21: { src: p21, alt: 'Joseph mirando a la cámara durante una transfusión de sangre' },
  p22: { src: p22, alt: 'Joseph acostado en la cama de hospital con el celular' },
  p23: { src: p23, alt: 'Joseph sentado en la cama bajándose la mascarilla y mirando a la cámara' },
  p24: { src: p24, alt: 'Joseph recostado recibiendo tratamiento intravenoso en la habitación 471' },
  p25: { src: p25, alt: 'Joseph acostado bajo una manta en la habitación 471' },
  p26: { src: p26, alt: 'Joseph sentado en su cama de aislamiento detrás de una cortina' },
  p27: { src: p27, alt: 'Joseph acostado con mascarilla en una cama de hospital' },
  p28: { src: p28, alt: 'Vía intravenosa pegada al brazo de Joseph' },
  p29: { src: p29, alt: 'Pasillo del hospital visto desde la cama' },
  p30: { src: p30, alt: 'Joseph cubierto con una frazada de colores en la cama del hospital' },
  p31: { src: p31, alt: 'Suero y bomba de infusión con cable naranja junto a la cama' },
  p32: { src: p32, alt: 'Joseph muestra sus dos brazos con vías y brazalete de hospital' },
  p33: { src: p33, alt: 'Joseph haciendo el signo de la paz desde su cama de hospital' },
  p34: { src: p34, alt: 'Catéter colocado en el pecho de Joseph' },
};
