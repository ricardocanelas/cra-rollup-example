This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[**Rollup**](https://rollupjs.org) is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

Plugins:

- **@rollup/plugin-babel**: Compile your files with Babel
- **@rollup/plugin-image**: Import JPG, PNG, GIF, SVG, and WebP files
- **@rollup/plugin-json**: Convert .json files to ES6 modules
- **@rollup/plugin-node-resolve**: Locate and bundle third-party dependencies in node_modules
- **@rollup/plugin-url**: Import files as data-URIs or ES Modules
- **@rollup/pluginutils**: A set of utility functions commonly used.
- **@svgr/rollup**: import your SVG directly as a React Component.
- **rollup-plugin-cleanup**: Remove comments, trim trailing spaces, compact empty lines, and normalize line endings in JavaScript files.
- **rollup-plugin-delete**: Delete the specific directories when the rollup bundle your resource.
- **rollup-plugin-filesize**: to show filesize in the cli.
- **rollup-plugin-postcss**: Integration with PostCSS (transforming styles with JS plugins... can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more).

Formats that can bundle:

- **amd** – Asynchronous Module Definition, used with module loaders like RequireJS
- **cjs** – CommonJS, suitable for Node and other bundlers (alias: commonjs)
- **es** – Keep the bundle as an ES module file, suitable for other bundlers and inclusion as a `<script type=module>` tag in modern browsers (alias: esm, module)
- **iife** – A self-executing function, suitable for inclusion as a `<script>` tag. (If you want to create a bundle for your application, you probably want to use this.)
- **umd** – Universal Module Definition, works as amd, cjs and iife all in one
- **system** – Native format of the SystemJS loader (alias: systemjs)
