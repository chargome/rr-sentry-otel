import type { Route } from "./+types/root";

export const otelMiddleware: Route.MiddlewareFunction = async (
  { request },
  next
) => {
  // TODO: Add OpenTelemetry instrumentation here
  const response = await next();
  return response;
};
