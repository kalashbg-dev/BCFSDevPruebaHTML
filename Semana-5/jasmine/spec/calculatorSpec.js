describe("calculadora", function() {

  it("deberia sumar dos positivos correctamente", () => {
    //Arrange
    const firstValue = 2;
    const secondValue = 3;

    //Act
    const resultado = add(firstValue, secondValue);

    //Assert
    expect(resultado).toBe(5);

    //expect(add(2, 3).toBe(5))

  });
});