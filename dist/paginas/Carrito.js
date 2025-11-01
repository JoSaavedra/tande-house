function Carrito() {
  const [cart, setCart] = React.useState(window.Store.getState().cart);
  React.useEffect(() => window.Store.subscribe(e => {
    if (e.type === "cart:changed") setCart(window.Store.getState().cart);
  }), []);
  const total = cart.reduce((a, b) => a + b.precio * b.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-3"
  }, "Carrito"), cart.length === 0 ? /*#__PURE__*/React.createElement("p", null, "Tu carrito est\xE1 vac\xEDo.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "list-group mb-3"
  }, cart.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id,
    className: "list-group-item d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: it.portada,
    alt: "",
    width: "56",
    height: "56",
    className: "me-3 rounded"
  }), /*#__PURE__*/React.createElement("div", {
    className: "me-auto"
  }, /*#__PURE__*/React.createElement("div", null, it.nombre, " ", /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, it.sku)), /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, "Precio: ", window.Utils.CLP(it.precio))), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: it.qty,
    onChange: e => window.Store.setQty(it.id, Number(e.target.value)),
    className: "form-control form-control-sm me-2",
    style: {
      width: 80
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger btn-sm",
    onClick: () => window.Store.removeFromCart(it.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-trash"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/React.createElement("strong", null, "Total: ", window.Utils.CLP(total)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-success",
    href: "#/checkout"
  }, "Ir a Checkout"))));
}