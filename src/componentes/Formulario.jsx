import React, { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ agregarTodos }) => {
  const initialState = {
    nombre: " ",
    Descripcion: " ",
    estado: "pendiente",
    prioridad: false,
  };

  const [todo, setTodo] = useState(initialState);

  const { nombre, Descripcion, estado, prioridad } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "No dejes el Nombre en blanco",
        icon: "error",
      });
      return;
    }
    if (!Descripcion.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "No dejes la Descripcion en blanco",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Exito!",
      text: "Tarea agregada",
      icon: "success",
    });

    agregarTodos({
      nombre: nombre,
      Descripcion: Descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad: prioridad,
      id: uuidv4(),
    });
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setTodo((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      <h3>Agregar TODO</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Ingrese el nombre de la Tarea"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder=""
          name="Descripcion"
          value={Descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={prioridad}
            id="flexCheckIndeterminate"
            name="prioridad"
            onChange={handleChange}
          />
          <label className="" htmlFor="flexCheckIndeterminate">
            Indeterminate checkbox
          </label>
        </div>
        <button type="submit" className="btn btn-primary ">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
