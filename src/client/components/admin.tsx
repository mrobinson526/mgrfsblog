import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Admin = (props: IAdminProps) => {
    const [blog, setBlog] = useState<IBlog>({
        id: null,
        title: null,
        content: null,
        authorid: null,
        _created: null
    });
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { blogid } = useParams<{ blogid: string }>();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/blogs/${blogid}`);
            const blog = await res.json();
            setBlog(blog);
            setTitle(blog.title);
            setContent(blog.content);
        })()
    }, []);

    const handleContentChange = (content: string) => setContent(content);
    const handleTitleChange = (content: string) => setTitle(title);

    const handleDeleteBlog = async (id: string) => {
        await fetch(`/api/blogs/${id}`, {
            method: "DELETE"
        });

        history.push("/");
    }

    const handleUpdateBlog = async (blogid: string, title: string, content: string) => {
        await fetch(`/api/blogs/${blogid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        });

        history.push("/");
    }

    return (
        <>
            <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">@{blog.title}</h6>
                    <input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)}></input>
                    <input type="text" value={content} onChange={(e) => handleContentChange(e.target.value)}></input>
                    <p className="card-text">{blog._created}</p>
                </div>
                <div>
                    <i className="trash" onClick={() => handleDeleteBlog(blog.id)}></i>
                    <button className="btn btn-sm btn-dark" onClick={() => handleUpdateBlog(blog.id, title, content)}>Save Edit</button>
                </div>
            </div>
        </>
    )
}

interface IAdminProps { }

interface IBlog {
    id: string | null
    title: string | null,
    content: string | null,
    authorid: string | null,
    _created: string | null
}

export default Admin