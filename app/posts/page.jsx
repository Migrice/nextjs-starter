import React from "react";
import { getAllPosts } from "../api/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const page = async () => {
  const posts = await getAllPosts();
  return (
    <div className="mx-10 mt-10 flex gap-3">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`}>
          <div className="flex h-70 w-70 flex-col items-center justify-center gap-2 bg-green-400 text-white">
            <h1 className="text-2xl font-bold">{post.slug}</h1>
            <p>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
