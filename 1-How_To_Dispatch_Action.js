// ---------------Remember ----------------
//if we want to edit data on store we couln't edit them directly
//the process is :
//    first  dispatch an action into the reducer
//    reducer take the action and change state on store

//createStore to create central react store
import { createStore } from 'redux';
//initial state of app
const initState = { todos: [], posts: [] };
//1-create the reducer
//the reducer take the state of the app as params
function myreducer(state = initState, action) {
  console.log(state, action);
}

//2-create the  Store
const store = createStore(myreducer);
//3- create the action
const Action = { type: 'ADD_TODO', todo: 'buy milk' };
//4- dispath action
store.dispatch(Action);
