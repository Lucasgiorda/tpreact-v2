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
        if(contraseña==="empanada"){
            document.body.classList.add("empanada");
        }
        console.log(admin);
    }
    return(
        <div className="admin"> 
        <form action="" onSubmit={iniciar}>
            <h3 className="AdminPasswordTittle">Ingresar contraseña para admin</h3>
            <input type="text" className="InputPasswordAdmin" placeholder="Contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
            <button className="AdminButton1">Iniciar sesion</button>
        </form>
        <button className="AdminButton1" onClick={cerrar}>Cerrar sesion</button>
        <Link className="AdminButton1" to="/">Volver</Link>
        {admin && <h1>Sos admin</h1> } 
        </div>
    )
}