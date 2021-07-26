import 'lodash';
import './style.css';

const form = document.getElementById('addTodo');
let collection = [];

function ShowList(arr) {
  const listBook = arr.map((b) => `
  <ul class="testList1" draggable="true">
    <ul class="testList">
        <li><input type="checkbox" value='${b.complete}' class="checkboX"></li>
        <li>${b.title}</li>
    </ul>
    <ul class="iconList">
        <li><i class="fa fa-ellipsis-v" id='${b.id}'></i></li>
    </ul>           
    </ul>
   `).join('');
  document.getElementById('showListItem').innerHTML = `${listBook}`;
}

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

window.addEventListener('load', () => {
  const dataGet = localStorage.getItem('todoObject');
  const data = JSON.parse(dataGet);
  if (data) {
    collection = data;
  }
  if (collection.length > 0) {
    ShowList(collection);
  }
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  addList();
});