const myCounter = document.querySelector("#zahl");
const startCounter = document.querySelector("#main");

// count number:

let count = 0;

function addCounter() {
  count++;
  myCounter.innerHTML = count;

  if (count === 100) {
    myCounter.innerHTML = "0";
    count = 0;
  }
}

startCounter.addEventListener("click", () => {
  addCounter();
});

startCounter.addEventListener("keyup", (e) => {
  if (e.keyCode === 32 || e.keyCode === 13) {
    addCounter();
  }
});

// move gradient:

let percentage = 0;

function verlauf() {
  percentage = Math.min(percentage + 1, 100);
  startCounter.style.background = `linear-gradient(to right, #ffd547 ${percentage}%, white ${percentage}%)`;
  if (percentage === 100) {
    startCounter.style.background = `linear-gradient(to right, #ffd547 0%, white 0%)`;
    percentage = 0;
  }
}

startCounter.addEventListener("click", () => {
  verlauf();
});

// reset button:

function resetCount() {
  myCounter.innerHTML = "0";
  count = 0;
  startCounter.style.background = `linear-gradient(to right, #ffd547 0%, white 0%)`;
  percentage = 0;
}

// mouse geklickt halten:

// let geklickt = false;

// startCounter.addEventListener("mousedown", () => {
//   geklickt = true;
//   verlauf();
// });
