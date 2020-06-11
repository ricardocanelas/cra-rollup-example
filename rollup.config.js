import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

export default {
  input: "entry.js",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
  },
  plugins: [
    resolve({
      extensions: [".js"],
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".js"],
      presets: ["@babel/env", "@babel/preset-react"],
    }),
    url(),
    svgr(),
    image(),
  ],
  // indicate which modules should be treated as external
  external: ["react-is", "react-dom", "react", "prop-types"],
};
