export const metadata = {
  title: "Sanity Studio - LUXARA",
  description: "Content management for LUXARA Fashion",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body>{children}</body>
    </html>
  );
}
