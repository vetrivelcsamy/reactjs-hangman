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
  "leopard", "cheetah", "bear", "elephant",
  "polar bear", "turtle", "tortoise", "crocodile",
  "rabbit", "porcupine", "hare", "hen",
  "pigeon", "albatross", "crow", "fish",
  "dolphin", "frog", "whale", "alligator",
  "eagle", "flying squirrel", "ostrich", "fox",
  "goat", "jackal", "emu", "armadillo",
  "eel", "goose", "arctic fox", "wolf",
  "beagle", "gorilla", "chimpanzee", "monkey",
  "beaver", "orangutan", "antelope", "bat",
  "badger", "giraffe", "hermit crab", "giant panda",
  "hamster", "cobra", "hammerhead shark", "camel",
  "hawk", "deer", "chameleon", "hippopotamus",
  "jaguar", "chihuahua", "king cobra", "ibex",
  "lizard", "koala", "kangaroo", "iguana",
  "llama", "chinchillas", "dodo", "jellyfish",
  "rhinoceros", "hedgehog", "zebra", "possum",
  "wombat", "bison", "bull", "buffalo",
  "sheep", "meerkat", "mouse", "otter",
  "sloth", "owl", "vulture", "flamingo",
  "raccoon", "mole", "duck", "swan",
  "lynx", "monitor lizard", "elk", "boar",
  "lemur", "mule", "baboon", "mammoth",
  "blue whale", "rat", "snake", "peacock"
];

const COUNTRY_ARRAY = [
  "afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
  "argentina", "armenia", "australia", "austria", "azerbaijan", "the bahamas",
  "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin",
  "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "brunei",
  "bulgaria", "burkina faso", "burundi", "cabo verde", "cambodia", "cameroon",
  "canada", "central african republic", "chad", "chile", "china", "colombia",
  "comoros", "congo, democratic republic of the", "congo, republic of the",
  "costa rica", "côte d’ivoire", "croatia", "cuba", "cyprus", "czech republic",
  "denmark", "djibouti", "dominica", "dominican republic", "east timor (timor-leste)",
  "ecuador", "egypt", "el salvador", "equatorial guinea", "eritrea", "estonia",
  "eswatini", "ethiopia", "fiji", "finland", "france", "gabon", "the gambia",
  "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea",
  "guinea-bissau", "guyana", "haiti", "honduras", "hungary", "iceland", "india",
  "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan",
  "jordan", "kazakhstan", "kenya", "kiribati", "korea, north", "korea, south",
  "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho",
  "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar",
  "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands",
  "mauritania", "mauritius", "mexico", "micronesia, federated states of",
  "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique",
  "myanmar (burma)", "namibia", "nauru", "nepal", "netherlands", "new zealand",
  "nicaragua", "niger", "nigeria", "north macedonia", "norway", "oman", "pakistan",
  "palau", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland",
  "portugal", "qatar", "romania", "russia", "rwanda", "saint kitts and nevis",
  "saint lucia", "saint vincent and the grenadines", "samoa", "san marino",
  "sao tome and principe", "saudi arabia", "senegal", "serbia", "seychelles",
  "sierra leone", "singapore", "slovakia", "slovenia", "solomon islands", "somalia",
  "south africa", "spain", "sri lanka", "sudan", "sudan, south", "suriname", "sweden",
  "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo",
  "tonga", "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "tuvalu",
  "uganda", "ukraine", "united arab emirates", "united kingdom", "united states",
  "uruguay", "uzbekistan", "vanuatu", "vatican city", "venezuela", "vietnam", "yemen",
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
