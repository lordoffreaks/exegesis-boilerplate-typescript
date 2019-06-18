//You may choose HTTP or HTTPS, if HTTPS you need a SSL Cert
import http from 'http'
import { createApp } from './app'
// import https from 'https'

const PORT = process.env.port || 3000

async function createServer() {
  const app = await createApp()
  //Used to create a HTTP Server
  const server = http.createServer(app)

  /**
     * If you want to run a HTTPS server instead you must:
     * + Get a SSL Cert and Key to use 
     * + Change the server type from http to https as shown below
     *
     
    const httpsOptions = {
        key: fs.readFileSync('./config/key.pem'),
        cert: fs.readFileSync('./config/cert.pem')
    }
    const server = https.createServer(httpsOptions,app);

    */
  return server
}
//Run our createServer function
createServer()
  .then(server => {
    server.listen(PORT)
    console.log('Listening on port 3000')
    console.log('Try visiting http://localhost:3000/greet?name=Jason')
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
