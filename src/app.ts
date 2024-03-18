import express from 'express'
import fs from 'fs'
import path from 'path'
import { TspecDocsMiddleware } from 'tspec'

// EXPRESS SETTINGS
const app = express()
// const PORT = process.env.port || 8080
app.disable('x-powered-by') // disable header: X-Powered-By
app.use(express.json()) // middleware that transform the req.body to json
// app.use(express.urlencoded())
// app.use(express.json({ strict: false }))
app.set('json spaces', 2) // number of spaces for indentation
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

// LOAD ALL ROUTES INTO EXPRESS
const routes = fs.readdirSync(path.join(__dirname, 'routes')) // loads all routes files
routes.map(async (route: string) => {
  const test = await import(path.join(__dirname, 'routes', route))
  app.use('/api', test.default)
})

// START EXPRESS
const start = async () => {
  app.use(
    '/docs',
    await TspecDocsMiddleware({
      specPathGlobs: ['src/**/*.ts'],
      tsconfigPath: './tsconfig.json',
      specVersion: 3,
      openapi: {
        title: 'Express + Zod + Tspec + Logger',
        version: '1.0.0',
      },
      debug: false,
      ignoreErrors: true,
    })
  )
}
start()

module.exports = app
