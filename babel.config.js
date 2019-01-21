module.exports = function(api) {
  const apiChoice = api.cache.never();

  const presets = ["@babel/preset-env", "@babel/preset-react"];

  const plugins = ["babel-plugin-styled-components"];

  return {
    presets,
    plugins
  };
};
