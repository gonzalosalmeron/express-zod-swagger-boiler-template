import '@/libs/env-config'

const app = require('./app')
const PORT = process.env.port || 8080
app.listen(PORT, () => {
  console.log(`Server runing on URL http://localhost:${PORT}`)
})
