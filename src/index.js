import { createStore } from 'redux';

let store = crateStore( () => {
  return 'Hello, World!' 
});

let contents = document.getElementById('contents');
contents.innerHTML = store.getState().toString();
