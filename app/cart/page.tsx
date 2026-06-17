import Link from 'next/link';

const cartItems = [
  { name: 'LUMI Core Speaker', price: '₩289,000' },
  { name: 'LUMEN Fold Lamp', price: '₩219,000' },
];

export default function CartPage() {
  return (
    <main className="state-shell cart-shell">
      <span className="status-pill">CART</span>
      <h1>지금 결제 직전까지 담긴 제품.</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.name} className="cart-row">
            <strong>{item.name}</strong>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <div className="hero-actions">
        <Link href="/checkout/lumi-core-speaker" className="primary-button">대표 상품 결제 계속</Link>
        <Link href="/" className="secondary-button">홈으로 돌아가기</Link>
      </div>
    </main>
  );
}
