module.exports = {
  extends: ["@monorepo/internal/eslint/base.js"].map((path) =>
    require.resolve(path)
  ),
};
