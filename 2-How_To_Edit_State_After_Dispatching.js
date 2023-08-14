// ---------------Changing the state  depending on action ----------------

import { createStore } from 'redux';

const initState = { todos: [], posts: [] };
//1-create the reducer
function myreducer(state = initState, action) {
  console.log(state, action);
  //5- changing the state
  if (action.type == 'ADD_TODO') {
    //return the new state of the store
    return {
      //todos:state.todos.push(newTodo) -------> this code is not working
      todos: [...state.todos, action.todo],
    };
  }
}

//2-create the  Store
const store = createStore(myreducer);
//3- create the action
const Action = { type: 'ADD_TODO', todo: 'buy milk' };
//4- dispath action
store.dispatch(Action);
