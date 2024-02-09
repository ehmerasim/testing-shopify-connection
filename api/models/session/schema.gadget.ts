import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://testing-shopify-connection-fba.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-kqayZ7GzZp2u",
  fields: { user: { type: "belongsTo", parent: { model: "user" }, storageKey: "ModelField-W8Kf7c7tGp4v" } },
};
