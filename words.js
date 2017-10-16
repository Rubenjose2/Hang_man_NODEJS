// contructor to collect the work and give back the length and letters array

function newWords(word) {
    this.word = word;
    var word_array = word.split("");
    //container builder//
    var container_array = [];
    for (var w = 0; w < word_array.length; w++) {
        if (word_array[w] != " ") { //this would evaluate if is a letter or blank space
            container_array.push("_");
        } else {
            container_array.push(" ");
        }
    }
    this.word_array = word_array;
    this.container_array = container_array;


}
var test = new newWords("super long word");
console.log(test.container_array.join(" "));
module.exports = newWords;