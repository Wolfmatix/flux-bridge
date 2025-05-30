// app/layout.tsx
import '../styles/globals.css'; // Remove if you don't have this file

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
