const { log } = console;
import * as express from "express";
import { response, request, Response, Request } from "express";
import * as cors from "cors";
// const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/movies", (req: Request, res: Response) => {
    res.json("here are movies for you.");
})

app.listen(3030, () => {
    log(`server running on port 3030`);
});