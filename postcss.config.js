const tailwinds = require('tailwindcss');

module.exports = {
  plugins: {
    tailwindcss: [ tailwinds('./tailwind.config.js'), require('autoprefixer') ],
    autoprefixer: {},
  },
}
