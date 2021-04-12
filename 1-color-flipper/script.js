//Selectors
const rgbBtn = document.getElementById("rgb-btn");
const hexBtn = document.getElementById("hex-btn");

const bgBodyColor = document.body.style.backgroundColor;
const spanText = document.querySelector(".color");

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomHexCl = () => {
  let hexColor = [];
  let num = 0;
  for (let i = 0; i < 6; i++) {
    num = getRandomNum(0, 15).toString(16);
    hexColor.push(num);
  }

  return `#${hexColor.join("").toUpperCase()}`;
};

const getRandomRGB = () => {
  let red = getRandomNum(0, 255);
  let green = getRandomNum(0, 255);
  let blue = getRandomNum(0, 255);

  let rgbColor = `rgb(${red},${green},${blue})`;

  return rgbColor;
};

rgbBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let color = getRandomRGB();
  document.body.style.backgroundColor = color;
  spanText.textContent = color;
  console.log(color);
});

hexBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let color = getRandomHexCl();
  document.body.style.backgroundColor = color;
  spanText.textContent = color;
});
