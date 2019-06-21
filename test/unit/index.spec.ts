import { OpenApiValidator } from 'express-openapi-validate'
import fs from 'fs'
import jsYaml from 'js-yaml'
import request from 'supertest'
import { createApp } from '../../src/app'

const openApiDocument = jsYaml.safeLoad(
  fs.readFileSync('src/openapi.yaml', 'utf-8')
)
const validator = new OpenApiValidator(openApiDocument)

describe('App', () => {
  let app: any
  beforeAll(async () => {
    app = await createApp()
  })

  test('/greet responses', async () => {
    const validateResponse = validator.validateResponse('get', '/greet')

    const res = await request(app)
      .get('/greet')
      .query({ name: 'alex' })

    const result = validateResponse(res)
    expect(result).toBeUndefined()
  })
})
