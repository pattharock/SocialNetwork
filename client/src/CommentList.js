import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content = "";
    if (comment.status === "pending") {
      content = "This comment is awaiting moderaiton";
    }
    if (comment.status === "accepted") {
      content = comment.content;
    }
    if (comment.status === "rejected") {
      content = "This comment is reject due to violation of Public Policy";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
