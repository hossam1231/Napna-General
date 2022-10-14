import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as PrismaUser, Prisma } from '.prisma/client';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => Promise<Partial<TResult>> | Partial<TResult>;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type Query = {
  __typename?: 'Query';
  getCustomerId: Scalars['String'];
  getSession: Session;
  products: Array<Product>;
  redwood?: Maybe<Redwood>;
};


export type QuerygetCustomerIdArgs = {
  id: Scalars['ID'];
};


export type QuerygetSessionArgs = {
  id: Scalars['ID'];
};


export type QueryproductsArgs = {
  type?: InputMaybe<ProductType>;
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Prisma>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mode: Mode;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  ProductType: ProductType;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Omit<Redwood, 'currentUser'> & { currentUser?: Maybe<ResolversTypes['JSON']> }>;
  Session: ResolverTypeWrapper<Session>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  User: ResolverTypeWrapper<PrismaUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Prisma;
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Product: Product;
  ProductInput: ProductInput;
  Query: {};
  Redwood: Omit<Redwood, 'currentUser'> & { currentUser?: Maybe<ResolversParentTypes['JSON']> };
  Session: Session;
  String: Scalars['String'];
  Time: Scalars['Time'];
  URL: Scalars['URL'];
  User: PrismaUser;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  checkout?: Resolver<ResolversTypes['Session'], ParentType, ContextType, RequireFields<MutationcheckoutArgs, 'cart' | 'mode'>>;
  portal?: Resolver<ResolversTypes['Session'], ParentType, ContextType, RequireFields<MutationportalArgs, 'userId'>>;
};

export type ProductResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCustomerId?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QuerygetCustomerIdArgs, 'id'>>;
  getSession?: Resolver<ResolversTypes['Session'], ParentType, ContextType, RequireFields<QuerygetSessionArgs, 'id'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryproductsArgs>>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  customerEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerSignedUp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UserResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Time?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth?: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth?: skipAuthDirectiveResolver<any, any, ContextType>;
};
