import { Link } from "react-router";
import type { Route } from "./+types/about";

export async function loader() {
  return {
    appName: "React Router Demo",
    features: ["Sentry Integration", "OpenTelemetry", "Type Safety"],
    version: "1.0.0",
  };
}

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>ℹ️ About</h1>
      <p>
        This is a <strong>{loaderData.appName}</strong> v{loaderData.version}
      </p>
      <h3>Features:</h3>
      <ul>
        {loaderData.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
