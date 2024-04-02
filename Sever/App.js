const express = require('express')
const Cors = require('cors')
const app = express()
const port = 5000;


app.use(Cors())

app.get('/', (req, res) => {
    res.send()


})


app.listen(port, () => {
    console.log(`listening on the ${port}`)

})