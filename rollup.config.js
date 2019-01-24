import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import multiInput from "rollup-plugin-multi-input";
import autoExternal from "rollup-plugin-auto-external";

export default {
  input: "./lib/*",
  output: {
    dir: "./build",
    format: "cjs"
  },
  preserveSymlinks: true,
  external: ["styled-components", "react", "react-dom"],
  watch: {
    chokidar: true,
    exclude: "node_modules/**",
    include: "lib/*.js"
  },

  plugins: [
    peerDepsExternal(),
    autoExternal(),
    multiInput({ relative: "./lib" }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve({ main: false }),
    commonjs()
  ]
};
