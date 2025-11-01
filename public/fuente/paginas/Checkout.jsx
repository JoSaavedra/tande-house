function Checkout() {
  const st = window.Store.getState();
  const [f, setF] = React.useState({
    nombre: "",
    email: "",
    direccion: "",
    comuna: "",
    telefono: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (st.cart.length === 0) {
      location.hash = "#/fallo";
      return;
    }
    window.Store.clearCart();
    location.hash = "#/exito";
  };
  return (
    <div className="container py-4">
      <h4 className="mb-3">Checkout</h4>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input
            required
            className="form-control"
            value={f.nombre}
            onChange={(e) => setF({ ...f, nombre: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            required
            className="form-control"
            value={f.email}
            onChange={(e) => setF({ ...f, email: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Dirección</label>
          <input
            required
            className="form-control"
            value={f.direccion}
            onChange={(e) => setF({ ...f, direccion: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Comuna</label>
          <input
            required
            className="form-control"
            value={f.comuna}
            onChange={(e) => setF({ ...f, comuna: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input
            required
            className="form-control"
            value={f.telefono}
            onChange={(e) => setF({ ...f, telefono: e.target.value })}
          />
        </div>
        <div className="col-12 d-flex gap-2">
          <a className="btn btn-outline-secondary" href="#/carrito">
            Volver
          </a>
          <button className="btn btn-primary" type="submit">
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
}
