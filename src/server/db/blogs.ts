import { Query } from "./index";

const all = () => Query("SELECT blogs.id, blogs.title, blogs.content, blogs.authorid, blogs._created, authors.name, authors.email FROM blogs JOIN authors on blogs.authorid = authors.id");

const one = (id: string) => Query("SELECT blogs.id, blogs.title, blogs.content, blogs.authorid, blogs._created, authors.name, authors.email FROM blogs JOIN authors on blogs.id = authors.id WHERE blogs.authorid = ?", [id]);

const deleteOne = (id: string) => Query("DELETE FROM blogs WHERE id = ?", [id]);

const insert = (title: string, content: string) => Query("INSERT INTO blogs (title, content, id) VALUES (?, ?, 0), [title, content, id]");

const edit = (title: string, content: string, id: string) => Query("UPDATE blogs SET (title, content) = (?, ?) WHERE blogs.id = ?", [title, content, id])

export default {
    all,
    one,
    deleteOne,
    insert,
    edit
}