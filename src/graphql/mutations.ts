/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCat = /* GraphQL */ `mutation CreateCat(
  $input: CreateCatInput!
  $condition: ModelCatConditionInput
) {
  createCat(input: $input, condition: $condition) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCatMutationVariables,
  APITypes.CreateCatMutation
>;
export const updateCat = /* GraphQL */ `mutation UpdateCat(
  $input: UpdateCatInput!
  $condition: ModelCatConditionInput
) {
  updateCat(input: $input, condition: $condition) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCatMutationVariables,
  APITypes.UpdateCatMutation
>;
export const deleteCat = /* GraphQL */ `mutation DeleteCat(
  $input: DeleteCatInput!
  $condition: ModelCatConditionInput
) {
  deleteCat(input: $input, condition: $condition) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCatMutationVariables,
  APITypes.DeleteCatMutation
>;
