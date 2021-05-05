const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

const fonts = withFonts(
  withOptimizedImages({})
);

module.exports = {
  target: 'serverless',
  ...fonts,
};
