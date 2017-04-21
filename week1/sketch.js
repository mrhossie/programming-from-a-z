var textfield;

function setup() {
  noCanvas();
  textfield = createInput();
  textfield.changed(newText);

}

function newText() {
  createP(texfield.value());
}
