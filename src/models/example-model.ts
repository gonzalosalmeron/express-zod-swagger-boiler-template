import { z } from 'zod'

export const createSchemaExample = z.object({
  name: z
    .string()
    .min(3)
    .regex(
      new RegExp('^[a-z0-9]*$'),
      'Name must contain only letters and numbers'
    ),
  type: z.enum(['ttr', 'cc', 'v9', 'dam']),
  server: z.enum(['ada3', 'acisa']),
})
