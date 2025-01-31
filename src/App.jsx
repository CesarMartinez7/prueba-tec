import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [usuarios,setUsuarios] = useState(JSON.parse(localStorage.getItem("usuariosRegistrados")) || [])
  const emailRef = useRef()
  const nameRef = useRef()

  const handleClick =() => {
    const nombre = emailRef.current.value
          const email = emailRef.current.value

          const dataUser = {
            nombre: nombre,
            email: email
          }
          
          const updateUsers = [...usuarios,dataUser]
          setUsuarios(updateUsers)
          localStorage.setItem("usuariosRegistrados",JSON.stringify(updateUsers))
          console.log(updateUsers)
          console.log(usuarios)
  }
  
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Registro usuario</legend>

        <label className="fieldset-label">Email</label>
        <input type="text" className="input" placeholder="Email" ref={emailRef} />

        <label className="fieldset-label">Nombre</label>
        <input type="text" className="input" placeholder="Nombre" ref={nameRef} />

        <button className="btn btn-neutral mt-4" onClick={handleClick}>Registrarse</button>
      </fieldset>
      <div className="grid grid-cols-9 gap-3">
      {usuarios.map((item) => (
        <div className="p-8 bg-base-200">
          <h3>Name:{item.nombre}</h3>
          <p>Email: {item.email}</p>
        </div>
      ))}

      </div>
    </div>
  );
}

export default App;
