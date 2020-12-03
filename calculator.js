window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById('loan-amount').value = 150;;
  document.getElementById('loan-years').value = 10;
  document.getElementById('loan-rate').value = 10;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let newVals = getCurrentUIValues();
  let result = calculateMonthlyPayment(newVals);
  updateMonthly(result);

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal = parseFloat(values.amount);
  let i = parseFloat(values.rate) / 100 / 12;
  let n = parseFloat(values.years * 12);
  let monthly = i * principal / (1 - Math.pow(1 + i, -n));
  let result = monthly.toFixed(2);
  return result;

}
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let updatedPayment = monthly;
  document.getElementById('monthly-payment').textContent = `$ ${updatedPayment}`;
}
