const person = require('./db.json')

module.exports = {
    getNames: (req, res) => res.status(200).send(person),
    deleteNames: (req, res) => {
        let index = person.findIndex(elem => elem.id === +req.params.id)
        person.splice(index,1)
        res.status(200).send(person)
}
    // createNames: (req, res) => {

    // }



}