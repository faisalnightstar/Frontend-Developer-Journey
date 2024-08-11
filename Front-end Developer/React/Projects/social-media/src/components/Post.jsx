import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            className="badge rounded-pill text-bg-primary hashtag"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <hr />
        <span aria-hidden="true" className="badge text-bg-primary reactions">
          <AiFillLike />
          {post.reactions}
        </span>
      </div>
    </div>
  );
};

export default Post;