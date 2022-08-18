import { db } from 'src/lib/db'

export const merchants = () => {
  return db.merchant.findMany()
}

export const merchant = ({ id }) => {
  return db.merchant.findUnique({
    where: { id },
  })
}


export const createMerchant = ({ input }) => {
  return db.merchant.create({
    data: input,
  })
}

export const updateMerchant = ({ id, input }) => {
  return db.merchant.update({
    data: input,
    where: { id },
  })
}

export const deleteMerchant = ({ id }) => {
  return db.merchant.delete({
    where: { id },
  })
}
