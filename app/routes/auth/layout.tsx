import { Link, Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ marginTop: 0 }}>🔐 Authentication</h2>
        <Outlet />
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}
