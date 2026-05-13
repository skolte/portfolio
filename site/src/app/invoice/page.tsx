export default function InvoicePage() {
  return (
    <iframe
      src="/api/invoice-html"
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
