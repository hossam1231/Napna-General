import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const products = () => {
  return db.product.findMany()
}

export const product = ({ id }: Prisma.ProductWhereUniqueInput) => {
  return db.product.findUnique({
    where: { id },
  })
}

interface CreateProductArgs {
  input: Prisma.ProductCreateInput
}

export const createProduct = ({ input }: CreateProductArgs) => {
  return db.product.create({
    data: input,
  })
}

interface UpdateProductArgs extends Prisma.ProductWhereUniqueInput {
  input: Prisma.ProductUpdateInput
}

export const updateProduct = ({ id, input }: UpdateProductArgs) => {
  return db.product.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct = ({ id }: Prisma.ProductWhereUniqueInput) => {
  return db.product.delete({
    where: { id },
  })
}