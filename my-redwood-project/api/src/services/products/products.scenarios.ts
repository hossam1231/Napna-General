import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: { data: { title: 'String', imageUrl: 'String', price: 6740751 } },
    two: { data: { title: 'String', imageUrl: 'String', price: 7433393 } },
  },
})

export type StandardScenario = typeof standard
