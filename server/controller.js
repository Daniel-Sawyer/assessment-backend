
module.exports = {
    getCompliments: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
 
},

   getFortune: (req,res) => {
    const fortunes = [`your find love in strange places`, 
    "you have untold riches on your way",
   "you good", "family will guide you", "finding you way is soon to come"
  ];
  
  
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]
  
  res.status(200).send(randomFortune)

    }
}