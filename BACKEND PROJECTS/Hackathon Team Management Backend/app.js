const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sivaganga:22youmewe22@cluster0.v60twit.mongodb.net/coursedb").then(
    () =>{
        console.log("mongodb connected")
    }
).catch(
    (error) =>{
        console.log(error)
    }
)
const HackathonTeam=mongoose.model("HackathonTeam",new mongoose.Schema(
    {

        TeamID: String,
        TeamName: String,
        TeamLeaderName: String,
        LeaderEmail: String,
        LeaderPhone: String,
        CollegeName: String,
        NumberofMembers: String

    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/view-all-teams", async(req, res) => {
    const team=await HackathonTeam.find()
    res.json(team)
})
app.post("/add-team", async (req, res) => {
   await HackathonTeam.create(req.body)
    res.json({"status": "success"})
})
app.listen(5000, () => {
    console.log("server started")
})