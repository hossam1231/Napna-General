import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as PrismaUser, Plan as PrismaPlan, Partner as PrismaPartner, Merchant as PrismaMerchant, ActivePlan as PrismaActivePlan, Prisma } from '.prisma/client';
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
};

export type CreateMerchantInput = {
  address: Scalars['String'];
  name: Scalars['String'];
  partnerId: Scalars['String'];
  postalCode: Scalars['String'];
};

export type CreatePartnerInput = {
  merchantId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type CreatePlanInput = {
  body: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['String'];
};

export type Merchant = {
  __typename?: 'Merchant';
  address: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  partnerId: Scalars['String'];
  postalCode: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMerchant: Merchant;
  createPartner: Partner;
  createPlan: Plan;
  deleteMerchant: Merchant;
  deletePartner: Partner;
  deletePlan: Plan;
  updateMerchant: Merchant;
  updatePartner: Partner;
  updatePlan: Plan;
};


export type MutationcreateMerchantArgs = {
  input: CreateMerchantInput;
};


export type MutationcreatePartnerArgs = {
  input: CreatePartnerInput;
};


export type MutationcreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationdeleteMerchantArgs = {
  id: Scalars['String'];
};


export type MutationdeletePartnerArgs = {
  id: Scalars['String'];
};


export type MutationdeletePlanArgs = {
  id: Scalars['String'];
};


export type MutationupdateMerchantArgs = {
  id: Scalars['String'];
  input: UpdateMerchantInput;
};


export type MutationupdatePartnerArgs = {
  id: Scalars['String'];
  input: UpdatePartnerInput;
};


export type MutationupdatePlanArgs = {
  id: Scalars['String'];
  input: UpdatePlanInput;
};

export type Partner = {
  __typename?: 'Partner';
  id: Scalars['String'];
  merchantId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type Plan = {
  __typename?: 'Plan';
  body: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  price: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  merchant?: Maybe<Merchant>;
  merchants: Array<Merchant>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
  plan?: Maybe<Plan>;
  plans: Array<Plan>;
  redwood?: Maybe<Redwood>;
};


export type QuerymerchantArgs = {
  id: Scalars['String'];
};


export type QuerypartnerArgs = {
  id: Scalars['String'];
};


export type QueryplanArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateMerchantInput = {
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  partnerId?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type UpdatePartnerInput = {
  merchantId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UpdatePlanInput = {
  body?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
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
  CreateMerchantInput: CreateMerchantInput;
  CreatePartnerInput: CreatePartnerInput;
  CreatePlanInput: CreatePlanInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  JSON: ResolverTypeWrapper<Prisma>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Merchant: ResolverTypeWrapper<PrismaMerchant>;
  Mutation: ResolverTypeWrapper<{}>;
  Partner: ResolverTypeWrapper<PrismaPartner>;
  Plan: ResolverTypeWrapper<PrismaPlan>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Omit<Redwood, 'currentUser'> & { currentUser?: Maybe<ResolversTypes['JSON']> }>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateMerchantInput: UpdateMerchantInput;
  UpdatePartnerInput: UpdatePartnerInput;
  UpdatePlanInput: UpdatePlanInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  CreateMerchantInput: CreateMerchantInput;
  CreatePartnerInput: CreatePartnerInput;
  CreatePlanInput: CreatePlanInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  JSON: Prisma;
  JSONObject: Scalars['JSONObject'];
  Merchant: PrismaMerchant;
  Mutation: {};
  Partner: PrismaPartner;
  Plan: PrismaPlan;
  Query: {};
  Redwood: Omit<Redwood, 'currentUser'> & { currentUser?: Maybe<ResolversParentTypes['JSON']> };
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateMerchantInput: UpdateMerchantInput;
  UpdatePartnerInput: UpdatePartnerInput;
  UpdatePlanInput: UpdatePlanInput;
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

export type MerchantResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Merchant'] = ResolversParentTypes['Merchant']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  partnerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMerchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType, RequireFields<MutationcreateMerchantArgs, 'input'>>;
  createPartner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<MutationcreatePartnerArgs, 'input'>>;
  createPlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationcreatePlanArgs, 'input'>>;
  deleteMerchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType, RequireFields<MutationdeleteMerchantArgs, 'id'>>;
  deletePartner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<MutationdeletePartnerArgs, 'id'>>;
  deletePlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationdeletePlanArgs, 'id'>>;
  updateMerchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType, RequireFields<MutationupdateMerchantArgs, 'id' | 'input'>>;
  updatePartner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<MutationupdatePartnerArgs, 'id' | 'input'>>;
  updatePlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationupdatePlanArgs, 'id' | 'input'>>;
};

export type PartnerResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Partner'] = ResolversParentTypes['Partner']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  merchantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  merchant?: Resolver<Maybe<ResolversTypes['Merchant']>, ParentType, ContextType, RequireFields<QuerymerchantArgs, 'id'>>;
  merchants?: Resolver<Array<ResolversTypes['Merchant']>, ParentType, ContextType>;
  partner?: Resolver<Maybe<ResolversTypes['Partner']>, ParentType, ContextType, RequireFields<QuerypartnerArgs, 'id'>>;
  partners?: Resolver<Array<ResolversTypes['Partner']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<QueryplanArgs, 'id'>>;
  plans?: Resolver<Array<ResolversTypes['Plan']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Merchant?: MerchantResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Partner?: PartnerResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth?: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth?: skipAuthDirectiveResolver<any, any, ContextType>;
};
