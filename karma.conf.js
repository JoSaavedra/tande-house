module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: [
      "https://unpkg.com/react@18/umd/react.development.js",
      "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
      "dist/data/seed.js",
      "dist/data/tienda.js",
      "dist/libreria/router.js",
      "dist/componentes/*.js",
      "dist/paginas/*.js",
      "dist/app.js",
      "dist/main.js",
      "tests/**/*.spec.jsx",
    ],
    preprocessors: { "tests/**/*.spec.jsx": ["babel"] },
    babelPreprocessor: {
      options: { presets: [["@babel/preset-react", { runtime: "automatic" }]] },
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
};
