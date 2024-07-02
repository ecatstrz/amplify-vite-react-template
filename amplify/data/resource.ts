import { type ClientSchema, a, b, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  CatPicture: a
    .model({
      id: a.id(),
      imageData: b.binary(),
      description: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
