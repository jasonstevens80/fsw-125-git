const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const bounties = [
    
    {fName: "Quinlan", lName: "Vos", isAlive: true, number: 10, type: "Jedi", _id: uuidv4()},
    {fName: "Mace", lName: "Windu", isAlive: true, number: 20, type: "Jedi", _id: uuidv4()},
    {fName: "Plo", lName: "Koon", isAlive: true, number: 50, type: "Jedi", _id: uuidv4()},
    {fName: "Anakin", lName: "Skywalker", isAlive: true, number: 100, type: "Jedi", _id: uuidv4()}
]


bountyRouter.route("/")

    .get((req, res) => {
        res.send(bounties)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`You added ${newBounty.fName } to the database!`)
    })


module.exports = bountyRouter