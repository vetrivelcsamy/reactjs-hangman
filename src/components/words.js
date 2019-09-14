var PROGRAMING_LANG = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
];

function randomWord() {
	return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };
