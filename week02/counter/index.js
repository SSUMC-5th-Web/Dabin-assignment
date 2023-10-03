var number = document.getElementById("number");
var inc_button = document.getElementById("increase");
var dec_button = document.getElementById("decrease");

inc_button.addEventListener("click", () => {
  // console.log("increase가 클릭됨");
  // number.innerText는 문자열,
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
});

dec_button.addEventListener("click", () => {
  // console.log("decrease가 클릭됨");
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
});
