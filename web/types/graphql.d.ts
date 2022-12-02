import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
  URL: any;
};

export type Mode =
  | 'payment'
  | 'subscription';

export type Mutation = {
  __typename?: 'Mutation';
  checkout: Session;
  portal: Session;
};


export type MutationcheckoutArgs = {
  cart: Array<ProductInput>;
  customerId?: InputMaybe<Scalars['String']>;
  mode: Mode;
};


export type MutationportalArgs = {
  userId: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  type: Scalars['String'];
};

export type ProductInput = {
  id: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type ProductType =
  | 'one_time'
  | 'recurring';

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  getCustomerId: Scalars['String'];
  getSession: Session;
  products: Array<Product>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QuerygetCustomerIdArgs = {
  id: Scalars['ID'];
};


/** About the Redwood queries. */
export type QuerygetSessionArgs = {
  id: Scalars['ID'];
};


/** About the Redwood queries. */
export type QueryproductsArgs = {
  type?: InputMaybe<ProductType>;
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  customerEmail?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  customerSignedUp?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PortalVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type Portal = { __typename?: 'Mutation', portal: { __typename?: 'Session', url: string } };

export type CheckoutVariables = Exact<{
  mode: Mode;
  cart: Array<ProductInput> | ProductInput;
  customerId?: InputMaybe<Scalars['String']>;
}>;


export type Checkout = { __typename?: 'Mutation', checkout: { __typename?: 'Session', id: string } };

export type getSuccessQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getSuccessQuery = { __typename?: 'Query', getSession: { __typename?: 'Session', id: string, customerId?: string | null, customerName?: string | null, customerSignedUp?: boolean | null } };

export type ProductsVariables = Exact<{
  type?: InputMaybe<ProductType>;
}>;


export type Products = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, image?: string | null, price: number, type: string }> };
