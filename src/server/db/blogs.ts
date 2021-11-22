import { Query } from "./index";

const all = () => Query("SELECT blogs.id, blogs.title, blogs.content, blogs.authorid, blogs._created, authors.name, authors.email FROM blogs JOIN authors on blogs.authorid = authors.id");

const one = (blogid: string) => Query("SELECT blogs.id, blogs.title, blogs.content, blogs.authorid, blogs._created, authors.name, authors.email FROM blogs JOIN authors on blogs.id = authors.id WHERE blogs.authorid = ?", [blogid]);

const deleteOne = (blogid: string) => Query("DELETE FROM blogs WHERE id = ?", [blogid]);

const insert = (authorid: string, title: string, content: string) => Query("INSERT INTO blogs (id, title, content) VALUES (null, ?, ?)", [authorid, title, content]);

const edit = (title: string, content: string, blogid: string) => Query("UPDATE blogs SET (title, content) = (?, ?) WHERE blogs.id = ?", [title, content, blogid])

export default {
    all,
    one,
    deleteOne,
    insert,
    edit
}