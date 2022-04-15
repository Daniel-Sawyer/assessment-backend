const form = document.querySelector(`form`)

const baseURL = `https://localhost:4000/api/name`

const nameCallback = ({ data: names}) => displayNames(names)
const errCallback = err => console.log(err);

const getAllNames = () => axios.get(baseURL).then(nameCallback).catch(errCallback)
const deleteNames = id => axios.delete(`${baseURL}/${id}`,{type}).then(nameCallback).catch(errCallback)


const submitHandler = (e) => {
    e.preventDefault()

    let name = document.querySelector(`#name`)

    let nameObj = {
        name: name.value
    }

}

const displayNames = (arr) => {
    
}