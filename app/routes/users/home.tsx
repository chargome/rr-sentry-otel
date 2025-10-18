import { Link } from "react-router";
import type { Route } from "./+types/home";

export async function loader() {
  // Simulate fetching users from an API
  return {
    users: [
      { id: 1, name: "Alice Johnson" },
      { id: 2, name: "Bob Smith" },
      { id: 3, name: "Charlie Brown" },
    ],
  };
}

export default function UsersHome({ loaderData }: Route.ComponentProps) {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>👥 Users</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {loaderData.users.map((user) => (
          <li key={user.id} style={{ marginBottom: "0.5rem" }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}
