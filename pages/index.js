import PostItem from "../components/posts/PostItem"
import Layout from "../components/layout/Layout";
import PostContainer from "../components/posts/PostContiner";
function HomePage(props) {
  return (<Layout>
       <PostContainer>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
       </PostContainer>
  </Layout>);
}

export default HomePage;
