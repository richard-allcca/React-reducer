# React Reducer

- Aqui encontraras conceptos generales y  3 ejemplos practicos

  - [useReducer](#usereducer)
  - [reducer](#reducer)
  - [dispatch](#dispatch)
  - [state](#state)

1. Carro de compras con reducer
2. Crud con Reducer, Importante utiliza json-server como DB sin esto falla la carga de datos
3. Contador simple y mejorado
  
## useReducer

- reemplaza a "useState", recibe 3 parámetros

  1. "state" => el estado anterior
  2. "initialState" => valor inicial debe ser un objeto que tenga la variable de estado
  3. "init" => función que modifica el estado inicial (es opcional poco usado)

~~~ js
  useReducer(state,initialState,init)
~~~

## reducer

- función reductora, recibe 2 parámetros

  1. state: el estado anterior
  2. actions: Objeto que tiene 2 propiedades (los recibe del "dispatch")
     1. actions.type, el tipo de acción que va ejecutar (función o valores)
     2. actions.payload, el nuevo valor que le enviamos para que modifique el estado(opcional)

~~~ js
  reducer(state,action){
    switch(){

    }
    Return: siempre retorna el valor del estado.
  }

~~~


## dispatch

- Pasa un obj a reducer con el Type que modifica el estado, esta función reemplaza a setState

  ~~~ js
  dispatch( { type:" ", payload:" " } )
  ~~~

- payload es opcional.

## state

- Obj que contiene el o los valores de estado a utilizar el los componentes
