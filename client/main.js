document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/").then(function (response) {
      const data = response.data
      alert(data)
    })
  }
  
  document.getElementById("fortuneButton").addEventListener('click', () => {
    axios.get("http://localhost:4000/api/fortune/").then(function (response) {
      const data = response.data
      alert(data)
    })
  })


const firstDisplay = document.getElementById('first-display')
const editZone = document.getElementById("edit-id")
const addForm = document.getElementById("add-form")


const displayCtrl = (arr) => {
  
    while (firstDisplay.childNodes.length > 0) {
        firstDisplay.removeChild(firstDisplay.lastChild)
    }
    for( let i = 0; i < arr.length; i++){
        displayName(arr[i])
    }
}


function displayName(nam) {
  console.log(`DM`, nam.id)


  let namContainer = document.createElement("div")
  namContainer.className = "nam-container"
  namContainer.innerHTML = `<h3> ID: </h3> <p>${nam.id}</p>
  <h3> Name:</h3> <p>${nam.name}</p>
  <h3> Age:</h3> <p> ${nam.age}</p>
  <button id='edit-id-${nam.id}'>Edit</button>
  <button id='delete-id-${nam.id}'>Delete</button>

 `

 firstDisplay.appendChild(namContainer)



  document.getElementById(`edit-id-${nam.id}`).addEventListener("click", e => {
    editName(namContainer)
  })



  console.log(document.getElementById(`delete-id-${nam.id}`))
  document.getElementById(`delete-id-${nam.id}`).addEventListener("click", e => {
    console.log('event listener')
    deleteName(nam.id)
  })

}

const getNames = () => {
    axios.get(`http://localhost:4000/api/name/`)
        .then(res => {
            displayCtrl(res.data)
        })
        .catch(err => console.log(err))
}

const addName = e => {
    e.preventDefault()

    const newName = {
      name: document.getElementById("new-name").value,
      age: document.getElementById("new-age").value
    }
    axios
        .post(`http://localhost:4000/api/name/`, newName)
        .then(res => {
            displayCtrl(res.data)
        })
        .catch(err => console.log(err))

  document.getElementById("new-name").value,
  document.getElementById("new-age").value
}
addForm.addEventListener("submit", addName)

const editName = nam => {
  console.log('bam')
  const editForm = document.createElement('form')
  editForm.className = 'edit-form'
  editForm.innerHTML = `
     <input id="new-name" placeholder="name" class="form-input value="${nam.name}"/>
     <input id="new-age" placeholder="age" class="form-input" value="${nam.age}"/>
     <button> edited Submit</button>
  `
  editZone.appendChild(editForm)

  editForm.addEventListener("submit", e => {
    e.preventDefault()

    let updates = {
      name: document.getElementById("name-input").value,
      age: document.getElementById("age-input").value
    }

    axios
    .put(`http://localhost:4000/api/name/${nam.id}`, updates)
    .then(res => {
        displayCtrl(res.data)
    })
    .catch(err => console.log(err))
  })
}


const deleteName = id => {
  console.log('throwing hands')
  axios
  .delete(`http://localhost:4000/api/name/${id}`)
  .then(res => {
    console.log(res)
    displayCtrl(res.data)
  })
  .catch(err => console.log(err))
}

getNames()