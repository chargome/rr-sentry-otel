import { Link } from "react-router";
import type { Route } from "./+types/user";

const users: Record<string, { name: string; email: string; role: string }> = {
  "1": { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  "2": { name: "Bob Smith", email: "bob@example.com", role: "Developer" },
  "3": {
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Designer",
  },
};

export async function loader({ params }: Route.LoaderArgs) {
  const user = params.userId ? users[params.userId] : null;

  if (!user) {
    throw new Response("User Not Found", { status: 404 });
  }

  return { user };
}

export default function User({ loaderData }: Route.ComponentProps) {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>👤 {loaderData.user.name}</h1>
      <dl style={{ lineHeight: "1.8" }}>
        <dt style={{ fontWeight: "bold" }}>Email:</dt>
        <dd style={{ marginLeft: "1rem" }}>{loaderData.user.email}</dd>
        <dt style={{ fontWeight: "bold" }}>Role:</dt>
        <dd style={{ marginLeft: "1rem" }}>{loaderData.user.role}</dd>
      </dl>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/users">← Back to Users</Link>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>❌ User Not Found</h1>
      <p>The user you're looking for doesn't exist.</p>
      <Link to="/users">← Back to Users</Link>
    </div>
  );
}
