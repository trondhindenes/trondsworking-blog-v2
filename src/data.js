import sanity from "./sanity";

export async function getPosts(first = 50) {
  let query = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            shortIntro,
            slug,
            publishedAt,
            mainImage,
            categories,
            body
          }[0...${first}]`
  return await sanity.fetch(query)
}

export async function getSinglePost(id) {
  let query = `*[_type == "post" && _id == "${id}"] {
            _id,
            title,
            slug,
            publishedAt,
            mainImage,
            categories,
            body
          }[0]`

  let queryBySlug = `*[_type == "post" && slug.current == "${id}"] {
            _id,
            title,
            slug,
            publishedAt,
            mainImage,
            categories,
            body
          }[0]`
  let result = null
  result = await sanity.fetch(query)
  if (!result) {
    result = await sanity.fetch(queryBySlug)
  }
  return result
}