const express = require("express")
const app = express()
app.get("/rabatt", (req, res) => {
  console.log(process.env.WE_HAVE);
  
  res.send("123")
})
app.listen(4321)

const weHaveRabattAngebote = yes => yes;

const getRabattAktionen = () => [
    {
      name: "Angebot 1",
      url: "/angebot1"
    },
    {
      name: "Angebot 2",
      url: "/angebot2"
    }
]

const getNoRabattAngebote = () => []

const isIsFridayYet = today => today === "friday" ? "Yes" : "Nope"

module.exports = {
    weHaveRabattAngebote,
    isIsFridayYet,
    getRabattAktionen,
    getNoRabattAngebote
}