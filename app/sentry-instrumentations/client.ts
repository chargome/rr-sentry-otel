import type { unstable_ClientInstrumentation } from "react-router";
import * as Sentry from "@sentry/browser";
import { BrowserClient } from "@sentry/browser";

async function logPerformance(fn: () => Promise<void>, name: string) {
  const start = performance.now();
  await fn();
  console.log(`${name} done in ${performance.now() - start}ms`);
}

const client = Sentry.getClient() as BrowserClient;

export const clientInstrumentations: unstable_ClientInstrumentation = {
  router({ instrument }) {
    instrument({
      navigate: async (fn, info) => {
        console.log("navigate", info);
        Sentry.startBrowserTracingNavigationSpan(client, {
          name: `navigate ${info.to}`,
        });
        fn();
      },
    });
  },
  route({ instrument, id }) {
    instrument({
      middleware: (fn) =>
        Sentry.startSpan({ name: "rr.middleware" }, async () => {
          await fn();
        }),
      loader: (fn, info) =>
        Sentry.startSpan(
          {
            name: `loader ${info.unstable_pattern}`,
          },
          async () => {
            await fn();
          }
        ),
      action: (fn) => Sentry.startSpan({ name: "rr.action" }, fn),
    });
  },
};
