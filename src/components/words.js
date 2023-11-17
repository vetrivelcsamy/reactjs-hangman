const PROGRAMING_LANG = [
  "agda",
  "basic",
  "brainfuck",
  "c",
  "clojure",
  "crystal",
  "csharp",
  "css",
  "dart",
  "delphi",
  "elixir",
  "elm",
  "erlang",
  "fortran",
  "golang",
  "groovy",
  "haskell",
  "html",
  "idris",
  "java",
  "javascript",
  "kotlin",
  "lisp",
  "lua",
  "matlab",
  "mercury",
  "mint",
  "myrddin",
  "nim",
  "objectivec",
  "ocaml",
  "pascal",
  "perl",
  "php",
  "prolog",
  "purescript",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "scheme",
  "sql",
  "swift",
  "typescript",
  "vimscript",
  "zig",
];

function randomWord() {
  return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

function randomWordEasy(){
  while(1){
    var word = PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  if(word.length<=4){
      return word
    }else{
      continue
    }
  }
}

function randomWordMedium(){
  while(1){
    var word = PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  if(word.length>4&&word.length<=6){
      return word
    }else{
      continue
    }
  }
}

function randomWordHard(){
  while(1){
    var word = PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  if(word.length>6){
      return word
    }else{
      continue
    }
  }
}



export { randomWord };
