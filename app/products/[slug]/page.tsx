import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProduct, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <main className="detail-shell">
      <Link href="/" className="back-link">← 홈으로</Link>
      <section className="detail-panel">
        <div className="detail-image-wrap">
          <Image
            src={product.image}
            alt={product.name}
            width={1254}
            height={1254}
            priority
            className="detail-image"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </div>
        <div className="detail-copy">
          <span className="status-pill">{product.badge}</span>
          <p className="hero-kicker">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="hero-text">{product.blurb}</p>
          <strong className="detail-price">{product.price}</strong>
          <ul className="spec-list">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link href={`/checkout/${product.slug}`} className="primary-button">바로 구매</Link>
            <Link href="/cart" className="secondary-button">장바구니 담기</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
