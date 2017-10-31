// contructor to collect the work and give back the length and letters array

function words(word) {
    this.words = word.split("");
}

var test = new words("Example");
console.log(test);