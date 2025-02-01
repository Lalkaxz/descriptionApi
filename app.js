import express from "express";

const app = express()
const port = 5584
const hostname = "localhost"

app.use()

app.get("/", (req, res) => {
    res.statusCode = 200
    res.json()
})

app.use()

app.listen(port, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log(`App listening on ${hostname}:${port}`)
})

