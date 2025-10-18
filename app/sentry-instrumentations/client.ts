import type { unstable_ClientInstrumentation } from "react-router";

async function logPerformance(fn: () => Promise<void>, name: string) {
  const start = performance.now();
  await fn();
  console.log(`${name} done in ${performance.now() - start}ms`);
}

export const clientInstrumentations: unstable_ClientInstrumentation = {
  router({ instrument }) {
    instrument({
      navigate: async (fn, info) => {
        console.log(`navigate ${info.to}`);
        logPerformance(fn, "navigate");
      },
    });
  },
  route({ instrument, id }) {
    instrument({
      middleware: (fn) => logPerformance(fn, "middleware"),
      loader: (fn) => logPerformance(fn, "loader"),
      action: (fn) => logPerformance(fn, "action"),
    });
  },
};
