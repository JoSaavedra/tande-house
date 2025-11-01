describe("TarjetaProducto", function () {
  it("renderiza nombre y botón", function () {
    var div = document.createElement("div");
    var p = {
      id: "x",
      nombre: "Carta X",
      precio: 1000,
      portada: "assets/cartas/dipplin.png",
      sku: "X-1",
    };
    ReactDOM.createRoot(div).render(
      React.createElement(TarjetaProducto, {
        product: p,
        onAdd: function () {},
      })
    );
    expect(div.textContent).toContain("Carta X");
    expect(div.querySelector("button")).not.toBeNull();
  });
});
