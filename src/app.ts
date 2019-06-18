import express, { Request, Response, NextFunction } from 'express'
import { middleware } from 'exegesis-express'
import path from 'path'

export const createApp = async () => {
  // See https://github.com/exegesis-js/exegesis/blob/master/docs/Options.md
  const options = {
    controllers: path.resolve(__dirname, './controllers'),
    controllersPattern: '**/*.@(ts|js)'
  }

  // This creates an exgesis middleware, which can be used with express,
  // connect, or even just by itself.
  const exegesisMiddleware = await middleware(
    path.resolve(__dirname, '../openapi.yaml'),
    options
  )

  const app = express()

  // If you have any body parsers, this should go before them.
  app.use(exegesisMiddleware)

  // Return a 404
  app.use((_, res) => {
    res.status(404).json({ message: `Not found` })
  })

  // Handle any unexpected errors
  app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
    res.status(500).json({ message: `Internal error: ${err.message}` })
  })

  return app
}
