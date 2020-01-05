import sanity from "./sanity";

export async function getPosts(first = 50) {
    let query = `*[_type == "post"] {
            _id,
            title,
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
    return await sanity.fetch(query)
}