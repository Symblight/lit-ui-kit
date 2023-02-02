// rollup.config.js
import { join } from "path";
import fg from "fast-glob";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const isProd = process.env.ELEVENTY_ENV === "prod";

const componentsDir = "./src/components/atoms/*/**.js";

const files = fg.sync([join(componentsDir)], {
  onlyFiles: true,
  ignore: [],
  unique: true,
});

const plugins = [
  resolve(),
  commonjs(),
];

const devConfig = {
  input: [ ...files],
  output: {
    dir: "public/js",
    format: "esm",
  },
  watch: {
    clearScreen: false,
  },
  plugins: [
    ...plugins,
  ],
};

const productionConfig = {
  input: [...files],
  output: {
    dir: "dist/js",
    format: "esm",
  },
  plugins: [
    ...plugins,
  ],
};

const rollupConfig = () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return productionConfig;
    default:
      return devConfig;
  }
};

export default rollupConfig();
