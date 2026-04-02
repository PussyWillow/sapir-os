import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head><script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script></head>
      <body>{children}</body>
    </html>
  );
}
