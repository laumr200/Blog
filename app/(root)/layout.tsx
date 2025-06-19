import Header from '@/components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Header />
        <main className="flex-1 ml-64 bg-gray-100">{children}</main>
      </body>
    </html>
  );
}