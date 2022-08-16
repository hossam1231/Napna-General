import { db } from 'src/lib/db'

export const partners = () => {
  return db.partner.findMany()
}

export const partner = ({ id }) => {
  return db.partner.findUnique({
    where: { id },
  })
}

export const partnerByUser = ({ id }) => {
  return db.partner.findUnique({
    where: { id },
  })
}

export const createPartner = ({ input }) => {
  return db.partner.create({
    data: input,
  })
}

export const updatePartner = ({ id, input }) => {
  return db.partner.update({
    data: input,
    where: { id },
  })
}

export const deletePartner = ({ id }) => {
  return db.partner.delete({
    where: { id },
  })
}
