import { log } from "console";
import type { unstable_ServerInstrumentation } from "react-router";

async function logPerformance(fn: () => Promise<void>, name: string) {
  const start = performance.now();
  await fn();
  console.log(`${name} done in ${performance.now() - start}ms`);
}

export const serverInstrumentations: unstable_ServerInstrumentation = {
  handler({ instrument }) {
    instrument({
      async request(fn, info) {
        let path = new URL(info.request.url).pathname;
        await logPerformance(fn, `request ${path}`);
      },
    });
  },
  route({ instrument, id }) {
    instrument({
      middleware: (fn) => logPerformance(fn, ` middleware (${id})`),
      loader: (fn) => logPerformance(fn, `  loader (${id})`),
      action: (fn) => logPerformance(fn, `  action (${id})`),
    });
  },
};
