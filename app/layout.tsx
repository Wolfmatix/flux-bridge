// app/layout.tsx
import '../styles/globals.css'; // Remove this line if you don't have a globals.css

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
