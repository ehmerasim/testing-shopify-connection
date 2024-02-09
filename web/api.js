import { Client } from "@gadget-client/testing-shopify-connection-fba";

export const api = new Client({ environment: window.gadgetConfig.environment });
