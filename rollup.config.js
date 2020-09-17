import dts from "rollup-plugin-dts";

module.exports = {
  input: "src/index.ts",
  output: [
    {
      format: "es",
      file: `dist/index.d.ts`,
    },
  ],

  external: process.env.BUILD === "external" ? [/\.scss$/] : [],
  plugins: [dts()],
};
