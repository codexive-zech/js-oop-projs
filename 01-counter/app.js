function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Please check ${selection}. it might be an error`);
  }
}
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  //   Bind button to functions (object)
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  //   Adding of click Event to functions
  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 200);
const secondCounter = new Counter(getElement('.second-counter'), 100);

// secondCounter.decrease();
// firstCounter.reset();
