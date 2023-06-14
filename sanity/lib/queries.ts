import { groq } from "next-sanity";

export const getAllPosts = groq`
*[_type == "post"] {
    ...,
    author->,
    categories[]->
} | order(publishedAt desc)
`;

export const getAllProject = groq`
*[_type == "project"] {
    ...,
    projectState->,
    categories[]->,
    techno[]->
} | order(publishedAt desc)`;

export const getAllSocialMedia = groq`
*[_type == "socialMedia"] {
    ...,
} `;
