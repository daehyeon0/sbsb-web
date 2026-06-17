export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  blurb: string;
  image: string;
  badge: string;
  specs: string[];
};

export const products: Product[] = [
  {
    slug: 'lumi-core-speaker',
    name: 'LUMI Core Speaker',
    category: 'Audio / New Arrival',
    price: '₩289,000',
    blurb: '작은 볼륨에도 공간감이 살아나는 데스크 스피커.',
    image: '/generated/product-lumi-speaker.png',
    badge: 'NEW',
    specs: ['360° room fill', 'Low-noise standby', 'Desk-friendly footprint'],
  },
  {
    slug: 'lumen-fold-lamp',
    name: 'LUMEN Fold Lamp',
    category: 'Desk / Charge',
    price: '₩219,000',
    blurb: '무선 충전과 집중 조명을 한 베이스에 묶은 작업용 램프.',
    image: '/generated/product-lumen-lamp.png',
    badge: 'LIMITED',
    specs: ['Qi2 charging base', 'Stepless brightness', 'Fold-flat arm'],
  },
  {
    slug: 'aural-silent-headphones',
    name: 'AURAL Silent Headphones',
    category: 'Audio / Focus',
    price: '₩349,000',
    blurb: '몰입용 청취를 위한 저광택 무선 헤드폰.',
    image: '/generated/product-aural-headphones.png',
    badge: 'EDITOR PICK',
    specs: ['Adaptive ANC', '38h battery', 'Low-latency device switch'],
  },
  {
    slug: 'lumos-portable-light',
    name: 'LUMOS Portable Light',
    category: 'Ambient / Living',
    price: '₩179,000',
    blurb: '밤의 무드를 바꾸는 휴대형 라이트 스피커.',
    image: '/generated/product-lumos-lantern.png',
    badge: 'RESTOCK',
    specs: ['Warm-to-cool dimming', 'Bluetooth audio', 'Carry-ready body'],
  },
];

export const heroProduct = {
  name: 'LUMORA Scene One',
  tagline: '새로운 책상과 거실 사이, 사운드와 빛을 한 번에 정리하는 첫 제품군.',
  price: '₩429,000',
  image: '/generated/hero-lumora.png',
  primaryCta: '/products/lumi-core-speaker',
  secondaryCta: '#new-arrivals',
  availability: '한정 수량 오픈 · 오늘 출고 가능',
};

export const curatedCollections = [
  {
    name: 'Desk Reset',
    description: '집중력을 해치지 않는 데스크 오브젝트만 묶은 셀렉션.',
  },
  {
    name: 'Night Audio',
    description: '낮은 밝기와 낮은 볼륨에서도 살아나는 오디오 큐레이션.',
  },
  {
    name: 'Living Glow',
    description: '거실과 침실 어디에도 무리 없이 녹는 조명 중심 신제품.',
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
