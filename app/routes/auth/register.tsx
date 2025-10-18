import { Link } from "react-router";

export default function Register() {
  return (
    <div>
      <h3>Register</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <input type="text" placeholder="Name" style={{ padding: "0.5rem" }} />
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
          Create Account
        </button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
