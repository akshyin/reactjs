import { useContext } from "react";
import { useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addinitialPosts } = useContext(PostListData);
  const [datafetched, setDatafetched] = useState(false);
  if (!datafetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialPosts(data.posts);
      });
    setDatafetched(true);
  }

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
