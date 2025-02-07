"use client";

import CommentSection from '@/components/commentSection';
import { blogs } from '@/utlis/blog';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the blog synchronously
  const blog = blogs.find((blog) => blog.id === slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
      <div className="container mx-auto px-6 mt-12 py-12">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="mb-8">Published on {blog.publishDate}</p>
        <div className="prose prose-lg">
          <p>{blog.content}</p>
        </div>
      </div>
      <CommentSection />
    </>
  );
}
