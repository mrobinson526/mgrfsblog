require("dotenv").config();
import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use("/api", apiRouter);
// app.use((req, res, next) => res.sendFile(__dirname + "/../public/index.html"))

app.listen(3000, () => console.log(`Server listening on port: 3000`));