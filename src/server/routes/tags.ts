import * as express from "express";
import db from "../db";

const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const name = req.body.name;
        

        const dbRes = await db.tags.insert(name);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;