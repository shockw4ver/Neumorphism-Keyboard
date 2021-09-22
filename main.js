function _handleKeydown(e) {
  document.querySelector(`#${e.code}`).classList.toggle("active");
}

function _handleKeyup(e) {
  document.querySelector(`#${e.code}`).classList.toggle("active");
}

function start() {
  document.addEventListener("keydown", _handleKeydown);
  document.addEventListener("keyup", _handleKeyup);
}

const main = () => {
  start();
};

main();
