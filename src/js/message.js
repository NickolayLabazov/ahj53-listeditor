import Product from './product.js';

class Message {
  constructor(div) {
    this.parent = div;
    this.form = 0;
    this.inputName = 0;
    this.inputCost = 0;
    this.buttonSave = 0;
    this.buttonCanc = 0;
  }

  create() {
    this.form = document.createElement('form');
    this.parent.appendChild(this.form);
    this.form.setAttribute('class', 'message');
    const labelName = document.createElement('label');
    const labelCost = document.createElement('label');
    this.inputName = document.createElement('input');
    this.inputName.setAttribute('class', 'input');
    this.inputCost = document.createElement('input');
    this.inputCost.setAttribute('class', 'input');
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'buttonDiv');
    this.buttonSave = document.createElement('button');
    this.buttonCanc = document.createElement('button');
    this.form.appendChild(labelName);
    this.form.appendChild(this.inputName);
    this.form.appendChild(labelCost);
    this.form.appendChild(this.inputCost);
    this.form.appendChild(buttonDiv);
    buttonDiv.appendChild(this.buttonSave);
    buttonDiv.appendChild(this.buttonCanc);
    labelName.innerHTML = 'Название';
    labelCost.innerHTML = 'Стоимость';
    this.buttonSave.innerHTML = 'Сохранить';
    this.buttonCanc.innerHTML = 'Отмена';
    try {
      this.inputName.value = this.product.product;
      this.inputCost.value = this.product.price;
    } catch (e) {}
    this.saveLisstener();
    this.cancLisstener();
  }

  cancLisstener() {
    this.buttonCanc.addEventListener('click', () => {
      event.preventDefault();
      this.removeMes();
    });
  }

  removeMes() {
    document.body.removeChild(this.form);
  }
}

export class MessageEdit extends Message {
  constructor(div, prod) {
    super(div);
    this.product = prod;
  }

  saveLisstener() {
    this.buttonSave.addEventListener('click', () => {
      event.preventDefault();
      this.product.editing(this.inputName.value, this.inputCost.value);
      this.removeMes();
    });
  }
}

export class MessageNew extends Message {
  constructor(div) {
    super(div);
  }

  saveLisstener() {
    this.buttonSave.addEventListener('click', () => {
      event.preventDefault();
      const parent = document.body.querySelector('.tab');
      const product = new Product(parent, this.inputName.value, this.inputCost.value);
      product.create();
      this.removeMes();
    });
  }
}
