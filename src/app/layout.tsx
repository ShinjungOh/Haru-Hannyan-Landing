import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globalTheme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '하루한냥 | 일상을 기록하는 감정일기',
  description: '나만의 고양이를 모아보세요',
  icons: {
    icon: '/feel-cat.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="하루한냥 | 일상을 기록하는 감정일기" />
        <meta property="og:description" content="나만의 고양이를 모아보세요" />
        <meta
          property="og:image"
          content="https://private-user-images.githubusercontent.com/97431021/335686127-1456ac8b-193b-4432-b401-b6d063a1ecc3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTcxNzg1MzcsIm5iZiI6MTcxNzE3ODIzNywicGF0aCI6Ii85NzQzMTAyMS8zMzU2ODYxMjctMTQ1NmFjOGItMTkzYi00NDMyLWI0MDEtYjZkMDYzYTFlY2MzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTMxVDE3NTcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZhYmExNDBiMDQwYTE3NzJiM2VlZjdiZjQwNjYwYmM0Mjg5MzUxN2JiYTI2OWI4MWRjMmU0Mjk5NWIyNWViY2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qNKZpT9EQu2RpDxNRSKb3k9b2iT-a2qKi_NYPa1ja94"
        />
        <title>하루한냥</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
