function Navbar() {
  const [count, setCount] = React.useState(window.Store.getState().cart.reduce((a, b) => a + b.qty, 0));
  React.useEffect(() => window.Store.subscribe(e => {
    if (e.type === "cart:changed") {
      const n = e.payload.reduce((a, b) => a + b.qty, 0);
      setCount(n);
    }
  }), []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-expand-lg bg-body-tertiary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand d-flex align-items-center gap-2",
    href: "#/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.png",
    alt: "",
    width: "28",
    height: "28"
  }), /*#__PURE__*/React.createElement("span", null, "TandeHouse")), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav ms-auto align-items-lg-center"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/productos"
  }, "Productos")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/categorias"
  }, "Categor\xEDas")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/ofertas"
  }, "Ofertas")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item ms-lg-3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-outline-primary position-relative",
    href: "#/carrito"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart3"
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    className: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  }, count)))))));
}