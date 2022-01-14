const notFound = (req, res) => res.status(404).send("Oh não! Essa rota nao existe")

module.exports = notFound