function TarjetaProducto({
  product,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card h-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("img", {
    src: product.portada,
    className: "card-img-top",
    alt: product.nombre,
    style: {
      objectFit: "cover",
      height: 180
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body d-flex flex-column"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "card-title mb-1"
  }, product.nombre), /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, product.sku), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/React.createElement("strong", null, window.Utils.CLP(product.precio)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => onAdd(product)
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart-plus"
  }), " Agregar"))));
}