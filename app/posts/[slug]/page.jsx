import { getPostBySlug } from "@/app/api/posts";
import React from "react";

const SinglePost = async ({ params }) => {
  const { slug } = params;
  console.log("slug", slug);
  const post = await getPostBySlug(slug);
  console.log(post.steps);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-4 flex flex-col text-center">
        <h1 className="mb-10 text-9xl">{post.slug}</h1>
        <h1 className="text-5xl">{post.description}</h1>
        <p className="text-left text-3xl underline"> List of tasks</p>
        <ul className="text-left">
          {post.steps.map((item) => (
            <li>. {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SinglePost;
