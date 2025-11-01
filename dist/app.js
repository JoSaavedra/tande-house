function App() {
  const route = h => {
    switch (h) {
      case "/":
        return /*#__PURE__*/React.createElement(Inicio, null);
      case "/productos":
        return /*#__PURE__*/React.createElement(Productos, null);
      case "/categorias":
        return /*#__PURE__*/React.createElement(Categorias, null);
      case "/ofertas":
        return /*#__PURE__*/React.createElement(Ofertas, null);
      case "/carrito":
        return /*#__PURE__*/React.createElement(Carrito, null);
      case "/checkout":
        return /*#__PURE__*/React.createElement(Checkout, null);
      case "/exito":
        return /*#__PURE__*/React.createElement(Exito, null);
      case "/fallo":
        return /*#__PURE__*/React.createElement(Fallo, null);
      default:
        return /*#__PURE__*/React.createElement(Inicio, null);
    }
  };
  const [current, setCurrent] = React.useState(window.Router.current());
  React.useEffect(() => {
    const onHash = () => setCurrent(window.Router.current());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, null), route(current), /*#__PURE__*/React.createElement(Footer, null));
}