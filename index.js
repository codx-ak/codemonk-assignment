const scale = 10; // 0->1 = 10px

const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput');
const rangeValueDiv = document.querySelector('#rangeValue');
const CANVAS_DIMENSIONS = { height: canvas.height, width: canvas.width };
const ctx = canvas.getContext("2d");

const sequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91,
]
 .map(item => item * scale);

const onInputChangeHandler = (value) => {
  rangeValueDiv.innerText = value;
  drawRecaman(value);
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value));

onInputChangeHandler(rangeInput.value) // defualt function call

function drawRecaman(value) {
  ctx.clearRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height); // Clear the canvas
  
  // line Color
  ctx.fillStyle = "gray";
  ctx.strokeStyle = "gray";

  // line width
  ctx.lineWidth = 1.5;

 // Center Line 
  ctx.fillRect(0,canvas.height/2,canvas.width,1);

  // Draw the Recaman sequence
  ctx.beginPath();

  for (let i = 0; i < value; i++) {
    const currentNumber = sequence[i];
    const prevNumber = sequence[i-1];
    const radius = Math.abs(prevNumber-currentNumber)/2; // Calculate the radius

    const x = (currentNumber + prevNumber) / 2;
    const y = CANVAS_DIMENSIONS.height / 2;
    ctx.arc(x, y, radius,Math.PI,0,currentNumber>prevNumber);
  }
  ctx.stroke();
}