import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Compose: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');;
    const [content, setContent] = useState('');

    const handlePostBlog =  async () => {
        const res = await fetch('/api/authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        const authorInsert = await res.json();

        await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, authorid: authorInsert.insertId })
        })
    }

    return (
        <div> 
            <div className="form-group">
                <label htmlFor="name-input">Author Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    aria-describedby="nameHelp"
                    placeholder="Enter your handle"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <textarea
                name="content-input"
                id="content-input"
                cols={30}
                rows={10}
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-primary" onClick={() => handlePostBlog()}>Submit</button>
        </div>
    )
}

export default Compose