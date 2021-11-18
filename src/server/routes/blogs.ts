import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const dbRes = await db.blogs.all();

        res.json(dbRes.reverse());
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get("/:blogid", async (req, res, next) => {
    try {
        const blogid = req.params.blogid;

        const dbRes = await db.blogs.one(blogid);

        res.json(dbRes[0]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.delete("/:blogid", async (req, res, next) => {
    try {
        const blogid = req.params.blogid;

        const dbRes = await db.blogs.deleteOne(blogid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const authorid = req.body.authorid;
        const name = req.body.name;
        const title = req.body.title;
        const content = req.body.content;

        const dbRes = await db.blogs.insert(authorid, name, title, content);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.put("/:blogid", async (req, res, next) => {
    try {
        const blogid = req.params.blogid;
        const title = req.body.title;
        const content = req.body.content;

        const dbRes = await db.blogs.edit(title, content, blogid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;

