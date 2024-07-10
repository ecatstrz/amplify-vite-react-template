/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCatInput = {
  id?: string | null,
  name: string,
  imageUrl?: string | null,
};

export type ModelCatConditionInput = {
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelCatConditionInput | null > | null,
  or?: Array< ModelCatConditionInput | null > | null,
  not?: ModelCatConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Cat = {
  __typename: "Cat",
  id: string,
  name: string,
  imageUrl?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCatInput = {
  id: string,
  name?: string | null,
  imageUrl?: string | null,
};

export type DeleteCatInput = {
  id: string,
};

export type ModelCatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCatFilterInput | null > | null,
  or?: Array< ModelCatFilterInput | null > | null,
  not?: ModelCatFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCatConnection = {
  __typename: "ModelCatConnection",
  items:  Array<Cat | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCatFilterInput | null > | null,
  or?: Array< ModelSubscriptionCatFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCatMutationVariables = {
  input: CreateCatInput,
  condition?: ModelCatConditionInput | null,
};

export type CreateCatMutation = {
  createCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCatMutationVariables = {
  input: UpdateCatInput,
  condition?: ModelCatConditionInput | null,
};

export type UpdateCatMutation = {
  updateCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCatMutationVariables = {
  input: DeleteCatInput,
  condition?: ModelCatConditionInput | null,
};

export type DeleteCatMutation = {
  deleteCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCatQueryVariables = {
  id: string,
};

export type GetCatQuery = {
  getCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCatsQueryVariables = {
  filter?: ModelCatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCatsQuery = {
  listCats?:  {
    __typename: "ModelCatConnection",
    items:  Array< {
      __typename: "Cat",
      id: string,
      name: string,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCatSubscriptionVariables = {
  filter?: ModelSubscriptionCatFilterInput | null,
};

export type OnCreateCatSubscription = {
  onCreateCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCatSubscriptionVariables = {
  filter?: ModelSubscriptionCatFilterInput | null,
};

export type OnUpdateCatSubscription = {
  onUpdateCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCatSubscriptionVariables = {
  filter?: ModelSubscriptionCatFilterInput | null,
};

export type OnDeleteCatSubscription = {
  onDeleteCat?:  {
    __typename: "Cat",
    id: string,
    name: string,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
