import _ from 'lodash';
import './style.css'; 

const form = document.getElementById('addTodo');
let collection= [];

function addList() {
  const todo = {
    id: collection.length,
    title: document.getElementById('todotitle').value,
    complete: false,
  };
  collection.push(todo);
  localStorage.setItem('todoObject', JSON.stringify(collection));
  if (collection.length > 0) {
    ShowList(collection);
  }
  form.reset();
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    addList();
});
  