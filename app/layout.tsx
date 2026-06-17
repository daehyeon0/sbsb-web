import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ㅅㅂㅅㅂ Select',
  description: '새로운 테크와 라이프스타일 제품을 감도 있게 소개하는 다크 큐레이션 스토어.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
