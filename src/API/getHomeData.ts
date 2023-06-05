import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

const clientFetch = cache(client.fetch.bind(client));

const getAllPosts = groq`
*[_type == "post"] {
    ...,
    author->,
    categories[]->
} | order(publishedAt desc)
`;

const getHomeData = async () => {
  const data = await new Promise<{
    posts: any;
  }>((resolve, reject) => {
    setTimeout(async () => {
      const [posts] = await Promise.allSettled([clientFetch(getAllPosts)]);

      console.log(posts);

      resolve({
        posts: posts.status === "fulfilled" && posts.value,
      });
    }, 2000);
  });

  return data;
};

export default getHomeData;
