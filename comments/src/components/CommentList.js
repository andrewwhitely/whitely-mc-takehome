import Comment from './Comment';

const CommentList = ({ data }) => {
  return (
    <div className="comments">
      {data.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            message={comment.message}
            created={comment.created}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
