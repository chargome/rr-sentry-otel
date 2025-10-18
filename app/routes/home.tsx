import { Link } from "react-router";
import type { Route } from "./+types/home";

export async function loader() {
  // Simulate fetching data
  return {
    welcomeMessage: "Welcome to the application!",
    timestamp: new Date().toISOString(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>🏠 Home</h1>
      <p>{loaderData.welcomeMessage}</p>
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Loaded at: {new Date(loaderData.timestamp).toLocaleTimeString()}
      </p>
      <nav style={{ marginTop: "1rem" }}>
        <Link to="/about" style={{ marginRight: "1rem" }}>
          About
        </Link>
        <Link to="/login" style={{ marginRight: "1rem" }}>
          Login
        </Link>
        <Link to="/register" style={{ marginRight: "1rem" }}>
          Register
        </Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
}
