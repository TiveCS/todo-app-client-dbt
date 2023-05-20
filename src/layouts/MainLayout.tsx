export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="app"
      className="min-h-screen w-screen bg-slate-950 font-mono text-gray-50 px-8 py-8"
    >
      <header className="text-center w-full mb-8">
        <h1 className="text-2xl">Global Todo</h1>
      </header>

      {children}
    </div>
  );
}
