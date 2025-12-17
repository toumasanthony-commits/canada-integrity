export default function Home() {
  return (
    <main style={{ padding: 40, maxWidth: 900 }}>
      <h1>Canada Integrity Project</h1>
      <p>
        A simple, non-partisan transparency hub using publicly available information.
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/about">About</a>
        <a href="/rankings">Rankings</a>
      </div>
    </main>
  );
}
