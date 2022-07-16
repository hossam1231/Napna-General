// This file was generated by RedwoodJS
import { Success } from './ArticlesCell'
import type { CellProps } from '@redwoodjs/web'
import type { BlogPostsQuery, BlogPostsQueryVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './ArticlesCell'

type CellInputs = CellProps<SuccessType, BlogPostsQuery, BlogPostsQueryVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
