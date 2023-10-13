import { useEffect, useState } from "react"
import Home from "./Home";
import { Link } from "react-router-dom";

export default function Admin(){
    const [contraseña,setContraseña] = useState(``);
    const [admin,setAdmin] = useState(false);
    useEffect(()=>{
        {/*verifica que modo admin este activado*/}
        let admin2 = JSON.parse(localStorage.getItem('admin'));
        setAdmin(admin2); 
    },[]);
    function cerrar(e){
        {/*elimina true de admin*/}
        e.preventDefault();
        const admc=false;
        setAdmin(admc);
        localStorage.setItem('admin', JSON.stringify(admc));
    }
    function iniciar(e){
        {/*verifica que contraseña este*/}
        e.preventDefault();
        if(contraseña==="1234"){
            const admt=true;
            setAdmin(admt);
            localStorage.setItem('admin', JSON.stringify(admt));
        }
        console.log(admin);
    }
    return(
        <> 
        <form action="" onSubmit={iniciar}>
            <input type="text" placeholder="nombre"/>
            <input type="text" placeholder="contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
            <button>iniciar sesion</button>
        </form>
        <button onClick={cerrar}>cerrar sesion</button>
        <Link to="/">volver</Link>
        {admin && <h1>sos admin capo</h1> } 
        </>
    )
}