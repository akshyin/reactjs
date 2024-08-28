import { MdDeleteSweep } from "react-icons/md";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          <button type="button" class="btn btn-primary">
            {post.title}

            <span className="badge badge-light">
              This post is reacted by {post.reactions} people
            </span>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteSweep />
          </button>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag ">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
