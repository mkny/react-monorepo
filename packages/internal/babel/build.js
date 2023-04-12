module.exports = {
  extends: require.resolve("./base.js"),
  ignore: [
    "node_modules",
    "build",
    "**/__tests__/**",
    "**/__snapshots__/**",
    "**/stories",
    "**/*.stories.js",
    "**/*.stories.jsx",
    "**/*.stories.ts",
    "**/*.stories.tsx",
  ],
};
