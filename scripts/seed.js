import { db } from 'api/src/lib/db'

export default async () => {
  // create plans
  await db.plan.upsert({
    where: { id: 'ad956423225ffe9f154419361eeeb' },
    create: {
      id: 'ad956423225ffe9f154419361eeeb',
      name: 'Bronze',
      description: 'Few features',
      price: 12.99,
      image: 'https://i.imgur.com/XQj8Z9x.png',
      type: 'plan',
    },
    update: {},
  })

  await db.plan.upsert({
    where: { id: 'ad95630434239f154419361eeeb' },
    create: {
      id: 'ad95630434239f154419361eeeb',
      name: 'Silver',
      description: 'Some features',
      price: 42.99,
      image: 'https://via.placeholder.com/150',
      type: 'plan',
    },
    update: {},
  })

  await db.plan.upsert({
    where: { id: 'ad9563042fe9f15dnoisi361eeeb' },
    create: {
      id: 'ad9563042fe9f15dnoisi361eeeb',
      name: 'Gold',
      description: ' All features',
      price: 88.99,
      image:
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      type: 'plan',
    },
    update: {},
  })

  console.info('')
  console.info('Seeded table:plans successfully')
  console.info('')
}
