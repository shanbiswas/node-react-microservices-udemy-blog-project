import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    const status = comment.status;

    let content;
    switch (status) {
      case 'pending':
        content = 'This comment is awaiting moderation';
        break;

      case 'approved':
        content = comment.content;
        break;

      case 'rejected':
        content = 'This comment is rejected';
        break;
    
      default:
        content = 'Some error occured while fetching this comment'
        break;
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
