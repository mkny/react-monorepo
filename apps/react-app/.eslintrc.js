module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    require.resolve("@monorepo/internal/eslint/base.js"),
  ],
};
