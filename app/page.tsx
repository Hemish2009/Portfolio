import fs from 'fs';
import path from 'path';
import Script from 'next/script';

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'Design', 'website.html'), 'utf8');

  const tailwindConfigMatch = html.match(/<script[^>]*id="tailwind-config"[^>]*>([\s\S]*?)<\/script>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  const tailwindConfig = tailwindConfigMatch ? tailwindConfigMatch[1] : '';
  const bodyHtml = bodyMatch ? bodyMatch[1] : html;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      {tailwindConfig ? (
        <Script
          id="tailwind-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: tailwindConfig }}
        />
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
