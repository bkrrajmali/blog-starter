import { useEffect, useState } from 'react';
import client from '../api/client';

interface Post {
    id: number;
    title: string;
    body: string;
    author: { name: string };
}

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        client.get('/posts').then((res) => setPosts(res.data));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-6 text-3xl font-bold">Blog Posts</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {posts.map((post) => (
                    <div key={post.id} className="rounded border p-4 shadow-sm">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-gray-600">{post.body}</p>
                        <p className="mt-4 text-sm text-gray-500">By {post.author?.name || 'Unknown'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
