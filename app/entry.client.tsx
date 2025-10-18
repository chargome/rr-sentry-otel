import "./instrument.client";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { clientInstrumentations } from "./sentry-instrumentations/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter unstable_instrumentations={[clientInstrumentations]} />
    </StrictMode>
  );
});
