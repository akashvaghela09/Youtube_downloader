const express = require("express")
const ytdl = require("ytdl-core")
const app = express()

app.use(express.json())

app.get("/", function(req, res){
    res.sendFile(__dirname + "../Components/index.html")
})

app.get("/videoinfo", async function(req, res){
    const videoURL = req.query.videoURL
    const info = await ytdl.getInfo(videoURL)
    res.status(200).json(info)
})

app.listen(5000)