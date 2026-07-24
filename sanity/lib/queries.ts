export const postsQuery = `
  *[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "excerpt": pt::text(body)[0...160]
  }
`;