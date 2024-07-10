/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCat = /* GraphQL */ `query GetCat($id: ID!) {
  getCat(id: $id) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCatQueryVariables, APITypes.GetCatQuery>;
export const listCats = /* GraphQL */ `query ListCats($filter: ModelCatFilterInput, $limit: Int, $nextToken: String) {
  listCats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      imageUrl
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCatsQueryVariables, APITypes.ListCatsQuery>;
