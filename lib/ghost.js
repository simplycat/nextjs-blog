import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: "https://cybersec-cat.ghost.io",
  key: "f306956bfbd5a22f4a1c9be5a4",
  version: "v3"
});

export async function getAllPosts() {
	const posts = await api.posts.browse({ limit: 'all' })
	return posts
}

export async function getPostBySlug(slug) {
  const post = await api.posts.read(
    { slug }, 
    { formats: ['html'], include: 'tags' }
  );
  return post
}

export async function getAllTags() {
  const tags = await api.tags.browse({ limit: 'all' })
  return tags
}

export async function getAllPostsByTagSlug(slug) {
  const posts = await api.posts.browse({
    limit: 'all',
    filter: `tag:${slug}`
  })
  return posts
}

export async function getTagBySlug(slug) {
  const tag = await api.tags.read(
    { slug }, 
    { include: 'count.posts' }
  );
  return tag
}