import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="state-shell">
      <span className="status-pill">EMPTY</span>
      <h1>새 신상품 준비 중</h1>
      <p>요청한 제품은 아직 공개되지 않았어요. 홈에서 최신 셀렉션을 바로 볼 수 있습니다.</p>
      <Link href="/" className="primary-button">홈으로 돌아가기</Link>
    </main>
  );
}
