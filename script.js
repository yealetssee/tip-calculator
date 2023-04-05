let bill_inp = document.querySelector(".bill");

let people_inp = document.querySelector(".people");
let custom_inp = document.querySelector(".custom");
let tip_amount = document.querySelector(".first");
let tip_total = document.querySelector(".last");
let reset = document.querySelector(".reset");

let allInp = document.querySelectorAll(".twinput");

let tip_divs = [...document.querySelectorAll(".tip-div")];

function resetCalculator() {
  bill_inp.value = "";
  custom_inp.value = "";
  people_inp.value = "0";
  tip_amount.innerText = "$0.00";
  tip_total.innerText = "$0.00";
  tip_divs.forEach((i) => {
    i.classList.remove("active");
  });
}

reset.addEventListener("click", () => {
  resetCalculator();
});

tip_divs.forEach((i) => {
  i.addEventListener("click", () => {
    tip_divs.forEach((btn) => {
      btn.classList.remove("active");
    });

    i.classList.add("active");
    let tipDiv = document.querySelector(".tip-div.active");
    let tipDivNum = tipDiv.innerText;
    tipDivNum = parseInt(tipDivNum.substring(0, tipDivNum.length - 1));
    let billAmount = parseFloat(bill_inp.value);
    let peopleAmount = parseInt(people_inp.value);
    if (bill_inp.value == "") return;

    if (people_inp.value == "" || people_inp.value == "0") {
      peopleAmount = 1;
      people_inp.value = "1";
    }
    calculateTip(billAmount, peopleAmount, tipDivNum);
  });
});

custom_inp.addEventListener("blur", () => {
  tip_divs.forEach((i) => {
    i.classList.remove("active");
  });
  let customPercentage = parseInt(custom_inp.value);
  let billAmount = parseFloat(bill_inp.value);
  let peopleAmount = parseInt(people_inp.value);
  if (bill_inp.value == "") return;

  if (people_inp.value == "" || people_inp.value == "0") {
    peopleAmount = 1;
    people_inp.value = "1";
  }

  calculateTip(billAmount, peopleAmount, customPercentage);
});

function calculateTip(bill, numbOfPeople, Percentage) {
  let tipCalculated = Math.round(bill * (Percentage / 100).toFixed(2));
  if (tipCalculated <= 0.5) {
    tipCalculated = 0.5;
  }
  let totalPerPerson =
    tipCalculated / numbOfPeople + bill / numbOfPeople.toFixed(2);

  totalPerPerson = totalPerPerson.toFixed(2);
  tip_amount.innerText = `$${tipCalculated}`;
  tip_total.innerText = `$${totalPerPerson}`;
}
