import { MessageNew } from './message';

export default class Editor {
  constructor(div) {
    this.parent = div;
    this.table = 0;
  }

  create() {
    this.parent.innerHTML = '<div class = "name"><p>Товары</p><span class = "add">&#43</span></div>';
    this.table = document.createElement('table');
    this.table.setAttribute('class', 'tab');
    const head = document.createElement('tr');
    this.table.appendChild(head);
    this.parent.appendChild(this.table);
    const prod = document.createElement('th');
    const price = document.createElement('th');
    const edit = document.createElement('th');
    prod.innerHTML = 'Название';
    price.innerHTML = 'Стоимость';
    edit.innerHTML = 'Действие';
    head.appendChild(prod);
    head.appendChild(price);
    head.appendChild(edit);
    prod.setAttribute('class', 'headcell');
    price.setAttribute('class', 'headcell');
    edit.setAttribute('class', 'headcell');
    this.addLisstener();
  }

  addLisstener() {
    const add = document.body.querySelector('.add');
    add.addEventListener('click', () => {
      const messageNew = new MessageNew(document.body);
      messageNew.create();
    });
  }
}
