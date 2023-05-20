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
      {children}
    </div>
  );
}
