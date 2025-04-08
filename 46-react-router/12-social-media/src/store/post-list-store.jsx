import {  createContext, useEffect, useReducer, useState } from "react";
export const PostList = createContext({
  postList: [],
  fetching:false,
  addPost: () => {},
  deletePost: () => {},
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
  const [fetching, setFetching] = useState(false);
  
  const addPost = (post) => {
    console.log('add post called',post)
    dispatchPostList({
      type:"ADD_POST",
    payload:post,

    
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




  useEffect(() => {
    setFetching(true);
    //pro level
    const controller =new AbortController()
    const signal =controller.signal;
    // console.log("fetch started");
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        console.log("fetch returnd");
      });
    // console.log("fetch ended");
    return () => {
      // console.log("cleaning up useEffect aborted");
      controller.abort() 
    };
  }, []);




  return (
    <PostList.Provider value={{ postList, fetching, addPost,addInitialPosts, deletePost }}>
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
