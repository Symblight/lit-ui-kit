import { defineConfig } from "vite";
import { join } from "path";
import fg from "fast-glob";


const componentsDir = "./src/components/atoms/*/**.js";

const files = fg.sync([join(componentsDir)], {
  onlyFiles: true,
  ignore: [],
  unique: true,
});


export default defineConfig({
  build: {
    lib: {
      entry: {
        button: "./src/components/atoms/Button/index.js",
      },
      formats: ["esm"],
    },
  }
});