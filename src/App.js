import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostPage from "./pages/postPage/PostPage";
import CreatePostPage from "./pages/createPostPage/CreatePostPage";

export default function App() {
  return(
    <div className="App">
      <PostPage/>
      {/* <CreatePostPage/> */}
    </div>
  )
}