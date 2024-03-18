import { Request, Response } from 'express'

import { writeLog } from '@/libs/utils'
import { exampleService } from '@/services/example-service'

export const index = async (_: Request, res: Response) => {
  const method = 'example-controller-index'
  try {
    writeLog('info', method, 'Returning example get')
    await exampleService()

    res.status(200).json({
      result: 'ok',
      status: 200,
      message: 'Example get',
      data: {
        hello: 'world',
      },
    })
  } catch (e: any) {
    writeLog(
      'error',
      method,
      `Error returning example ${String((e as Error).message)}`
    )
    res.status(500).json({ message: 'Error returning example' })
  }
}
