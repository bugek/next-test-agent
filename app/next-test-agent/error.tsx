"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error: _error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "2rem", borderRadius: "24px", background: "#fffaf5", color: "#2f241c" }}>
      <h2>This section needs another pass</h2>
      <p style={{ color: "#6b5a4a" }}>The shell is present, but the content layer hit an unexpected error.</p>
      <p style={{ color: "#b91c1c" }}>Try again, and if the problem continues, inspect the latest logs or server response.</p>
      <button type="button" onClick={reset} style={{ marginTop: "1rem" }}>Try again</button>
    </div>
  );
}
