function Checkout() {
  const st = window.Store.getState();
  const [f, setF] = React.useState({
    nombre: "",
    email: "",
    direccion: "",
    comuna: "",
    telefono: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    if (st.cart.length === 0) {
      location.hash = "#/fallo";
      return;
    }
    window.Store.clearCart();
    location.hash = "#/exito";
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-3"
  }, "Checkout"), /*#__PURE__*/React.createElement("form", {
    className: "row g-3",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Nombre"), /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "form-control",
    value: f.nombre,
    onChange: e => setF({
      ...f,
      nombre: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    className: "form-control",
    value: f.email,
    onChange: e => setF({
      ...f,
      email: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "form-control",
    value: f.direccion,
    onChange: e => setF({
      ...f,
      direccion: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Comuna"), /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "form-control",
    value: f.comuna,
    onChange: e => setF({
      ...f,
      comuna: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "form-control",
    value: f.telefono,
    onChange: e => setF({
      ...f,
      telefono: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 d-flex gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-outline-secondary",
    href: "#/carrito"
  }, "Volver"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Pagar"))));
}