import React from 'react'
import ReactDOM from 'react-dom/client'
import NewPost from './NewPost'
import './index1.css'
import Home from './Home.jsx'
import PostDetail from './Post';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import Admin from './Admin'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/*<React.StrictMode> solo muestra problemas no le des bola xd*/}
    <BrowserRouter>
    {/*<BrowserRouter> habilitas la capacidad de manejar rutas y URL en tu aplicación de React.
    basicamente esta para que lo de abajo funke*/}
      <Routes>
        {/*<Routes> se utiliza para definir las rutas y las correspondientes 
        representaciones de componentes en tu aplicación.
        usa exacto por que sino se ejecutaran varios al mismo tiempo si coincide un signo de caracter ejemplo /*/}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/new-post' element={<NewPost />} />
        {/*los : son un parametro que este es tomado por useparams en post
        tambien no tiene exact por que es una url dinamica osea que depende de una variable */}
        <Route path="/post/:postId" element={<PostDetail />} /> {/* Ruta dinámica con parámetro postId */}
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
