function ErrorCompra() {
  const [h, setH] = React.useState(window.Router.current());
  React.useEffect(() => {
    const onHash = () => setH(window.Router.current());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const q = h.split("?")[1] || "";
  const params = Object.fromEntries(new URLSearchParams(q));
  const code = (params.code || "desconocido").toLowerCase();
  const info = {
    tarjeta_rechazada: {
      title: "Pago rechazado",
      hint: "Revisa los datos de la tarjeta o intenta con otro medio.",
    },
    sin_fondos: {
      title: "Fondos insuficientes",
      hint: "Intenta con otra tarjeta o método de pago.",
    },
    cvv_invalido: {
      title: "CVV inválido",
      hint: "Verifica el código de seguridad.",
    },
    tresds_fallido: {
      title: "Autenticación 3-D Secure fallida",
      hint: "Completa el proceso de verificación bancaria.",
    },
    red_timeout: {
      title: "Tiempo de espera agotado",
      hint: "Reintenta en unos segundos o revisa tu conexión.",
    },
    stock: {
      title: "Sin stock",
      hint: "Un producto se agotó durante el proceso.",
    },
    carrito_vacio: {
      title: "Carrito vacío",
      hint: "Agrega productos antes de pagar.",
    },
    sistema: {
      title: "Error del sistema",
      hint: "Intenta nuevamente más tarde.",
    },
    desconocido: {
      title: "No se pudo completar el pago",
      hint: "Reintenta o contáctanos para ayuda.",
    },
  }[code];
  return (
    <div className="container py-5" style={{ maxWidth: 720 }}>
      <div className="text-center mb-4">
        <i className="bi bi-x-circle text-danger" style={{ fontSize: 64 }}></i>
        <h3 className="mt-3">{info.title}</h3>
        <p className="text-muted mb-1">{info.hint}</p>
        <small className="text-muted">Código: {code}</small>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h6 className="mb-2">Qué puedes hacer</h6>
          <ul className="mb-0">
            <li>Verifica los datos y vuelve a intentar.</li>
            <li>Prueba otro método de pago o tarjeta.</li>
            <li>
              Si el problema persiste, contáctanos con el código del error.
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex gap-2 justify-content-center">
        <a className="btn btn-primary" href="#/checkout">
          Reintentar pago
        </a>
        <a className="btn btn-outline-secondary" href="#/carrito">
          Volver al carrito
        </a>
        <a className="btn btn-outline-dark" href="#/contacto">
          Contacto
        </a>
      </div>
    </div>
  );
}
