const keyCaches = {};
let modeToggler = null;

function _getKey(code) {
  if (!keyCaches[code]) {
    keyCaches[code] = document.querySelector(`#${code}`);
  }

  return keyCaches[code];
}

function _handleClick(id) {
  return () => {
    _getKey(id).classList.toggle("active");
  };
}

function start() {
  Object.values(document.getElementsByClassName("key")).forEach((key) => {
    key.addEventListener("click", _handleClick(key.id));
  });

  modeToggler = document.getElementById("modeToggler");
  modeToggler.addEventListener("click", () => {
    modeToggler.classList.toggle("checked");
    document.body.classList.toggle("sharp");
  });
}

const main = () => {
  start();
};

main();
