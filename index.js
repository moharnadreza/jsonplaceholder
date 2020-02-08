// use env file to config
const dotenv = require('dotenv').config()
const moment = require('moment');

// required packages
const jsonServer = require('json-server')
const clone = require('clone');

const {
  ApolloServer,
  gql
} = require('apollo-server-express');

// data
const data = require('./data.json')

// configs
const port = process.env.PORT || 3000

// make app
const app = jsonServer.create()

// define router
const router = jsonServer.router(clone(data), {
  _isFake: true
})

// required controllers and configs for graphql
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const fs = require('fs');

// make apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// apply app to apollo server
server.applyMiddleware({
  app
})


app.use(/^\/(posts|comments|albums|photos|todos|users).*$/, (req, res, next) => {
  const enters = Number(fs.readFileSync('enter.txt', 'utf8'));
  fs.writeFileSync('enter.txt', (enters + 1))
  if (enters % 1000 == 0) {
    // Nodemailer Data
    const { transporter, mailOptions } = require('./nodemailer')
    mailOptions['html'] = `<h1 style="color:red">Congratulations</h1>
    <h2>Number of requests to Jsonplaceholder achieve ${String(enters)}</h2> at ${(moment().format())}`;

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log('Error in sending mail', error)
      }
    })
  }
  next()
})

app.get('/count', (req, res) => {
  const enters = Number(fs.readFileSync('enter.txt', 'utf8'));
  return res.status(200).send({
    success: true,
    count: enters
  })
})

app.use((req, res, next) => {
  if (req.path === '/') return next()
  router.db.setState(clone(data))
  next()
})

app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}))

app.use(router)

// listen to port
app.listen(port, () => {
  console.log(`Perisan JSONPlaceholder listening on http://localhost:${port} and graphql is running on http://localhost:${port}${server.graphqlPath}`)
})
