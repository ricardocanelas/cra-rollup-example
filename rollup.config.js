import babel from "@rollup/plugin-babel";
import cleanup from "rollup-plugin-cleanup";
import { createFilter } from "rollup-pluginutils";
import del from "rollup-plugin-delete";
import filesize from "rollup-plugin-filesize";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

// const production = !process.env.ROLLUP_WATCH;
const external = createFilter(
  ["prop-types", "react", "react-is", "react-bootstrap/**"],
  null,
  { resolve: false }
);

export default {
  input: "entry.js",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
    globals: [
      "react-is",
      "react-dom",
      "react",
      "prop-types",
      "react-bootstrap",
    ],
  },
  plugins: [
    del({
      targets: "dist/*",
      runOnce: true,
    }),
    resolve({
      extensions: [".js"],
      jsnext: true,
      module: true,
    }),
    url(),
    svgr(),
    json(),
    postcss(),
    image(),
    babel({
      babelHelpers: "bundled",
      extensions: [".js"],
      presets: ["@babel/env", "@babel/preset-react"],
    }),
    cleanup(),
    filesize(),
  ],
  external,
  // indicate which modules should be treated as external
  // https://github.com/rollup/rollup/issues/2882#issuecomment-497216091
  // external(id) {
  //   return ["prop-types", "react", "react-is", "react-bootstrap"].includes(
  //     id.split("/")[0]
  //   );
  // },
};
