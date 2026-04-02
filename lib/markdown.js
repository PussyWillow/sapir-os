import './globals.css';

export const metadata = {
  title: 'Sapir // OS',
  description: 'Brutalist Portfolio & Thought Repository',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
