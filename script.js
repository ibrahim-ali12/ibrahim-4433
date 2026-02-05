let h = 0, m = 0, s = 0;
let timer = null;
let running = false;

function update() {
  hours.innerText = String(h).padStart(2, '0');
  minutes.innerText = String(m).padStart(2, '0');
  seconds.innerText = String(s).padStart(2, '0');
}

function toggle() {
  if (!running) {
    timer = setInterval(() => {
      s++;
      if (s === 60) { s = 0; m++; }
      if (m === 60) { m = 0; h++; }
      update();
    }, 1000);

    running = true;
    start.innerText = "Pause";
  } else {
    clearInterval(timer);
    running = false;
    start.innerText = "Start";
  }
}

function reset() {
  clearInterval(timer);
  h = m = s = 0;
  running = false;
  start.innerText = "Start";
  update();
}
