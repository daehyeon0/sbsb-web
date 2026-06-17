# Storefront Home Design

## 1. Feature Summary
이 작업은 신제품 중심 쇼핑몰의 홈 화면 설계다. 대상 사용자는 20~30대 남녀 고객이며, 첫 진입에서 추천된 신상품을 빠르게 이해하고 탐색 흐름에 자연스럽게 들어가야 한다. 홈 화면 안에서 대표 상품 노출, 신상품 리스트 탐색, 구매 전환의 시작점이 모두 해결되어야 한다.

이 홈은 일반적인 할인형 마켓 구조가 아니라, 테크와 라이프스타일을 함께 큐레이션하는 감도 높은 셀렉트숍 방향으로 설계한다. 복잡한 정보 밀도 대신, 정제된 시선 유도와 제품 중심의 전개가 핵심이다.

## 2. Primary User Action
가장 중요한 사용자 행동은 **추천 신상품을 바로 보는 것**이다.

첫 화면은 사용자가 “무엇이 새롭고 왜 봐야 하는지”를 즉시 이해하게 해야 한다. 이후 홈 내부에 배치된 신상품 리스트를 훑으며 관심 상품으로 이동하는 것이 2차 행동이다.

## 3. Design Direction
- **Register:** product
- **Surface type:** storefront home
- **Color strategy:** Restrained 기반, 일부 핵심 구간만 Committed
- **Theme:** 기본 다크 테마
- **Scene sentence:** 늦은 밤 방 안, 책상 위 모니터 불빛 아래서 새롭고 정교한 물건을 천천히 둘러보는 집중된 탐색 장면
- **Visual lane:** sleek, clean, futuristic, low-noise, premium
- **Category tone:** tech + lifestyle mixed curation

### Directional conclusion
비주얼 방향은 **A안 중심 + B안 일부 디테일 흡수**로 고정한다.

- **A의 장점:** 대표 상품 1개를 강하게 부각하기 좋고, 홈 전체 리듬이 단정하다.
- **B에서 가져올 것:** 미세한 그리드 구조감, 아주 약한 픽셀/게임 디테일, 테크 제품군에도 어울리는 정밀한 화면 인상.
- **버릴 것:** 과한 게이밍 UI 문법, 네온 과포화, 레트로 픽셀 전면화, 배너형 판촉 레이아웃.

### Named anchor references
- Linear의 정돈감
- 프리미엄 테크 제품 상세 페이지의 이미지 집중력
- 절제된 게임 하드웨어 패키지의 정밀한 미래감

## 4. Scope
- **Fidelity:** production-ready brief
- **Breadth:** 홈 1화면
- **Interactivity:** 실제 구현 직전 수준의 UI/UX 가이드
- **Time intent:** 이후 `craft` 또는 구현 단계로 즉시 연결 가능해야 함

## 5. Layout Strategy
홈은 정보량보다 **시선의 순서**가 중요한 화면이다. 구조는 다음 순서로 설계한다.

### A. Global header
- 얇고 정돈된 상단 바
- 로고 / 탐색 / 검색 / 장바구니 또는 유저 액션 최소 구성
- 지나치게 많은 메뉴 금지
- 다크 배경 안에서도 경계와 상태가 명확해야 함

### B. Hero spotlight
- 첫 화면의 중심은 **대표 신상품 1개**
- 큰 제품 이미지 또는 오브젝트 중심 비주얼
- 짧은 헤드라인 + 효용 설명 1문장 + 명확한 CTA
- 가격이나 혜택 노출은 가능하지만, 할인몰처럼 보이는 강한 판촉 구조는 금지
- Hero는 “광고 배너”가 아니라 “오늘의 주인공 제품 소개”처럼 읽혀야 함

### C. New product list on home
- Hero 바로 아래에 홈 내 신상품 리스트 배치
- 리스트는 카드 남발보다, 균일한 리듬의 상품 썸네일 스트립 또는 2~4열 그리드가 적합
- 각 상품은 상품명, 가격, 신상품 상태, 짧은 보조 정보 정도만 노출
- 정보는 얇고 명확하게, 시각적 소음 없이 구성

### D. Curation / category shortcut
- 테크 + 라이프스타일 혼합 큐레이션을 보여주는 보조 영역 1개
- 예: Work Setup / Desk Objects / Audio / Daily Carry 같은 주제형 진입점
- 카테고리 과다 노출 금지

### E. Trust / service strip
- 배송, 품질, 큐레이션 기준, 정품/보증 등 신뢰 요소를 얇게 정리
- 이 영역은 세일 프로모션처럼 보이면 안 됨

### Spatial principles
- 섹션 수는 적게 유지
- 간격은 넓게
- 카드 안의 카드 구조 금지
- 어두운 화면이어도 제품 이미지가 가장 밝게 떠야 함
- 텍스트는 배경에 묻히지 않도록 충분한 대비 확보

## 6. Key States
### Default
대표 상품에 시선이 꽂히고, 아래로 자연스럽게 탐색이 이어지는 상태.

### Loading
- Hero와 리스트 모두 skeleton 기반
- 중앙 스피너 금지
- shimmer는 약하게, 짧게

