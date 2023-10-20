import './App.css';
import React, { useReducer } from 'react';
// Reducer para las tareas (task)
function tasksReducer(state, action) {

  console.log('Estado tarea:');
  console.log(state);

  console.log('Acción tarea:');
  console.log(action);

  switch (action.type) {
    
    case 'add_task':
      console.log('Tareas: ');
      console.log(state);
      return [
        ...state, 
        {id: state.length + 1, title: action.title}
      ]

  }
}

// Reducer para el carrito (cart)
function cartReducer(state, action) {

  console.log('Estado cart:');
  console.log(state);

  console.log('Acción cart:');
  console.log(action);

  switch (action.type) {
    case 'add_to_cart':
      console.log('Cart: ');
      console.log(state);
      return [
        ...state, 
        {id: state.length + 1, title: action.product}
      ]
  }
}

// Reducer para las compras (purchase)
function purchaseReducer(state, action) {

  console.log('Estado compra:');
  console.log(state);

  console.log('Acción compra:');
  console.log(action);

  switch (action.type) {
    
    case 'add_purchase':
      console.log('Compras: ');
      console.log(state);
      return [
        ...state, 
        {id: state.length + 1, element: action.element}
      ]

  }
}

// Reducer para los clientes (customer)
function customerReducer(state, action) {

  console.log('Estado cliente:');
  console.log(state);

  console.log('Acción cliente:');
  console.log(action);

  switch (action.type) {
    
    case 'add_customer':
      console.log('Clientes: ');
      console.log(state);
      return [
        ...state, 
        {id: state.length + 1, name: action.name}
      ]

  }
}

//Reducer que concentra las solicitudes y las redirige
function rootReducer(state, action) {

  console.log('Estado root: ');
  console.log(state);

  console.log('Acción root: ');
  console.log(action);

  console.log('\n\n');

  if(action.entity === 'Task'){
    return {...state, tasks: tasksReducer(state.tasks, action)}
  }else if(action.entity === 'Cart'){
    return {...state, cart: cartReducer(state.cart, action)}
  }else if(action.entity === 'Purchase'){
    return {...state, purchases: purchaseReducer(state.purchases, action)}
  }else if(action.entity === 'Customer'){
    return {...state, customers: customerReducer(state.customers, action)}
  }

}

//Estado inicial de las listas
const initialState = {
  tasks: [],
  cart: [],
  purchases: [],
  customers: [],
};

function App() {
  
  const [state, dispatch] = useReducer(rootReducer, initialState);

  //Constantes que almacenan el estado actual de cada lista
  const tasks = state.tasks;
  const cart = state.cart;
  const purchases = state.purchases;
  const customers = state.customers;

  // Ejemplo de cómo agregar una tarea a la lista de tareas
  const addTask = (title) => {
    dispatch({ type: 'add_task', title, entity:'Task' });
  };

  // Ejemplo de cómo agregar un producto al carrito
  const addToCart = (product) => {
    dispatch({ type: 'add_to_cart', product, entity:'Cart' });
  };

  // Ejemplo de cómo agregar una compra a la lista de compras
  const addPurchase = (element) => {
    dispatch({ type: 'add_purchase', element, entity:'Purchase' });
  };

  // Ejemplo de cómo agregar un cliente a la lista de clientes
  const addCustomer = (name) => {
    dispatch({ type: 'add_customer', name, entity:'Customer' });
  };

  return (

    <div className='grid grid-cols-4'>

      {/*Primera columna*/}
      <div className='grid grid-cols-1 items-start'>

        <div className="contenedor_tareas grid grid-cols-1 grid-flow-row">

          <div className="celda grid grid-cols-2 justify-center items-center px-4">
            
            <p className='text-center'>Tarea</p>

            <input type="text" className='input-add' name="" id="" />

          </div>
          <div className="celda">

            <button 
                onClick={() => addTask('Nueva Tarea')} 
            >
                Agregar Tarea
            </button>

          </div>

          {tasks && tasks.map((task) => (
            <div className="celda" key={task.id}>

              <p>{task.title}</p>

            </div>
            
          ))}

        </div>

      </div>
      {/*Fin primera columna*/}


      {/*Segunda columna*/}
      <div className='grid grid-cols-1 items-start'>

        <div className="contenedor-carito grid grid-cols-1 grid-flow-row">
          
          <div className="celda grid grid-cols-2 justify-center items-center px-4">

            <p className='text-center'>Carrito</p>

            <input type="text" className='input-add' name="" id="" />

          </div>

          <div className="celda">

            <button 
              onClick={() => addToCart('Producto A')} 
            >
                Agregar al Carrito
            </button>

          </div>
          
          {cart && cart.map((cart) => (
            <div className="celda" key={cart.id}>

              <p>{cart.title}</p>

            </div>
            
          ))}

        </div>

      </div>
      {/*Fin segunda columna*/}


      {/*Tercera columna*/}
      <div className='grid grid-cols-1 items-start'>

        <div className="contenedor_tareas grid grid-cols-1 grid-flow-row">

          <div className="celda grid grid-cols-2 justify-center items-center px-4">
            
            <p className='text-center'>Compra</p>

            <input type="text" className='input-add' name="" id="" />

          </div>
          <div className="celda">

            <button 
                onClick={() => addPurchase('Nueva Compra')} 
            >
                Agregar Compra
            </button>

          </div>

          {purchases && purchases.map((purchase) => (

            <div className="celda" key={purchase.id}>

              <p>{purchase.element}</p>

            </div>
            
          ))}

        </div>
        
      </div>
      {/*Fin tercera columna*/}

      {/*Cuarta columna*/}
      <div className='grid grid-cols-1 items-start'>

        <div className="contenedor_tareas grid grid-cols-1 grid-flow-row">

          <div className="celda grid grid-cols-2 justify-center items-center px-4">
            
            <p className='text-center'>Cliente</p>

            <input type="text" className='input-add' name="" id="" />

          </div>
          <div className="celda">

            <button 
                onClick={() => addCustomer('Nuevo cliente')} 
            >
                Agregar Cliente
            </button>

          </div>

          {customers && customers.map((customer) => (

            <div className="celda" key={customer.id}>

              <p>{customer.name}</p>

            </div>
            
          ))}

        </div>
        
      </div>
      {/*Fin cuarta columna*/}


    </div>  

  );

}

export default App;
