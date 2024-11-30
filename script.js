function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
function changeBgColor() {
  let randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById("hexvalue").textContent = randomColor;
}
document.getElementById("colorButton").addEventListener("click", changeBgColor);
