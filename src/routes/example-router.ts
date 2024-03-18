import express from 'express'
import { Tspec } from 'tspec'

import { index } from '@/controllers/example-controller'
import { exampleIndex } from '@/middlewares/example-middleware'

const router = express.Router()

export type ExampleApiSpec = Tspec.DefineApiSpec<{
  basePath: '/api/example'
  tags: ['Example']
  paths: {
    '/': {
      get: {
        summary: 'Return an example'
        handler: typeof index
        responses: {
          200: {
            result: 'ok'
            status: 200
            message: 'Example get'
            data: {
              hello: 'world'
            }
          }
          500: {
            result: 'error'
            status: 500
            message: 'Error getting example'
          }
        }
      }
    }
  }
}>

router.get('/example', exampleIndex, index)

export default router
