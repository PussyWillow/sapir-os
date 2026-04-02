export const metadata = {
  title: 'Sapir // OS',
  description: 'Digital Archive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            background-color: #ecebd9 !important;
            color: #111111 !important;
            margin: 0;
            padding: 0;
            font-family: ui-sans-serif, system-ui, sans-serif;
          }
          ::selection {
            background: #111111;
            color: #ecebd9;
          }
        `}} />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
