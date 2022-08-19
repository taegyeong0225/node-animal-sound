const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "elementary") {
        res.json({'sound': '금곡'})
    } else if(name == "middle") {
        res.json({'sound': '검단'})
    } else if(name == "high") {
        res.json({'sound': '검단'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
