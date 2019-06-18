// import path from 'path'
// import http from 'http'
// import { compileApi } from 'exegesis'
// import middleware from 'exegesis-express';

// // See https://github.com/exegesis-js/exegesis/blob/master/docs/Options.md
// const options = {
//   controllers: path.resolve(__dirname, './controllers')
// }

// // `compileApi()` can either be used with a callback, or if none is provided,
// // will return a Promise.

// compileApi(
//   path.resolve(__dirname, './openapi.yaml'),
//   options
// ).then(middleware => {
//   const server = http.createServer((req, res) =>
//   middleware(req, res, err => {
//     if (err) {
//       //   res.writeHead(err.status || 500)
//       //   res.end(`Internal error: ${err.message}`)
//       // } else {
//       res.writeHead(404)
//       res.end()
//     }
//   })
// )

//   server.listen(3000)
// }).catch(err => {
//   console.error('Error creating middleware', err.stack)
//   process.exit(1)
// })

// // compileApi(
// //   path.resolve(__dirname, './openapi.yaml'),
// //   options,
// //   (err, middleware) => {
// //     if (err) {
// //       console.error('Error creating middleware', err.stack)
// //       process.exit(1)
// //     }

// //     const server = http.createServer((req, res) =>
// //       middleware(req, res, err => {
// //         if (err) {
// //           //   res.writeHead(err.status || 500)
// //           //   res.end(`Internal error: ${err.message}`)
// //           // } else {
// //           res.writeHead(404)
// //           res.end()
// //         }
// //       })
// //     )

// //     server.listen(3000)
// //   }
// // )
