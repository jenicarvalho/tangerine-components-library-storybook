module.exports = {
  "stories": [
    "../src/stories/components/**/*.stories.mdx",
    "../src/stories/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-addon-material-ui',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}