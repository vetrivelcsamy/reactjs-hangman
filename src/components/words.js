const PROGRAMING_LANG = [
  "c",
  "csharp",
  "css",
  "dart",
  "delphi",
  "elixir",
  "erlang",
  "fortran",
  "golang",
  "groovy",
  "haskell",
  "html",
  "java",
  "javascript",
  "kotlin",
  "matlab",
  "objectivec",
  "perl",
  "php",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "sql",
  "swift",
  "typescript",
];

function randomWord() {
  return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };