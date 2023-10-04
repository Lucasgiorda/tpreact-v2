import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
// Supongamos que tienes una lista de posts como un array de objetos.



function Home() {
  const { postId } = useParams();
  console.log(postId);
  {/*useEffect que recupera la informacion del item posts y se la pone a post con set post*/}
  useEffect(() => {
    let PostsGuardados = JSON.parse(localStorage.getItem('posts'));
    if (PostsGuardados) setPost(PostsGuardados);
  }, []);
  
  const [postss,setPost] = useState([]);
  return (
    <div>
      <h2>Lista de Posts</h2>
      {<Link to="/new-post">Nuevo Post</Link>}
      <ul>
        {/*un map que crea cada post usando la info en post*/}
        {postss.map((post) => (
          <div key={post.id}>
          <li >
            <h3>{post.title}</h3>
            <p>Autor: {post.author}</p>
            <p>{post.content}</p>
            {/*link individual de cada pagina 
            usa ruta post y usa el id del post
            para la ruta y este valor mas tarde en post es tomado por useParam*/}
            <Link to={`/post/${post.id}`}>Ver Detalles</Link>
          </li>
          </div>
        ))}
      </ul>
      
    </div>
  );
}

export default Home;