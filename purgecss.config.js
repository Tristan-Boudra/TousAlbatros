module.exports = {
  content: ["./src/**/*.js", "./public/index.html"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};
