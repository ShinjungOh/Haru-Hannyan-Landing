import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globalTheme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '하루한냥',
  description: '나만의 고양이를 모아보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
