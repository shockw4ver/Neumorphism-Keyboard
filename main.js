const keyCaches = {};

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
}

const main = () => {
  start();
};

main();
