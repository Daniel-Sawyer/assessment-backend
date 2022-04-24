const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')
const ctrlName = require('./namcontroller')


app.get("/api/compliment", ctrl.getCompliments)
app.get("/api/fortune",ctrl.getFortune)

app.get('/api/name', ctrlName.getName)
app.post('/api/name', ctrlName.addName)
app.put('/api/name/:id', ctrlName.updateName)
app.delete('/api/name/:id', ctrlName.deleteName)


app.listen(4000, () => console.log("Server running on 4000"));

