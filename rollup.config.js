import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        file: `dist/index.js`,
      },
    ],
    external: ["vue"],
    plugins: [
      babel({
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        plugins: ["@vue/babel-plugin-jsx"],
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      postcss({
        extract: true,
        autoModules: true,
      }),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        format: "es",
        file: `dist/index.d.ts`,
      },
    ],
    external: process.env.BUILD === "external" ? [/\.scss$/] : [],
    plugins: [dts()],
  },
];
