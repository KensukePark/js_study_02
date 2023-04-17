import "./styles.css";

let count = 0;
document.getElementById("app").innerHTML = `
<div class ="title_area">
<h1>Counter</h1>
</dlv>
<div class ="num_area">
  <p id="p-01"></p>
</div>
<div class ="btn_area">
<button class="btn_dec" id="btn_dec">DECREASE</button>
<button class="btn_res" id="btn_res">RESET</button>
<button class="btn_inc" id="btn_inc">INCREASE</button>
</div>
`;
const p01 = document.getElementById("p-01");
p01.innerHTML = count;

const btn_0 = document.getElementById("btn_dec");
const btn_1 = document.getElementById("btn_res");
const btn_2 = document.getElementById("btn_inc");

btn_0.addEventListener("click", function () {
  count -= 1;
  p01.innerHTML = count;
});
btn_1.addEventListener("click", function () {
  count = 0;
  p01.innerHTML = count;
});
btn_2.addEventListener("click", function () {
  count += 1;
  p01.innerHTML = count;
});
