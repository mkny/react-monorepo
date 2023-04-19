module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "pretty-quick --staged",
    () => "npm run lint:fix",
    () => "npm run test:ci -- --onlyChanged",
  ],
};
