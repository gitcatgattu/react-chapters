import { act, createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts:()=>{},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type==='ADD_POST'){
    newPostList =[action.payload,...currPostList,]
  }
  else if(action.type==="ADD_INITIAL_POSTS"){
    newPostList=action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type:"ADD_POST",
    payload:{
      id: Date.now(),
    title: postTitle,
    body: postBody,
    reactions,
    userId,
    tags ,

    }
    })
  };


  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };


  const addInitialPosts = (posts) => {
    dispatchPostList({
      type:"ADD_INITIAL_POSTS",
    payload:{
     posts,

    }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost,addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends, I am going to Mumbai for my vacations, Hope to enjoy a lot, Peace Out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Going to Bangalore the silicon city of India",
    body: "Hi friends, I am going to Mumbai for my vacations, Hope to find my soulmate",
    reactions: 200,
    userId: "user-12",
    tags: ["graduating", "unbelievable", "enjoying"],
  },
];
export default PostListProvider;
