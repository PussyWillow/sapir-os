export const metadata = {
  title: 'Sapir // OS',
  description: 'Digital Archive // Brute Force Aesthetics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />
        <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin />
        <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Noto+Serif+Hebrew:wght@300;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Noto+Serif+Hebrew:wght@300;700&display=swap)" rel="stylesheet" />
        <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg: #ecebd9;
            --fg: #111111;
          }
          body {
            background-color: var(--bg) !important;
            color: var(--fg) !important;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
          .noise {
            position: fixed;
            inset: 0;
            pointer-events: none;
            opacity: 0.04;
            z-index: 9999;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='[http://www.w3.org/2000/svg'%3E%3Cfilter](http://www.w3.org/2000/svg'%3E%3Cfilter) id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          }
          ::selection {
            background: var(--fg);
            color: var(--bg);
          }
        `}} />
      </head>
      <body className="antialiased">
        <div className="noise"></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
