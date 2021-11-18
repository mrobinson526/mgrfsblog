import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/:authorid', async (req, res, next) => {
    try {
        const authorid = req.params.authorid;

        const dbRes = await db.authors.one(authorid);

        res.json(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;

        const dbRes = await db.authors.insert(name, email);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;