let bill_inp = document.querySelector(".bill");

let people_inp = document.querySelector(".people");
let custom_inp = document.querySelector(".custom");
let tip_amount = document.querySelector(".first");
let tip_total = document.querySelector(".last");

let tip_divs = document.querySelectorAll(".tip-div");

function tipCalc() {
  let tipPercent = "";
  let tipAmount;
  tip_divs.forEach((i) =>
    i.addEventListener("click", function () {
      tipPercent = parseInt(this.innerText);
      if (bill_inp > 0) {
        tipAmount = (bill_inp * tipPercent) / 100;
        console.log(tipAmount);
      }
    }),
  );
}

tipCalc();

// showAmount(tipAmount,Total){

// }
