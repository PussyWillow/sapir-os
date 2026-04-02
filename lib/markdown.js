/**
 * SAPIR // OS - Root Layout
 * הערה: בסביבת הפיתוח המקומית/בגיטהאב, יש להשאיר את השורה: import './globals.css';
 * כאן הסרנו אותה כדי למנוע שגיאת קומפילציה בסביבת התצוגה המקדימה.
 */

export const metadata = {
  title: 'Sapir // OS',
  description: 'Brutalist Portfolio & Thought Repository',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* הזרקת Tailwind ישירות דרך CDN כדי לוודא שהעיצוב עובד ב-Preview ללא קובץ CSS חיצוני */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
