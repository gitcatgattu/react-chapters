import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import {useLoaderData} from "react-router-dom"
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  // const { postList} = useContext(PostListData);
 const postList=useLoaderData()

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
      {/* //even the postList is empyty there will be no mapping */}
    </>
  );
};
export const postLoader=()=>{
  return    fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    return data.posts
    // addInitialPosts(data.posts);
    // setFetching(false);
  });
}
export default PostList;
