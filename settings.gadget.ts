import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  plugins: {
    connections: { shopify: { apiVersion: "2024-01", enabledModels: ["shopifyProduct", "shopifyProductImage"], type: "partner", scopes: ["read_products"] } },
    authentications: {
      settings: { redirectOnSignIn: "/signed-in", signInPath: "/sign-in", unauthorizedUserRedirect: "redirect", accessControlForSignedInUsers: ["signed-in"] },
      methods: { emailPassword: true, googleOAuth: { scopes: ["email", "profile"], offlineAccess: false } },
    },
  },
};