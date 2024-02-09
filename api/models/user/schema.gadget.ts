import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://testing-shopify-connection-fba.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-6UVzHn5bJXMK",
  fields: {
    email: { type: "email", validations: { required: true, email: true, unique: true }, storageKey: "ModelField-RlL6pFw3rB_3" },
    emailVerificationToken: { type: "string", storageKey: "ModelField-9wjeNMK-DMly" },
    emailVerificationTokenExpiration: { type: "dateTime", includeTime: true, storageKey: "ModelField-VrTlsXuuZFBv" },
    emailVerified: { type: "boolean", default: false, storageKey: "ModelField-1brE2AOjiNEY" },
    firstName: { type: "string", storageKey: "ModelField-KOLNpBAXXX0K" },
    googleImageUrl: { type: "url", validations: { url: true }, storageKey: "ModelField-Qlfx5lu0t1tb" },
    googleProfileId: { type: "string", storageKey: "ModelField-26t69dwBFGRD" },
    lastName: { type: "string", storageKey: "ModelField-MT7ju5E9sCz9" },
    lastSignedIn: { type: "dateTime", includeTime: true, storageKey: "ModelField-CF24Ay_7-WWR" },
    password: { type: "password", validations: { strongPassword: true }, storageKey: "ModelField-xMXu1d8n1x18" },
    resetPasswordToken: { type: "string", storageKey: "ModelField-XmL05Mf_gSeB" },
    resetPasswordTokenExpiration: { type: "dateTime", includeTime: true, storageKey: "ModelField-sTo47wpoiA_Y" },
    roles: { type: "roleList", default: ["unauthenticated"], storageKey: "ModelField-N_ddf1aDiTc0" },
  },
};
