import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Compose from './Compose';

const Home = (props: IHomeProps) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const res = await fetch("/api/blogs");
        const blogs = await res.json();
        setBlogs(blogs);
    }

    return (
        <div className="container">
            <div className="row">
                <Compose />
            </div>
            <div className="row">
            {blogs.map(blog => <BlogCard key={blog.id} blog={blog}/>) }
            </div>
        </div>
    )
}

interface IHomeProps { }

export default Home