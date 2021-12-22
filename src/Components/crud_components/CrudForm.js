import React, { useState, useEffect } from "react";

const initialForm = {
  // datos iniciales de los input
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setdataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  // ==============================================================
  const handleChange = (e) => {
    //? Control de cambios
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================================================
  const handleSubmit = (e) => {
    //? Control de Formulario
    e.preventDefault();

    if (!form.name || !form.constellation) {
      //valida la variable de estado form
      alert("Datos imcompletos");
      return;
    }

    if (form.id === null) {
      //valida id para crear o actualizar
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  // ==============================================================
  const handleReset = (e) => {
    //? Reseteo de Formulario
    setForm(initialForm); // resetea la variable de estado local
    setdataToEdit(null); // resetea la variable de estado en CrudForm
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
