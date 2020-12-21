const { defaults } = require("jest-config");

module.exports = {
  collectCoverageFrom: ["src/components/js,jsx}", "!src/**/*.test.{js,jsx}"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "scss"],
};
