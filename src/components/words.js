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

const ANIMAL_ARRAY = [
  "dog", "cow", "cat", "horse",
  "donkey", "tiger", "lion", "panther",
  "leopard", "cheetah", "bear", "elephant", "turtle", "tortoise", "crocodile",
  "rabbit", "porcupine", "hare", "hen",
  "pigeon", "albatross", "crow", "fish",
  "dolphin", "frog", "whale", "alligator",
  "eagle", "flying squirrel", "ostrich", "fox",
  "goat", "jackal", "emu", "armadillo",
  "eel", "goose", "wolf",
  "beagle", "gorilla", "chimpanzee", "monkey",
  "beaver", "orangutan", "antelope", "bat",
  "badger", "giraffe", "crab", "panda",
  "hamster", "cobra", "hammerhead shark", "camel",
  "hawk", "deer", "chameleon", "hippopotamus",
  "jaguar", "chihuahua", "ibex",
  "lizard", "koala", "kangaroo", "iguana",
  "llama", "chinchillas", "dodo", "jellyfish",
  "rhinoceros", "hedgehog", "zebra", "possum",
  "wombat", "bison", "bull", "buffalo",
  "sheep", "meerkat", "mouse", "otter",
  "sloth", "owl", "vulture", "flamingo",
  "raccoon", "mole", "duck", "swan",
  "lynx", "elk", "boar",
  "lemur", "mule", "baboon", "mammoth", "rat", "snake", "peacock"
];

const COUNTRY_ARRAY = [
  "afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
  "argentina", "armenia", "australia", "austria", "azerbaijan", "the bahamas",
  "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin",
  "bhutan", "bolivia",  "botswana", "brazil", "brunei",
  "bulgaria", "burundi", "cabo verde", "cambodia", "cameroon",
  "canada","chad", "chile", "china", "colombia",
  "comoros",  "croatia", "cuba", "cyprus",
  "denmark", "djibouti", "dominica", "timorleste",
  "ecuador", "egypt",  "eritrea", "estonia",
  "eswatini", "ethiopia", "fiji", "finland", "france", "gabon",
  "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea",
  "guineabissau", "guyana", "haiti", "honduras", "hungary", "iceland", "india",
  "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan",
  "jordan", "kazakhstan", "kenya", "kiribati", "korea",
  "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho",
  "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar",
  "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands",
  "mauritania", "mauritius", "mexico",
  "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique",
  "myanmar", "namibia", "nauru", "nepal", "netherlands",
  "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan",
  "palau", "panama", "paraguay", "peru", "philippines", "poland",
  "portugal", "qatar", "romania", "russia", "rwanda",
  "samoa",
  "senegal", "serbia", "seychelles",
  "singapore", "slovakia", "slovenia","somalia",
 "spain", "sudan", "sudan, south", "suriname", "sweden",
  "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo",
  "tonga",  "tunisia", "turkey", "turkmenistan", "tuvalu",
  "uganda", "ukraine",
  "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen",
  "zambia", "zimbabwe"
];



function randomWordEasy(wordArray){
  while(1){
     var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  if(word.length<=4){
      return word
    }else{
      continue
    }
  }
}

function randomWordMedium(wordArray){
  while(1){
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  if(word.length>4&&word.length<=6){
      return word
    }else{
      continue
    }
  }
}

function randomWordHard(wordArray){
  while(1){
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  if(word.length>6){
      return word
    }else{
      continue
    }
  }
}

export {COUNTRY_ARRAY ,randomWordEasy ,randomWordMedium ,randomWordHard ,ANIMAL_ARRAY,PROGRAMING_LANG};
