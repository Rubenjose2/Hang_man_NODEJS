//===========================================================================//
//                          Hangmand Main                                    //

// Calling the npm of inquirer
var inquirer = require("inquirer");
var Hangman_word = require("./words");

var container_array = [];

var words = new Hangman_word("Venezuela");
var words_array = words.word_array;

function container(word) {
    for (var i = 0; i < word.length; i++) {
        container_array.push("_");
    }
    return container_array;
}

function word_evaluate(word_letter, user_letter) {
    var match = word_letter.includes(user_letter);
    console.log(match);
}

container(words_array);
word_evaluate(words_array, "V");



console.log("======================================")
console.log("===========Welcome to Hangman=========")
console.log("======================================")
console.log("");
console.log(container_array);
console.log(container_array.length);

inquirer.prompt([{
    type: "input",
    message: "Please enter a letter ",
    name: "letter"
}]).then(function(inquirerResponse) {
    console.log(inquirerResponse.letter);


})