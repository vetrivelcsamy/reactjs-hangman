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
  "Dog", "Cow", "Cat", "Horse",
  "Donkey", "Tiger", "Lion", "Panther",
  "Leopard", "Cheetah", "Bear", "Elephant",
  "Polar bear", "Turtle", "Tortoise", "Crocodile",
  "Rabbit", "Porcupine", "Hare", "Hen",
  "Pigeon", "Albatross", "Crow", "Fish",
  "Dolphin", "Frog", "Whale", "Alligator",
  "Eagle", "Flying squirrel", "Ostrich", "Fox",
  "Goat", "Jackal", "Emu", "Armadillo",
  "Eel", "Goose", "Arctic fox", "Wolf",
  "Beagle", "Gorilla", "Chimpanzee", "Monkey",
  "Beaver", "Orangutan", "Antelope", "Bat",
  "Badger", "Giraffe", "Hermit Crab", "Giant Panda",
  "Hamster", "Cobra", "Hammerhead shark", "Camel",
  "Hawk", "Deer", "Chameleon", "Hippopotamus",
  "Jaguar", "Chihuahua", "King Cobra", "Ibex",
  "Lizard", "Koala", "Kangaroo", "Iguana",
  "Llama", "Chinchillas", "Dodo", "Jellyfish",
  "Rhinoceros", "Hedgehog", "Zebra", "Possum",
  "Wombat", "Bison", "Bull", "Buffalo",
  "Sheep", "Meerkat", "Mouse", "Otter",
  "Sloth", "Owl", "Vulture", "Flamingo",
  "Raccoon", "Mole", "Duck", "Swan",
  "Lynx", "Monitor lizard", "Elk", "Boar",
  "Lemur", "Mule", "Baboon", "Mammoth",
  "Blue whale", "Rat", "Snake", "Peacock"
];

const COUNTRY_ARRAY = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
  "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia",
  "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
  "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];



function randomWord() {
  return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

function randomWordEasy(wordArray){
  while(1){
     var word = wordArray[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  if(word.length<=4){
      return word
    }else{
      continue
    }
  }
}

function randomWordMedium(wordArray){
  while(1){
    var word = wordArray[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  if(word.length>4&&word.length<=6){
      return word
    }else{
      continue
    }
  }
}

function randomWordHard(wordArray){
  while(1){
    var word = wordArray[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  if(word.length>6){
      return word
    }else{
      continue
    }
  }
}

export {COUNTRY_ARRAY ,randomWordEasy ,randomWordMedium ,randomWordHard ,ANIMAL_ARRAY,PROGRAMING_LANG};
