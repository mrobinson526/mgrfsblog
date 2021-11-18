import * as express from 'express';
import blogsRouter from "./blogs";
import authorsRouter from "./authors";
import tagsRouter from "./tags";

const router = express.Router();

router.use("/blogs", blogsRouter);
router.use("/authors", authorsRouter);
router.use("tags", tagsRouter);

export default router;