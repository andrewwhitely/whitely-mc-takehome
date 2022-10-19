const Comment = (data) => {
  return (
    <div className="comment-box">
      <div className="message">
        <p>{data.message}</p>
      </div>
      <div className="author">
        <p>
          {data.name} on {data.created}
        </p>
      </div>
    </div>
  );
};

export default Comment;
