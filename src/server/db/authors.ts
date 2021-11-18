import { Query } from "./index";

const one = (authorid: string) => Query("SELECT * FROM authors WHERE authors.id = ?", [authorid]);

const insert = (name: string, email: string) => Query(`
    insert into authors (name, email)
    values (?, ?)
`, [name, email]);

export default {
    one,
    insert
}