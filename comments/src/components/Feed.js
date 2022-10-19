import { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Feed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const [comments, setComments] = useState(null);

  const getComments = () => {
    fetch('http://localhost:3001/getComments')
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setComments(res.reverse());
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  // used to load comments
  useEffect(() => {
    getComments();
  }, []);

  // refresh new comments
  useEffect(() => {
    const interval = setInterval(() => {
      getComments();
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Comments</p>
      </header>
      <div className="feed">
        {isLoaded ? (
          <>
            {error ? (
              <p>{error}</p>
            ) : (
              <>
                <CommentForm />
                <CommentList data={comments} />
              </>
            )}
          </>
        ) : (
          'Loading content - please wait'
        )}
      </div>

      <footer className="App-footer">Andrew Whitely</footer>
    </div>
  );
};

export default Feed;
