module.exports = function(api) {
  api.cache.never();

  const presets = ["@babel/preset-env", "@babel/preset-react"];

  const plugins = [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          styles: "./styles",
          "@containers": "./containers",
          "@components": "./components",
          "@elements": "./elements",
          "@blocks": "./blocks",
          "@utils": "./utils"
        },
        cwd: "."
      }
    ],
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
