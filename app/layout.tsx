import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/rankings">Rankings</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
