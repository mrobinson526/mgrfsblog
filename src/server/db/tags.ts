import { Query } from "./index";

const one = (tagid: string) => Query("SELECT * FROM tags WHERE tags.id = ?", [tagid]);

const insert = (name: string) => Query(`
    insert into tags (name)
    values (?)
`, [name]);

export default {
    one,
    insert
}