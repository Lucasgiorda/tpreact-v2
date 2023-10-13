import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; 

function PostDetail() {
  const { postId } = useParams(); // Obtiene el postId de los parámetros de la URL
  const [post, setPost] = useState({}); // Estado para almacenar el post individual
  const [comen_Nombre, setCN] = useState(' '); // Estado para almacenar el post individual
  const [comen_P, setCP] = useState(' '); // Estado para almacenar el post individual
  const [comenN, setComenN] = useState([]); // Inicializa comenN como un array vacío


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
    if (comenGuardadas) setComenN(comenGuardadas);
  }, [postId]);

  function comento(e){
    {/* form cuando se envia agreaga a nuevo comentario lo que ya tienen y el nuevo comen */}
    e.preventDefault();
    let nuevoComentario = {
      nombre: comen_Nombre,
      comentario: comen_P,
    };
    // Agrega el nuevo comentario al array de comentarios
    let nuevosComentarios = [...comenN, nuevoComentario];
    {/* se utiliza un let por que sino no lo registra */}
    setComenN(nuevosComentarios);
    {/* lo sube a item con el post id para poder localizarlo desoues */}
    localStorage.setItem(`comen${postId}`, JSON.stringify(nuevosComentarios));
    setCN(''); // Limpia el nombre
    setCP(''); // Limpia el comentario
  }
  return (
    <>
    <div>
      {/* carga el post con la iformacion del useEffect*/}
      <h2>Detalles del Post</h2>
      <h3>{post.title}</h3>
      <p>Autor: {post.author}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
    <div>
      <h3>Comentaros</h3>
      <form action="" onSubmit={comento}>
        <input type="text" value={comen_Nombre} onChange={(e)=>setCN(e.target.value)} />
        <input type="text" value={comen_P} onChange={(e)=>setCP(e.target.value)} />
        <input type="submit" />
      </form>
      <ul>
        {/* map que carga los comentarios modo lista */}
        {comenN.map((c, i) => (<div key={i}>
          <h3 >-{c.nombre} dice:</h3>
          <p>{c.comentario}</p>
          </div>
        ))}
        <Link to="/">Volver al Inicio</Link>
      </ul>
    </div>
    </>
  );
}

export default PostDetail;
