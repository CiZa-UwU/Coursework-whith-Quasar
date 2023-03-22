/* eslint-disable */
require("@babel/core").transformSync(code, {
  plugins: ["@babel/plugin-syntax-top-level-await"],
});
module.exports = api => {
  return {
    presets: [
      [
        '@quasar/babel-preset-app',
        api.caller(caller => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {}
      ]
    ]
  }
}
