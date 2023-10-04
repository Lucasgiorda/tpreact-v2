import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { postId } = useParams(); // Obtiene el postId de los parámetros de la URL
  const [post, setPost] = useState({}); // Estado para almacenar el post individual
  const [comen, setComen] = useState([]); // Estado para almacenar el post individual
  const [comenN, setComenN] = useState({}); // Estado para almacenar el post individual

  useEffect(() => {
    // Obtén el contenido del post correspondiente al postId
    let PostsGuardados = JSON.parse(localStorage.getItem('posts'));
    if (PostsGuardados) {
        {/* post encontrado */}
      const postEncontrado = PostsGuardados.find((p) => p.id === parseInt(postId));
      setPost(postEncontrado || {}); // Si no se encuentra el post, establece un objeto vacío
    }
    {/* busca comntarios que tengan el mismo id que la pagina y los agrega a comen*/}
    let comenGuardadas = JSON.parse(localStorage.getItem(`comen${postId}`));
    if (comenGuardadas) setComen(comenGuardadas);
    setComenN(' ');
  }, [postId]);

  function comento(e){
    {/* form cuando se envia agreaga a nuevo comentario lo que ya tienen y el nuevo comen */}
    e.preventDefault();
    let nuevocomentario = [...comen,comenN];
    {/* se utiliza un let por que sino no lo registra */}
    setComen(nuevocomentario);
    {/* lo sube a item con el post id para poder localizarlo desoues */}
    localStorage.setItem(`comen${postId}`, JSON.stringify(nuevocomentario));
    setComenN('');
  }
  return (
    <>
    <div>
      {/* carga el post con la iformacion del useEffect*/}
      <h2>Detalles del Post</h2>
      <h3>{post.title}</h3>
      <p>Autor: {post.author}</p>
      <p>{post.content}</p>
    </div>
    <div>
      <h3>Comentaros</h3>
      <form action="" onSubmit={comento}>
        <input type="text" value={comenN} onChange={(e)=>setComenN(e.target.value)} />
      </form>
      <ul>
        {/* map que carga los comentarios modo lista */}
        {comen.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
        <Link to="/">Volver al Inicio</Link>
      </ul>
    </div>
    </>
  );
}

export default PostDetail;
