/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCat = /* GraphQL */ `subscription OnCreateCat($filter: ModelSubscriptionCatFilterInput) {
  onCreateCat(filter: $filter) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCatSubscriptionVariables,
  APITypes.OnCreateCatSubscription
>;
export const onUpdateCat = /* GraphQL */ `subscription OnUpdateCat($filter: ModelSubscriptionCatFilterInput) {
  onUpdateCat(filter: $filter) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCatSubscriptionVariables,
  APITypes.OnUpdateCatSubscription
>;
export const onDeleteCat = /* GraphQL */ `subscription OnDeleteCat($filter: ModelSubscriptionCatFilterInput) {
  onDeleteCat(filter: $filter) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCatSubscriptionVariables,
  APITypes.OnDeleteCatSubscription
>;
