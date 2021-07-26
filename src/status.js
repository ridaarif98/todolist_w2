let collection = [];
const form = document.getElementById('addTodo');
import {addEventsDragAndDrop} from './sorting';

function stausCheck(ev) {
  const buttonId = ev.target.id;
  console.log(buttonId);
  const dataGet = localStorage.getItem('todoObject');
  const data = JSON.parse(dataGet);
  if (data) {
    collection= data;
  }
  const rtest=collection[collection.findIndex((x) => x.id === parseInt(buttonId, 10))];
  console.log(rtest);

  const last = collection.indexOf(rtest);
  console.log(last);
  console.log(collection[last].complete);
  if (collection[last].complete===false) {
    collection[last].complete=true;
  }
  else {
    collection[last].complete=false;
  }
  localStorage.setItem('todoObject', JSON.stringify(collection));  
}

function ShowList(arr) {
  const listBook = arr.map((b) => `
  <ul class="testList1" draggable="true">
    <ul class="testList">
        <li><input type="checkbox" id='${b.id}' value='${b.complete}' class="checkboX" ${b.complete?'checked':'unchecked'}></li>
        <li>${b.title}</li>
    </ul>
    <ul class="iconList">
        <li><i class="fa fa-ellipsis-v" id='${b.id}'></i></li>
    </ul>           
    </ul>
   `).join('');
  document.getElementById('showListItem').innerHTML = `${listBook}`;
  const test= document.querySelectorAll('.testList1');
  console.log(test);
  test.forEach((li) => {
  addEventsDragAndDrop(li);
});
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

export {addList, ShowList, stausCheck};