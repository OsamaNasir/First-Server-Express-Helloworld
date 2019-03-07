const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Osama!'))


app.get("/", function(request, response, next) {
    response.send("Osama Nasir")
})

app.get("/profile", function (request, response, next) {
    response.send("My profile")
})

app.post("/profile", function (request, response, next) {
    
    response.send("My profile")
})

app.get("/contact", function (request, response, next) {
    response.send("My contacts")
})
app.get("/contact/othercontact", function (request, response, next) {
    response.send("Other contacts")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))