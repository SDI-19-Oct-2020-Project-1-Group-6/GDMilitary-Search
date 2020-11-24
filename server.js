const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3010
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/units', db.getUnits)

app.get('/units/:name', db.getUnitByName)

app.post('/units', db.addUnit)






app.listen(port, () => console.log(`Example app listening on port ${port}!`))