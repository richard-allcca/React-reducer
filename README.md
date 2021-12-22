# useReducer() 
- Aqui encontraras conceptos generales y  3 ejemplos practicos 
1. Carro de compras con reducer
2. Crud con Reducer, Importante utiliza json-server como DB sin esto falla la carga de datos
3. Contador simple y mejorado 

## Estructura de carpetas
  ~~~
  * actions
    - TYPES (un archivo Types por cada reducer)
  * reducers
    - initialState => usa nameInitialState
    - init => usa nameInit
    - reducer => usa nameReducer
  * componentes
  ~~~
## useReducer () : reemplaza a "useState", recibe 3 parametros 
  1. "state" => el estado anterior
  2. "initialState" => valor inicial debe ser un objeto que tenga la variable de estado
  3. "init" => funcion que modifica el estado inicial (es opcional poco usado)

## reducer(state,action) : función reductora, recibe 2 parametros
  1. state: el estado anterior.
  2. actions: Objeto que tiene 2 propiedades (los recibe del "dispatch")
    * actions.type, el tipo de accion que va ejecutar (funcion o valores) .
    * actions.payload, el nuevo valor que le enviamos para que modifique el estado(opcional) 
  - Return: siempre retorna el valor del estado.

  ## dispatch() 
  - reemplaza a "setState" envia un obj a reducer que modifica el estado 
  ~~~
  { type:" ", payload:" " }
  ~~~ 
  - payload es opcional.

  ## state: 
  - Obj que contiene el o los valores de estado a utilizar el los componentes 
