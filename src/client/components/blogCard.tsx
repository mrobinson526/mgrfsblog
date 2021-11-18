import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props: IBlogCardProps) => {
    return (
        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">@{props.blog.title}</h6>
                <p className="card-text">{props.blog.content}</p>
                <p className="card-text">{props.blog._created}</p>
            </div>
            <div>
                <Link to={`/admin/${props.blog.id}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
            </div>
        </div>
    )
}

interface IBlogCardProps {
    blog: {
        id: string
        title: string,
        content: string,
        _created: string
    }
}

export default BlogCard