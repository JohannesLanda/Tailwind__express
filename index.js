require("dotenv")

const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 7070
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src", "views"))
app.use(express.static(path.join(__dirname, "src", "styles")))

app.get("/", (req, res) => {
    res.render("mainpage/main", {titel: " home page "})
})
app.get("/news", (req, res) => {
    res.render("newpage/newpage", {titel: " news page "})
})

app.listen(PORT, () => {
    console.log(`server is on ${PORT}`);
})