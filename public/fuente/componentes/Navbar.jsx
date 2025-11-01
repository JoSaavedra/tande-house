function Navbar() {
  const [count, setCount] = React.useState(
    window.Store.getState().cart.reduce((a, b) => a + b.qty, 0)
  );
  React.useEffect(
    () =>
      window.Store.subscribe((e) => {
        if (e.type === "cart:changed") {
          const n = e.payload.reduce((a, b) => a + b.qty, 0);
          setCount(n);
        }
      }),
    []
  );
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#/">
          <img src="assets/logo.png" alt="" width="28" height="28" />
          <span>TandeHouse</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#/productos">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/categorias">
                Categorías
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/ofertas">
                Ofertas
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <a
                className="btn btn-outline-primary position-relative"
                href="#/carrito"
              >
                <i className="bi bi-cart3"></i>
                {count > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {count}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
