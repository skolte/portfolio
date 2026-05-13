'use client';

import { useEffect } from 'react';

export default function InvoicePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/invoice-generator.html';
    script.type = 'text/html';
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      srcDoc={`<!DOCTYPE html><html><head><title>Loading...</title></head><body><script>
        (async () => {
          try {
            const res = await fetch('/api/invoice-html');
            if (!res.ok) throw new Error('Failed to load');
            const html = await res.text();
            document.open();
            document.write(html);
            document.close();
          } catch(e) {
            document.body.innerHTML = '<p>Error loading invoice generator: ' + e.message + '</p>';
          }
        })();
      </script></body></html>`}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
      }}
      title="Invoice Generator"
    />
  );
}
