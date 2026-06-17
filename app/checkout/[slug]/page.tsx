import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProduct, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <main className="state-shell cart-shell">
      <span className="status-pill">CHECKOUT</span>
      <h1>{product.name} 결제 전 확인</h1>
      <p>{product.price} · 기본 케어 포함 · 평일 오후 2시 이전 주문 시 당일 출고</p>
      <div className="cart-list">
        {product.specs.map((spec) => (
          <div key={spec} className="cart-row">
            <strong>{spec}</strong>
            <span>포함</span>
          </div>
        ))}
      </div>
      <div className="hero-actions">
        <Link href="/cart" className="secondary-button">장바구니 다시 보기</Link>
        <Link href="/" className="primary-button">홈에서 더 둘러보기</Link>
      </div>
    </main>
  );
}
