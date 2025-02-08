function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto flex max-w-7xl flex-wrap">
        {children}
      </div>
    </div>
  );
}

export default Layout;
