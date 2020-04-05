var PROGRAMING_LANG = [
  "c",
  "csharp",
  "css",
  "dart",
  "golang",
  "html",
  "java",
  "javascript",
  "kotlin",
  "php",
  "python",
  "ruby",
  "sql",
  "typescript",
];

function randomWord() {
  return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };
