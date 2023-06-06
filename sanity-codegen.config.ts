import { SanityCodegenConfig } from "sanity-codegen";

// const config: SanityCodegenConfig = {
//   schemaPath: "./sanity/schema",
//   outputPath: "./utils/types/types.ts",

//   // NOTE: The CLI ships with a pre-configured babel config that shims out
//   // the Sanity parts system. This babel config does not read from any
//   // `.babelrc` or `babel.config.js`. You can only configure extra babel
//   // options here.
//   // babelOptions: require('./.babelrc.json'), // (optional)
// };

// export default config;

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schema",
  outputPath: "./utils/types/types.ts",
  // Uncomment below to change output path
  // outputPath: './src/utils/types/schema/generated-schema-types.ts',
};

export default config;
