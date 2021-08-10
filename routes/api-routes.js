const express = require('express');
const router = express.Router();
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()
const { Player, Team } = require('../models');


// Get Teams

router.get('/teams', async (req, res) => {
    try {
        const teams = await Team.findAll(({ include: 'player' }))
        return res.json(teams)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// CREATE new Team

router.post('/teams', async (req, res) => {
    const { name } = req.body
    try {
        const team = await Team.create({ name })
        return res.json(team)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


// GET Players

router.get('/players', async (req, res) => {
    try {
        const players = await Player.findAll()
        return res.json(players)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


// CREATE new Player

router.post('/players', async (req, res) => {
    const { teamId, name, email, amountOwed } = req.body
    try {
        const team = await Team.findOne({ where: { id: teamId } })

        const player = await Player.create({ name, email, amountOwed, teamId: team.id })
        return res.json(player)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// Take and add to value that each player owes
router.put('/players/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    const { amountOwed } = req.body;

    try {
        const player = await Player.findOne({
            where: { uuid }
        })
        player.amountOwed = amountOwed;

        await player.save();
        return res.json()
    } catch (err) {
        console.log(err)
        return res.status(500).json({ err: 'Something went wrong' })
    }
})

router.post("/send_mail", cors(), async (req, res) => {
    let { text } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })
    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "test@test.com",
        subject: "test email",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Christopher</p>
         </div>
    `
    })
})

module.exports = router;