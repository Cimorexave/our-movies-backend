const { log } = console;

import cors from "cors";
import express, { json } from "express";
import movies from "./routes/movies.js";
import { config } from "dotenv";
import Database from "./database/database.js";
config();

const database = new Database(process.env.DB_URL);
// log(database);


const app = express();
app.use(cors());
app.use(json());

const moviesList = await database.model.find();
log(moviesList.length);

// const newMovie = {
//     name: "test-movie",
//     genres: ["action", "comedy"],
// }
// database.post(newMovie);

// endpoints
// app.get("/movies", (req, res) => {
//     res.json("here are movies for you.");
// })
app.use("/movies/", movies);


app.listen(process.env.SERVER_PORT, () => {
    log(`server running on port 3030...`);
});


export { database };