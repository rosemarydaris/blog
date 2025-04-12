import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Blog Name:", blogName);
    console.log("Description:", description);
    console.log("Author:", author);

    alert("Blog submitted successfully!");

    // Optionally navigate to dashboard/home
    navigate('/');

    // Reset form
    setBlogName('');
    setDescription('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Name"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          required
        />
        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
