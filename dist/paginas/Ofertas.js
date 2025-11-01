function Ofertas() {
  const [items, setItems] = React.useState(window.Store.getOffers());
  React.useEffect(() => window.Store.subscribe(e => {
    if (e.type === "products:changed") setItems(window.Store.getOffers());
  }), []);
  return /*#__PURE__*/React.createElement("div", {
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-3"
  }, "Ofertas"), /*#__PURE__*/React.createElement("div", {
    className: "row g-3"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-sm-4 col-md-3",
    key: p.id
  }, /*#__PURE__*/React.createElement(BordeProducto, null, /*#__PURE__*/React.createElement(TarjetaProducto, {
    product: p,
    onAdd: x => window.Store.addToCart(x, 1)
  }))))));
}