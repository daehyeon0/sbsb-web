'use client';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="state-shell">
      <span className="status-pill">LOAD ERROR</span>
      <h1>제품 정보를 불러오지 못했어요.</h1>
      <p>잠시 후 다시 시도하면 대부분 정상적으로 복구됩니다.</p>
      <button type="button" className="primary-button" onClick={() => reset()}>
        다시 시도
      </button>
    </main>
  );
}
