module.exports = function(api) {
  const apiChoice = api.cache.never();

  const presets = ["@babel/preset-env", "@babel/preset-react"];

  const plugins = [
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: true
      }
    ],
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-object-rest-spread"]
  ];

  return {
    presets,
    plugins
  };
};
