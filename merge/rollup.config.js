import typescript from 'rollup-plugin-typescript';

async function main(){
  let plugins = [
    typescript()
  ]
  let external = ["@merge/core", "@merge/plugin"];
  return [
    {
      input: "packages/core/src/index.ts",
      plugins,
      external,
      output: {
        file: "packages/core/dist/core.js",
        format: 'esm',
      }
    },
    {
      input: "packages/plugin/src/index.ts",
      plugins,
      external,
      output: {
        file: "packages/plugin/dist/plugin.js",
        format: 'esm',
      }
    }
  ]
}

export default main();