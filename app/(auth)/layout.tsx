export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10">
      {children}
    </main>
  );
}
