import 'dotenv/config'
import request from 'supertest'

const app = require('../app')

describe('GET /api/example', () => {
  // Returns a 200 status code
  it('should return a 200 status code', async () => {
    return request(app).get('/api/example').expect(200)
  })
})
