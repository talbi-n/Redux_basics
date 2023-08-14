// --------------- React on changes ----------------
// ---------------Changing the state  and print or do something after that  ----------------

import { createStore } from 'redux';

const initState = { todos: [], posts: [] };
//1-create the reducer
function myreducer(state = initState, action) {
  //console.log(state, action);
  //5- changing the state
  if (action.type == 'ADD_TODO') {
    return {
      //here if we don't save the posts also it will be disappired
      //solu 1 : post: [...state.posts],
      //solu 2:
      ...state,
      todos: [...state.todos, action.todo],
    };
  }
}

//2-create the  Store
const store = createStore(myreducer);
//6- React on changes
//this function is executed every time when changes happend
store.subscribe(() => {
  console.log('state updated ');
  //print the current state by store.getState()
  console.log(store.getState());
});
//3- create the action
const Action = { type: 'ADD_TODO', todo: 'buy milk' };
//4- dispath action
store.dispatch(Action);
