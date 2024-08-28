import { createContext } from "react";
import { useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addinitialPosts: () => {},
};

export const PostList = createContext({ DEFAULT_CONTEXT });
export const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  if (action.type === "ADD_INITIAL_POSTS") {
    for (let i = 0; i < action.payload.posts.length; i++) {
      let obj = action.payload.posts[i];
      let newpost = {};
      newpost.id = action.payload.posts[i].id;
      newpost.title = action.payload.posts[i].title;
      newpost.body = action.payload.posts[i].body;
      newpost.tags = action.payload.posts[i].tags;
      newpost.reactions = action.payload.posts[i].views;
      newPostList = [newpost, ...newPostList];
    }
  }
  console.log(newPostList);
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = (userId, posttitle, postbody, comments, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reactions: comments,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addinitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    console.log("Delet pos called{postId}");
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addinitialPosts: addinitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
