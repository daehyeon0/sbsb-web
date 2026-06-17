import Link from 'next/link';
import { products } from '@/lib/products';

export default function SearchPage() {
  return (
    <main className="state-shell cart-shell">
      <span className="status-pill">SEARCH</span>
      <h1>무엇을 찾고 있는지 이미 아는 사람용.</h1>
      <p>검색 경험은 조용하게 유지하고, 지금 공개 중인 신제품만 바로 보여줍니다.</p>
      <div className="cart-list">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="cart-row cart-link-row">
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
