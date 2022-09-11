module.exports = {
  presets: ['babel-preset-expo'], 
  "plugins": [
    ["tailwindcss-react-native/babel", {
    "tailwindConfig": "./tailwind.native.config.js"
  }
]
]
}