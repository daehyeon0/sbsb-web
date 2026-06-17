import Link from "next/link";
import Image from "next/image";
import { curatedCollections, heroProduct, products } from "@/lib/products";

const highlights = [
  "오늘 출고 가능한 신제품 중심 큐레이션",
  "정품 보증 및 1년 기본 케어",
  "과한 할인 대신 선별 기준과 사용 맥락을 먼저 설명",
];

function BrandLogo() {
  return (
    <span className="brand-logo" aria-label="ㅅㅂㅅㅂ">
      ㅅㅂㅅㅂ
    </span>
  );
}



export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <Link href="/" className="brand-mark">
          <BrandLogo />
        </Link>
        <nav className="top-nav" aria-label="주요 탐색">
          <a href="#new-arrivals">New</a>
          <a href="#collections">Collections</a>
          <a href="#service">Service</a>
        </nav>
        <div className="header-actions">
          <Link href="/search" className="ghost-button">
            Search
          </Link>
          <Link href="/cart" className="ghost-button">
            Cart (2)
          </Link>
        </div>
      </header>

      <section className="hero-panel" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="status-pill">CURATED DROP</span>
          <p className="hero-kicker">새로운 테크 + 라이프스타일 셀렉션</p>
          <h1 id="hero-title">신제품을 더 빠르게, 더 조용하게 고르는 홈.</h1>
          <p className="hero-text">{heroProduct.tagline}</p>

          <div className="hero-meta">
            <div>
              <span className="meta-label">오늘의 대표 제품군</span>
              <strong>{heroProduct.name}</strong>
            </div>
            <div>
              <span className="meta-label">출시가</span>
              <strong>{heroProduct.price}</strong>
            </div>
          </div>

          <div className="hero-actions">
            <Link href={heroProduct.primaryCta} className="primary-button">
              지금 구매하기
            </Link>
            <a href={heroProduct.secondaryCta} className="secondary-button">
              신제품 더 보기
            </a>
          </div>

          <p className="availability-note">{heroProduct.availability}</p>
        </div>

        <div className="hero-media-wrap">
          <div className="hero-grid-glow" aria-hidden="true" />
          <Image
            src={heroProduct.image}
            alt="형광 민트 포인트가 들어간 스피커와 조명 제품군 이미지"
            width={1983}
            height={793}
            priority
            className="hero-media"
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
        </div>
      </section>

      <section className="signal-strip" aria-label="신뢰 요소">
        {highlights.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section
        id="new-arrivals"
        className="section-block"
        aria-labelledby="new-title"
      >
        <div className="section-heading-row">
          <div>
            <p className="section-tag">새로 들어온 제품</p>
            <h2 id="new-title">추천 흐름 안에서 바로 고를 수 있게.</h2>
          </div>
          <a href="#collections" className="section-link">
            큐레이션 보기
          </a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.slug} className="product-card">
              <Link
                href={`/products/${product.slug}`}
                className="product-media-link"
                aria-label={`${product.name} 상세 보기`}
              >
                <span className="product-badge">{product.badge}</span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1254}
                  height={1254}
                  className="product-media"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </Link>
              <div className="product-copy">
                <p className="product-category">{product.category}</p>
                <div className="product-title-row">
                  <h3>{product.name}</h3>
                  <strong>{product.price}</strong>
                </div>
                <p className="product-blurb">{product.blurb}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-link"
                >
                  상품 보기
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="collections"
        className="section-block collection-block"
        aria-labelledby="collection-title"
      >
        <div className="section-heading-row compact-row">
          <div>
            <p className="section-tag">가볍게 들어가는 주제별 탐색</p>
            <h2 id="collection-title">빽빽하지 않게, 맥락만 남긴 컬렉션.</h2>
          </div>
        </div>

        <div className="collection-grid">
          {curatedCollections.map((collection) => (
            <article key={collection.name} className="collection-card">
              <span className="collection-frame" aria-hidden="true" />
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
              <a href="#new-arrivals" className="inline-link">
                이 흐름으로 보기
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="service"
        className="service-panel"
        aria-labelledby="service-title"
      >
        <div>
          <p className="section-tag">구매 전 확인</p>
          <h2 id="service-title">설명은 짧게, 신뢰는 분명하게.</h2>
        </div>
        <div className="service-grid">
          <article>
            <strong>배송</strong>
            <p>
              평일 오후 2시 이전 결제 시 당일 출고. 서울권 일부는 익일 도착.
            </p>
          </article>
          <article>
            <strong>보증</strong>
            <p>
              모든 제품 정품 확인 후 발송. 기본 1년 케어 및 초기 불량 교환 지원.
            </p>
          </article>
          <article>
            <strong>큐레이션</strong>
            <p>
              유사 제품을 늘어놓지 않고, 실제 생활 맥락에서 남는 제품만 소개.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
