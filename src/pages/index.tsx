import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "~/components/Layout";
import { Top } from "~/components/templates/Top";
import { type Post, convertPost } from "~/model/post";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const take = 50;
  const [skip, setSkip] = useState(0);
  const { data, isSuccess } = api.post.getPosts.useQuery({ take, skip });

  const [posts, setPosts] = useState<Post[]>([]);

  console.log(posts);
  useEffect(() => {
    if (isSuccess) {
      const convertedData = data?.map((post) => convertPost(post)) ?? [];
      setPosts((prev) => [...prev, ...convertedData]);
      setSkip((prev) => prev + take);
    }
  }, [data, isSuccess, setSkip]);

  return (
    <Layout>
      <Top posts={posts} />
    </Layout>
  );
};

export default Home;
