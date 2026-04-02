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
          .noise {
            position: fixed;
            inset: 0;
            pointer-events: none;
            opacity: 0.03;
            z-index: 50;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='[http://www.w3.org/2000/svg'%3E%3Cfilter](http://www.w3.org/2000/svg'%3E%3Cfilter) id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
        `}} />
      </head>
      <body className="antialiased font-sans">
        <div className="noise"></div>
        {children}
      </body>
    </html>
  );
}
