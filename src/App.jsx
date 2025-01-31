import { useState, useRef } from "react";
import "./App.css";

// El proyecto hace uso del localStorage para añadir los usuarios y guardarlos en memoria.

function App() {
  // Obtenemos el los usuarios del localStorage, desde mi punto de vista seria mejor ponerlo dentro de un useEffect para manejarlo cuando se inicie la pagina o la ruta 

  const [usuarios, setUsuarios] = useState(
    JSON.parse(localStorage.getItem("usuariosRegistrados")) || []
  );

  // Manejo de los valores con uso de useRef para hacerlo mas sencillo

  const emailRef = useRef();
  const nameRef = useRef();
  // Evento para guardar los datos que se podria mejorar para los usuarios curiosos
  const handleClick = () => {
    const nombre = emailRef.current.value;
    const email = emailRef.current.value;

    const dataUser = {
      nombre: nombre,
      email: email,
    };
    // Actualizamos los datos anteriores con los datos del estado usuarios y sumamos o añadimos el objecto dataUser para que se añada al array
    const updateUsers = [...usuarios, dataUser];
    setUsuarios(updateUsers);
    // Transformamos el array de usuarios actualizados a string para poder manejarlos en el localStorage
    localStorage.setItem("usuariosRegistrados", JSON.stringify(updateUsers));
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Registro usuario</legend>

        <label className="fieldset-label">Email</label>
        <input
          type="text"
          className="input"
          placeholder="Email"
          ref={emailRef}
        />

        <label className="fieldset-label">Nombre</label>
        <input
          type="text"
          className="input"
          placeholder="Nombre"
          ref={nameRef}
        />

        <button className="btn btn-neutral mt-4" onClick={handleClick}>
          Registrarse
        </button>
      </fieldset>
      <div className="grid grid-cols-9 gap-3">
        {usuarios.map((item) => (
          <div className="p-8 bg-base-200 shadow-md">
            <h3>Name:{item.nombre}</h3>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
