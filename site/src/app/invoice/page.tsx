'use client';

import { useEffect, useRef } from 'react';
import fs from 'fs';

export default function InvoicePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadHtml = async () => {
      try {
        const response = await fetch('/api/invoice-generator');
        const html = await response.text();

        if (iframeRef.current?.contentDocument) {
          iframeRef.current.contentDocument.open();
          iframeRef.current.contentDocument.write(html);
          iframeRef.current.contentDocument.close();
        }
      } catch (error) {
        console.error('Failed to load invoice generator:', error);
      }
    };

    loadHtml();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        ref={iframeRef}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
        title="Invoice Generator"
      />
    </div>
  );
}
