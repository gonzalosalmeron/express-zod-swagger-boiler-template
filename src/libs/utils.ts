import chalk from 'chalk'
import fs from 'fs'
import { ZodError, ZodSchema } from 'zod'

export const validateErrors = (
  schema: ZodSchema,
  formData: { [key: string | number]: string | number | null | undefined }
): { result: 'ok' | 'error'; data?: any; errors?: any } => {
  try {
    const parse = schema.parse({ ...formData })

    return { result: 'ok', data: parse }
  } catch (e) {
    if (e instanceof ZodError) {
      const rawErrors: any = e.format()
      let errors: { [key: string | number]: string | number | null } = {}
      Object.keys(rawErrors).forEach((err: any) => {
        if (err != '_errors')
          errors = { ...errors, [err]: rawErrors[err]['_errors'][0] }
      })

      return { result: 'error', errors }
    }
    return { result: 'error', errors: [] }
  }
}

export const removeKeyFromObject = ({
  object,
  excludeFields,
}: {
  object: { [key: string]: unknown }
  excludeFields: string[]
}) => {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !excludeFields.includes(key))
  )
}

const colors = {
  error: '#FF0000',
  warn: '#FFFF00',
  info: '#00FF00',
  debug: '#0000FF',
}
export const writeLog = async (
  type: keyof typeof colors,
  method: string,
  message: string = ''
) => {
  console.log(
    `[${chalk.bold.hex(colors[type ?? 'error'])(type.toUpperCase())}][${chalk.gray(new Date().toLocaleString('es-ES'))}][${chalk.magenta(method.toUpperCase())}] ${message.trim().toUpperCase()}`
  )
  fs.writeFile(
    `logs/example.log`,
    `[${type.toUpperCase()}][${new Date().toLocaleString('es-ES')}][${method.toUpperCase()}] ${message.trim().toUpperCase()}\n`,
    { flag: 'a' },
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
}
