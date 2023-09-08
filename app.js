const { log } = console;
import cors from "cors";
import express, { json } from "express";

const app = express();
app.use(cors());
app.use(json());

app.get("/movies", (req, res) => {
    res.json("here are movies for you.");
})

app.listen(3030, () => {
    log(`server running on port 3030`);
});