// app/layout.tsx
import './globals.css'; // Make sure this file exists for Tailwind/global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#141E30] to-[#243B55] min-h-screen">
        {children}
      </body>
    </html>
  );
}
