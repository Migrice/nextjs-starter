const posts = require("@/app/data/posts.json");

export async function getPostBySlug(slug) {
  const post = posts.find((item) => item.slug === slug);

  if (post) {
    return post;
  } else {
    throw `A post with slug ${slug} does not exists`;
  }
}

export async function getAllPosts() {
  return posts;
}
