import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loopix Solutions',
  description: 'Affordable web, automation, dashboards, cloud, integrations, security, and ongoing IT support for SMEs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