### Empty
- 신상품이 아직 없을 때: “새 신상품 준비 중” 같은 간결한 안내
- 추천 카테고리 또는 이전 인기 큐레이션으로 우회 제공

### Error
- 상품 로드 실패 시 짧고 명확한 오류 문구
- 재시도 액션 제공
- 전체 화면 공포감 없이 안정적 복구 인상 유지

### Hover / Focus
- Hover는 크기 점프보다 정보 선명화 중심
- Focus ring은 다크 테마에서도 분명히 보여야 함
- 아주 미세한 픽셀 라인, 코너 하이라이트, 정교한 outline 등으로 미래감 보조 가능

### Reduced Motion
- glow, slide, fade 최소화
- 애니메이션 없이도 정보 구조가 완결되어야 함

## 7. Interaction Model
- Hero CTA 클릭 -> 대표 상품 상세 이동
- Hero 이미지에 보조 썸네일이 있다면 2~3개 이내로 제한
- 상품 리스트 item 클릭 -> 상품 상세 이동
- Hover 시 이미지 과확대보다 제목/가격/상태 인지성이 올라가는 방향 우선
- 스크롤은 자연스럽게 이어지되, 과한 parallax나 연출성 로딩 금지
- 탐색 구조는 직관적이어야 하며, 사용자가 홈에서 길을 잃지 않아야 함

## 8. Content Requirements
### Hero copy
- 짧고 압축적이어야 함
- 제품의 새로움 또는 핵심 효용을 한눈에 전달
- 과장된 광고 문구 금지

### Supporting copy
- 1문장 중심
- 기능 나열보다 사용 맥락 또는 가치 제안 우선

### CTA
- `상품 보기`
- `자세히 보기`
- 필요 시 보조 CTA 1개까지 허용

### Product list content
- 상품명
- 가격
- 신상품 배지 또는 출시 상태
- 선택적 보조 정보 (색상, 카테고리, 짧은 태그)

### Microcopy tone
- 세련되고 간결해야 함
- 복잡한 설명, 할인몰식 과장, 과도한 감탄표현 금지

### Image / media roles
- **Hero:** 고해상도 대표 제품 컷
- **List:** 동일 톤의 상품 썸네일 세트
- **Pixel/game feel:** 이미지가 아니라 UI 디테일로 처리
- **Do not use:** 촌스러운 픽셀 아이콘 세트, 레트로 아케이드 장식, 과장된 HUD 오버레이

## 9. Visual System Notes
### Theme
기본은 다크 테마다. 다만 전체 화면을 새까맣게 닫는 것이 목적이 아니라, 제품 이미지와 CTA, 텍스트 hierarchy가 더 또렷하게 뜨도록 배경을 제어하는 것이 목적이다.

### Tone of dark
- 순수 블랙에 가까운 기반 가능
- 패널/서피스는 미세하게 분리
- 다크 톤끼리 겹쳐도 정보 구조가 무너지지 않아야 함

### Accent behavior
- 강한 포인트 컬러는 제한적으로 사용
- primary action, 현재 상태, 선택 상태에만 집중 사용
- 장식용 네온 남발 금지

### Pixel/game influence
- 허용 범위: 코너 디테일, 라인 처리, 상태 표시, 미세 grid 리듬
- 금지 범위: UI 전반의 레트로화, 8-bit 폰트, 과한 블록형 장식

## 10. Responsive Behavior
### Mobile
- Hero는 세로 리듬 유지
- 텍스트 먼저, 이미지 다음 또는 이미지 우선 1개 축으로 명확히 정리
- 홈 내 리스트는 1열 또는 2열까지 허용
- 터치 타깃 충분히 확보

### Tablet
- Hero와 리스트 간 전개 리듬이 끊기지 않아야 함
- 제품 이미지와 카피 균형 재조정 필요

### Desktop
- Hero에서 가장 강한 인상 구현
- 너무 많은 상품을 한 번에 보여주지 말고, 호흡을 유지

## 11. Accessibility Requirements
- WCAG AA 목표
- 본문 텍스트 대비 충분히 확보
- 색만으로 상태 전달 금지
- reduced motion 지원 필수
- 다크 테마에서 포커스 상태 분명해야 함
- 가격, 상품명, CTA 우선 읽기 흐름 유지

## 12. Anti-Goals
- 쿠팡식 빽빽함
- 할인 배너 과다
- 자극적인 판촉형 쇼핑몰 문법
- 촌스럽거나 과장된 레트로 게임 UI
- 과한 네온, 과한 글로우, 과한 glass 효과
- 카드 격자만 반복되는 무개성 홈

## 13. Recommended Implementation References
구현 단계에서 특히 유효한 참고:
- `layout.md`
- `typeset.md`
- `colorize.md`
- `animate.md` (아주 절제해서)
- `clarify.md`

## 14. Final Recommendation
이 홈은 “다크한 미래 쇼핑몰”이 아니라, **신제품이 가장 돋보이는 정제된 큐레이션 홈**으로 가야 한다. 미래지향성은 배경 장식이 아니라, 구조의 질서·정보의 정밀함·상태 표현의 절제로 느껴져야 한다. 게임/픽셀 요소는 존재감보다 디테일 품질로 작동해야 한다.
