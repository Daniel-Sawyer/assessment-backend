const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {getNames,deleteNames,createHouse} =require('./controller')

app.get(`/api/name/`,getNames)







app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req,res) => {
  const fortunes = [`your find love in strange places`, 
  "you have untold riches on your way",
 "you good", "family will guide you", "finding you way is soon to come"
];


let randomIndex = Math.floor(Math.random() * fortunes.length)
let randomFortune = fortunes[randomIndex]

res.status(200).send(randomFortune)
})


app.listen(4000, () => console.log("Server running on 4000"));

