import React from "react";
import PostCreate from "./PostCreate.js";
import PostList from "./PostList.js";

const App = () => {
  return (
    <div className='container'>
      <h1>Create Posts</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
