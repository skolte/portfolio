import { readFile } from 'fs/promises';
import { resolve } from 'path';

export async function GET() {
  try {
    const filePath = resolve(process.cwd(), 'public', 'invoice-generator.html');
    const html = await readFile(filePath, 'utf-8');

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Failed to read invoice generator:', error);
    return new Response('Invoice generator not found', { status: 404 });
  }
}

export async function HEAD() {
  return new Response(null, { status: 200 });
}
