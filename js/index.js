class Key {
  constructor(name, holder, htmlBody) {
    this.name = name;
    this.holder = holder;
    this.clickKey = this.init();
    this.color = this.randomColor();
    this.setUpEvents();
    this.randomColor();
    this.setStyling();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<div class="key">
        </div>`
    );
    return this.holder.querySelector(".key:last-child");
  }
  setUpEvents() {
    this.clickKey.onclick = () => {
      console.log(this.clickKey);
      htmlBody.style.backgroundColor = this.randomColor(this.color);
    };
  }
  randomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 12345678)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  }
  setStyling() {
    this.clickKey.style.backgroundColor = this.randomColor();
  }
}

const allKeys = [];
let nrOfKeys = 0;
let counter = 0;
let intId = setInterval(counter, 2000);
const holder = document.querySelector(".lower");
const htmlBody = document.querySelector("body");
const playBtn = document.querySelector(".play");

htmlBody.onclick = function () {
  console.log("click");
  if (nrOfKeys < 20) {
    nrOfKeys++;
    console.log(nrOfKeys);
    allKeys.push(new Key(Math.random().toString(36).substr(1, 5), holder));
  }
};

console.log(allKeys);
