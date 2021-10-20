import express from "express"
import routes from "./src/routes/routes"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import Books from "./src/Data/Books.json"
const app = express()
const PORT = 4001

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/Library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.get("/books", (req, res) => res.send(Books))

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`))
