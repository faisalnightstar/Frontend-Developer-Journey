import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdElement}
            aria-describedby="emailHelp"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            aria-describedby="emailHelp"
            placeholder="how are feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content:
          </label>
          <textarea
            type="text"
            rows={5}
            className="form-control"
            id="body"
            ref={postBodyElement}
            aria-describedby="emailHelp"
            placeholder="tell us more about us."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions:
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            aria-describedby="emailHelp"
            placeholder="Enter reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags:
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            aria-describedby="emailHelp"
            placeholder="Enter your tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
