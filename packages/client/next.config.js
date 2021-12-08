const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'scss')],
  },
}

const withTM = require("next-transpile-modules")(["shared"]);
module.exports = withTM();