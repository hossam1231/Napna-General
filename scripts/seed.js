import { db } from 'api/src/lib/db'

export default async () => {
  // create plans
  await db.plan.upsert({
    where: { id: 'ad956423225ffe9f154419361eeeb' },
    create: {
      id: 'ad956423225ffe9f154419361eeeb',

      name: 'Bronze',
      description: 'Few features',
      price: 12,
    },
    update: {},
  })

  await db.plan.upsert({
    where: { id: 'ad95630434239f154419361eeeb' },
    create: {
      id: 'ad95630434239f154419361eeeb',

      name: 'Silver',
      description: 'Some features',
      price: 42,
    },
    update: {},
  })

  await db.plan.upsert({
    where: { id: 'ad9563042fe9f15dnoisi361eeeb' },
    create: {
      id: 'ad9563042fe9f15dnoisi361eeeb',

      name: 'Gold',
      description: ' All features',
      price: 88,
    },
    update: {},
  })

  console.info('')
  console.info('Seeded table:plans successfully')
  console.info('')
}
