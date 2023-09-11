const { log } = console;

import cors from "cors";
import express, { json } from "express";
import movies from "./routes/movies.js";
import { config } from "dotenv";
config();


const app = express();
app.use(cors());
app.use(json());

// endpoints
// app.get("/movies", (req, res) => {
//     res.json("here are movies for you.");
// })
app.use("/movies/", movies);



app.listen(3030, () => {
    log(`server running on port 3030`);
});