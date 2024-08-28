import { createContext } from "react";
import { useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
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
  const deletePost = (postId) => {
    console.log("Delet pos called{postId}");
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi Friend",
    reactions: 1,
    userId: "9",
    tags: ["vaction", "Mumbai"],
  },
  {
    id: "2",
    title: "P to mumbai",
    body: "Hi Frienddd ",
    reactions: 1,
    userId: "12",
    tags: ["gatuat", "Un"],
  },
];
export default PostListProvider;
