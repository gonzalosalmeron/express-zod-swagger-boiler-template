import type { RequestHandler } from 'express'

export const exampleIndex: RequestHandler = (_, res, next) => {
  if (1 != 1) {
    return res.status(400).json({
      errors: 'Error middleware',
    })
  }

  return next()
}
