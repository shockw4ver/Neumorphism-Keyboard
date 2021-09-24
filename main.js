const keyCaches = {};
let modeToggler = null;
let raisedToggler = null;

function _getKey(code) {
  if (!keyCaches[code]) {
    keyCaches[code] = document.querySelector(`#${code}`);
  }

  return keyCaches[code];
}

function _handleKeydown(e) {
  _getKey(e.code).classList.add("active");
}

function _handleKeyup(e) {
  _getKey(e.code).classList.remove("active");
}

function start() {
  document.addEventListener("keypress", _handleKeydown);
  document.addEventListener("keyup", _handleKeyup);

  modeToggler = document.getElementById("modeToggler");
  modeToggler.addEventListener("click", () => {
    modeToggler.classList.toggle("checked");
    document.body.classList.toggle("sharp");
  });

  raisedToggler = document.getElementById("raisedToggler");
  raisedToggler.addEventListener("click", () => {
    raisedToggler.classList.toggle("checked");
    document.body.classList.toggle("raised");
  });
}

const main = () => {
  start();
};

main();
