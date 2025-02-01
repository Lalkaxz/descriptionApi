import express from "express";
import router from "./src/router.js";
const app = express()

// Loading ENV values.
process.loadEnvFile('.env')
const PORT = process.env.PORT || 5584
const HOSTNAME = process.env.HOSTNAME || "localhost"
// Use router for this application.
app.use("/", router)

app.listen(PORT, (err) => {
  if (err) {
    throw new Error(err)
  }
  console.log(`App listening on ${HOSTNAME}:${PORT}`)
})

