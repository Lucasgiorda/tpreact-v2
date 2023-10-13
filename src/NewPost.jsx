import React, { useState,useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
function NewPost() {
  const { postId } = useParams();
  console.log(postId);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const [posts, setPost] = useState([]);

  useEffect(() => {
    {/*recupera info de post y lo pone
  sin esto en volver a inicio se borra todo*/}
    let PostsGuardados = JSON.parse(localStorage.getItem('posts'));
    if (PostsGuardados) setPost(PostsGuardados);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea un nuevo objeto de publicación
    const nuevaCosa = {
      id: Date.now(), // Genera un ID único (puedes utilizar otra lógica para generar IDs)
      title: title,
      author: author,
      content: content,
    };
    let postsactualizados = [...posts, nuevaCosa];
    localStorage.setItem('posts', JSON.stringify(postsactualizados));
    // Agrega la nueva publicación a la lista de publicaciones
   
    setPost([...posts, nuevaCosa]);
    // Limpia los campos del formulario
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <div>
      <h2>Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Autor:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Contenido:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Guardar</button>
      </form>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}

export default NewPost;