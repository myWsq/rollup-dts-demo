import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        file: `dist/index.js`,
      },
    ],
    plugins: [
      postcss({
        extract: true,
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
