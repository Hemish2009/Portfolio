import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hemish Gudapati — Web Designer & Developer',
  description:
    'Premium, conversion-focused websites for service businesses. Design, development and strategy by Hemish Gudapati.',
  openGraph: {
    title: 'Hemish Gudapati — Web Designer & Developer',
    description:
      'Premium, conversion-focused websites for service businesses. Design, development and strategy by Hemish Gudapati.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
