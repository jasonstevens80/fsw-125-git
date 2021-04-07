const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
​
​
const bounties = [
    
    {fName: "Quinlan", lName: "Vos", isAlive: true, number: 10, type: "Jedi", _id: uuidv4()},
    {fName: "Mace", lName: "Windu", isAlive: true, number: 20, type: "Jedi", _id: uuidv4()},
    {fName: "Plo", lName: "Koon", isAlive: true, number: 50, type: "Jedi", _id: uuidv4()},
    {fName: "Anakin", lName: "Skywalker", isAlive: true, number: 100, type: "Jedi", _id: uuidv4()}
]
​
​
bountyRouter.route("/")
​
    .get((req, res) => {
        res.send(bounties)
    })
​
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`You added ${newBounty.fName } to the database!`)
    })
​
    bountyRouter.get("/:bountyID", (req, res, next) => {
        const bountyID = req.params.bountyID
        const foundBounty = bounties.find(bounty => bounty._id === bountyID)
        if(!foundBounty){
          const error = new Error(`The item with id ${bountyID} was not found.`)
          res.status(500)
          return next(error)
        }
        return res.status(200).send(foundBounty)
      })
module.exports = bountyRouter