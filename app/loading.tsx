export default function Loading() {
  return (
    <main className="page-shell loading-shell" aria-busy="true" aria-live="polite">
      <div className="skeleton hero-skeleton" />
      <div className="skeleton strip-skeleton" />
      <div className="loading-grid">
        <div className="skeleton card-skeleton" />
        <div className="skeleton card-skeleton" />
        <div className="skeleton card-skeleton" />
      </div>
    </main>
  );
}
