import react from 'react';
const CreatePost = () => {
  return (
    <section className="create-post-section">
      <h2>Create a New Post</h2>
      <form>
       <input type= 'file' name='image' accept='image/*' />
       <input type='text' name='title' placeholder='Title' />
         <textarea name='content' placeholder='Content'></textarea>
         <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;