const { log } = console;
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


app.listen(3030, () => {
    log(`server running on port 3030`);
});