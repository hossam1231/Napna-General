import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: { title: 'String', price: 4559710.682318785, imageUrl: 'String' },
    },
    two: {
      data: { title: 'String', price: 3363034.0973462914, imageUrl: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
