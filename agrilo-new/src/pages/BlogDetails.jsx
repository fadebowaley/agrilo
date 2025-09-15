import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "./Blog"; // Import the posts array directly (if exported from Blog.jsx)

const BlogDetails = () => {
  const { slug } = useParams();

  // Find blog post by slug
  const post = posts.find((b) => b.slug === slug);

  if (!post) {
    return (
      <h2 className="text-center text-red-500 mt-10">Post not found</h2>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">
        {post.date} • {post.author} • {post.comments} comments
      </p>
      <p className="text-lg leading-relaxed">
        {/* Show content if exists, fallback to excerpt */}
        {post.content || post.excerpt}
      </p>
    </div>
  );
};

export default BlogDetails;