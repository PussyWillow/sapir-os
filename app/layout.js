import '@/app/globals.css';

export const metadata = {
  title: 'Sapir // OS',
  description: 'Digital Archive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
