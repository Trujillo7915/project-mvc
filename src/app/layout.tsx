import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Project MVC - Reservation System',
  description: 'Next.js MVC Architecture with MySQL 8.4 and Docker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', color: '#0f172a' }}>
        {children}
      </body>
    </html>
  );
}
