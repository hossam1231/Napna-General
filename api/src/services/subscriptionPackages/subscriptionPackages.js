import { db } from 'src/lib/db'

export const subscriptionPackages = () => {
  return db.subscriptionPackage.findMany()
}

export const subscriptionPackage = ({ id }) => {
  return db.subscriptionPackage.findUnique({
    where: { id },
  })
}

export const createSubscriptionPackage = ({ input }) => {
  return db.subscriptionPackage.create({
    data: input,
  })
}

export const updateSubscriptionPackage = ({ id, input }) => {
  return db.subscriptionPackage.update({
    data: input,
    where: { id },
  })
}

export const deleteSubscriptionPackage = ({ id }) => {
  return db.subscriptionPackage.delete({
    where: { id },
  })
}
