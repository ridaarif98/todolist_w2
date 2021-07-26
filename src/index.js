import 'lodash';
import './style.css';
import { addList, ShowList, stausCheck} from './status';

const form = document.getElementById('addTodo');

document.getElementById('showListItem').addEventListener('click', (e)=>{
  if (e.target.classList.contains('checkboX')) {
    stausCheck(e);
  }
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  addList();
});