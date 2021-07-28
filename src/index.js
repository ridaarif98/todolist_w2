import 'lodash';
import './style.css';
import { addList, stausCheck,editBooks } from './status.js';

const form = document.getElementById('addTodo');

document.getElementById('showListItem').addEventListener('click', (e) => {
  if (e.target.classList.contains('checkboX')) {
    stausCheck(e);
  }
});

document.getElementById('showListItem').addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-ellipsis-v')) {
    editBooks(e);
  }
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  addList();
});