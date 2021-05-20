import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
