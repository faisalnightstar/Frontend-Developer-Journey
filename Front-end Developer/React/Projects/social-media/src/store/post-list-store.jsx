import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi there! I am going to Mumbai for a vacation. I am going with my friends and will be back soon.",
    reactions: 20,
    userId: "faisalnightstar",
    tags: ["vacation", "mumbai", "friends", "travel"],
  },
  {
    id: 2,
    title: "Going to",
    body: "Hi there! I am going for sex to Mumbai for a vacation. I am going with my friends and will be back soon.",
    reactions: 50,
    userId: "faisalnight",
    tags: ["vacation", "mumbai", "friends", "travel"],
  },
  {
    id: 3,
    title: "Going",
    body: "Hi there! I am going to Mumbai for a vacation. I am going with my friends and will be back soon.",
    reactions: 450,
    userId: "faisal",
    tags: ["vacation", "mumbai", "friends", "travel"],
  },
  {
    id: 4,
    title: "Going to Mumbai",
    body: "Hi there! I am going to Mumbai for a vacation. I am going with my friends and will be back soon.",
    reactions: 520,
    userId: "fixz",
    tags: ["vacation", "mumbai", "friends", "travel"],
  },
];

export default PostListProvider;
