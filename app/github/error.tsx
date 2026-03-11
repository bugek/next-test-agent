"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "2rem", borderRadius: "24px", background: "#fffaf0", color: "#1f2937" }}>
      <h2>Something interrupted the signal feed</h2>
      <p style={{ color: "#5b6470" }}>The page is intact, but the live content could not be refreshed just now.</p>
      <p style={{ color: "#b91c1c" }}>{error.message}</p>
      <button type="button" onClick={reset} style={{ marginTop: "1rem" }}>Try again</button>
    </div>
  );
}
