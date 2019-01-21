import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import multiInput from "rollup-plugin-multi-input";

export default {
  input: "./lib/*",
  output: {
    dir: "./build",
    format: "cjs"
  },
  watch: {
    chokidar: true,
    exclude: "node_modules/**",
    include: "lib/*.js"
  },
  plugins: [
    peerDepsExternal(),
    multiInput({ relative: "./lib" }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
};
