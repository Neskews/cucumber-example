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