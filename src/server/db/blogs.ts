import { Query } from "./index";

const all = () => Query("SELECT blogs.id, blogs.title, blogs.content, blogs.authorid, blogs._created, authors.name, authors.email FROM blogs JOIN authors on blogs.authorid = authors.id");

const one = (blogsid: string) => Query("SELECT blogs.id, blogs.title, blogs.content, blogs.authorid, blogs._created, authors.name FROM blogs JOIN authors on blogs.authorid = authors.id WHERE blogs.id = ?", [blogsid]);

const deleteOne = (blogsid: string) => Query("DELETE FROM blogs WHERE id = ?", [blogsid]);

const insert = (blogid: string, title: string, content: string, authorid: string) => Query("INSERT INTO blogs (authorid, title, content) VALUES (?, ?)", [authorid, title, content]);

const edit = (title: string, content: string, blogid: string) => Query("UPDATE blogs SET (title, content) = (?,?) WHERE blogs.id = ?", [title, content, blogid])

export default {
    all,
    one,
    deleteOne,
    insert,
    edit
}