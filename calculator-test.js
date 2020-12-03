
it('should calculate the monthly rate correctly', function () {
  update();
  expect(document.getElementById('monthly-payment').textContent).toEqual("$ 1.98");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});
