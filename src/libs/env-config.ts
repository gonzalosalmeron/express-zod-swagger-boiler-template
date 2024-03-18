import { writeLog } from './utils'
import dotenv from 'dotenv'

if (process.env.TS_NODE_DEV) {
  dotenv.config({ path: '.env.local' })
  writeLog('warn', 'env-config', 'Env local file loaded successfully')
} else {
  dotenv.config()
  writeLog('warn', 'Env production loaded successfully')
}

export default true
