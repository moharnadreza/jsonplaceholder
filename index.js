const app = require('./src/app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Perisan JSONPlaceholder listening on http://localhost:' + port)
})
