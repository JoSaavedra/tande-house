function Inicio() {
  const [items, setItems] = React.useState(window.Store.getState().productos.slice(0, 8));
  React.useEffect(() => window.Store.subscribe(e => {
    if (e.type === "products:changed") setItems(window.Store.getState().productos.slice(0, 8));
  }), []);
  return /*#__PURE__*/React.createElement("div", {
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/nosotros.gif",
    alt: "",
    style: {
      maxWidth: "100%",
      borderRadius: "1rem"
    }
  })), /*#__PURE__*/React.createElement("h4", {
    className: "mb-3"
  }, "Novedades"), /*#__PURE__*/React.createElement("div", {
    className: "row g-3"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-sm-4 col-md-3",
    key: p.id
  }, /*#__PURE__*/React.createElement(BordeProducto, null, /*#__PURE__*/React.createElement(TarjetaProducto, {
    product: p,
    onAdd: x => window.Store.addToCart(x, 1)
  }))))));
}