import { Link } from "react-router";

export default function Login() {
  return (
    <div>
      <h3>Login</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <input type="email" placeholder="Email" style={{ padding: "0.5rem" }} />
        <input
          type="password"
          placeholder="Password"
          style={{ padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{ padding: "0.5rem", marginTop: "0.5rem", cursor: "pointer" }}
        >
          Sign In
        </button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
