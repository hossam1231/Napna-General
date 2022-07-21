import { db } from 'src/lib/db'

export const plans = () => {
  return db.plan.findMany()
}

export const plan = ({ id }) => {
  return db.plan.findUnique({
    where: { id },
  })
}

export const createPlan = ({ input }) => {
  return db.plan.create({
    data: input,
  })
}

export const updatePlan = ({ id, input }) => {
  return db.plan.update({
    data: input,
    where: { id },
  })
}

export const deletePlan = ({ id }) => {
  return db.plan.delete({
    where: { id },
  })
}
