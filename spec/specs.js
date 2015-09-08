describe("factorial", function() {
  it("returns 1 if called on 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("returns the product of the input and each positive integer less than it", function() {
    expect(factorial(5)).to.equal(120);
  });
});
