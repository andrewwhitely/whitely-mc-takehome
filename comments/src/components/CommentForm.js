import { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [, setError] = useState(false);

  const handleSubmit = (e) => {
    setName('');
    setMessage('');
  };

  const submitMessage = (name, message) => {
    const data = { name: name, message: message };
    fetch('http://localhost:3001/createComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          setError(error);
        }
      );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="name"> Name</label>
      <input
        className="field"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="write your name here"
      />
      <textarea
        placeholder="write your comment here"
        name="message"
        value={message}
        className="field"
        cols="30"
        rows="6"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <hr />
      <button className="field" onClick={() => submitMessage(name, message)}>
        leave a comment
      </button>
      <hr />
    </form>
  );
};

export default CommentForm;
