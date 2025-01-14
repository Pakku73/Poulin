import './globals.css';
import type { Metadata } from 'next';
import { Footer, Header } from '@/layouts';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
