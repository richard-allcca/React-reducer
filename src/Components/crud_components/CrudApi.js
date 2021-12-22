import React, { useEffect, useReducer, useState } from "react";
import { TYPES } from "../../actions/crudActions";
import { helperHttp } from "../../helpers/helperHttp";
import { crudInitialState, curdReducer } from "../../reducers/crudReducer";
// components
import Loader from "../component_aux/Loader";
import Message from "../component_aux/Message";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

export const CrudApi = () => {
  // REDUCER
  // const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(curdReducer, crudInitialState);
  const { db } = state;
  // useState
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helperHttp(); //comentado para evitar el warning de []
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helperHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          // setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          setError(res);
          // setDb(null);
          dispatch({ type: TYPES.NO_DATA });
        }
        setLoading(false);
      });
  }, [url]);

  // =================================================================
  //? CREATE
  // =================================================================
  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        // setDb([...db, res]); // lo que tiene db y le agrega res
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
  };

  // =================================================================
  //? UPDATE
  // =================================================================
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        // let newData = db.map((el) => (el.id === data.id ? data : el));
        // setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
    });
  };

  // =================================================================
  //? DELETE
  // =================================================================
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de Eliminar el ID ${id}?`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          // let newData = db.filter((el) => el.id !== id);
          // setDb(newData); //agregamos contenido filtrando el id del parametro
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // =================================================================
  return (
    <>
      <h2> CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setdataToEdit={setdataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            bgColor="#dc3545"
            msg={`Error ${error.status}: ${error.statusText} `}
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setdataToEdit={setdataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );
};

export default CrudApi;
