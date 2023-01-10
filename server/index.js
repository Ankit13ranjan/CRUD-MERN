import express from "express";

const app = express();
import cors from 'cors';
const PORT = 8000;
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',Routes);


Connection();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})