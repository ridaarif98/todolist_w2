import 'lodash';
import './style.css';
import { addList, stausCheck, editList, removeTodo } from './status.js';

const form = document.getElementById('addTodo');

document.getElementById('showListItem').addEventListener('click', (e) => {
  if (e.target.classList.contains('checkboX')) {
    stausCheck(e);
  }
});

document.getElementById('showListItem').addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-ellipsis-v')) {
    editList(e);
  }
});

document.getElementById('showListItem').addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-o')) {
    removeTodo(e);
  }
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  addList();
});