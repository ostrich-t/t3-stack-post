import { type NextPage } from "next";
import { Layout } from "~/components/Layout";
import { Top } from "~/components/templates/Top";
import { createPostListData } from "~/model/post";

const Home: NextPage = () => {
  return (
    <Layout>
      <Top posts={createPostListData(10)} />
    </Layout>
  );
};

export default Home;
