let names = require(`./db.json`)
let globalId = names[names.length - 1].id + 1


module.exports = {
    getName: (req, res) => {
        res.status(200).send(names)
    },
    addName: (req, res) => {
        const { name, age} = req.body
        let newName = {
            name,
            age,
            id: globalId
        }
        names.push(newName)
        res.status(200).send(names)
        globalId++
    },
    updateName: (req, res) => {
        const {id} = req.params
        const {name, age} = req.body
        let updateNam = {
            name,
            age,
            id
        }
        let index = names.findIndex(nam => nam.id === +id)
        names.splice(index, 1, updateNam)

        res.status(200).send(names)
    },
    deleteName: (req, res) => {
        const {id} = req.params
        let index = names.findIndex(nam => nam.id === +id)
        names.splice(index,1)
        console.log('delete', names);

        res.status(200).send(names)  
    }

}