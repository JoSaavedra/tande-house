function Productos() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("Todas");
  const [items, setItems] = React.useState(window.Store.getState().productos);
  React.useEffect(() => window.Store.subscribe(e => {
    if (e.type === "products:changed") setItems(window.Store.getState().productos);
  }), []);
  const list = items.filter(p => (cat === "Todas" || p.categoria === cat) && p.nombre.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-3"
  }, "Productos"), /*#__PURE__*/React.createElement("div", {
    className: "row g-2 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8 col-sm-6"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    placeholder: "Buscar",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-4 col-sm-3"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    value: cat,
    onChange: e => setCat(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Todas"), window.Store.getState().categorias.map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c))))), /*#__PURE__*/React.createElement("div", {
    className: "row g-3"
  }, list.map(p => /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-sm-4 col-md-3",
    key: p.id
  }, /*#__PURE__*/React.createElement(BordeProducto, null, /*#__PURE__*/React.createElement(TarjetaProducto, {
    product: p,
    onAdd: x => window.Store.addToCart(x, 1)
  }))))));
}