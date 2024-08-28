import { useRef } from "react";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userIdElement = useRef();
  const posttitleElement = useRef();
  const postbodyElement = useRef();
  const commentsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const posttitle = posttitleElement.current.value;

    const postbody = postbodyElement.current.value;
    const comments = commentsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);
    console.log("${userId}");
    addPost(userId, posttitle, postbody, comments, tags);
  };
  return (
    <>
      <form className="createpost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            aria-describedby="description"
            placeholder="Fill your user Id"
          />
        </div>
        <div className="mb-3">
          <label for="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={posttitleElement}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are your feeling today"
          />
        </div>
        <div className="mb-3">
          <label for="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postbodyElement}
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label for="reactions" className="form-label">
            People
          </label>
          <input
            type="text"
            ref={commentsElement}
            className="form-control"
            id="reactions"
            aria-describedby="description"
            placeholder="ow many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label for="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            aria-describedby="description"
            placeholder="put tags with space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
