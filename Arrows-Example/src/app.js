var data = [1, 2, 3, 4, 5];

// Expression bodies
// normal function
var result1 = data.map(
    function name(v) {
        return v + 1;
    }
);

// arrow function
var result2 = data.map(v => v + 1);

console.log('------ Array map use normal function ------');
console.log(result1.toString());

console.log('------ Array map use arrow function ------');
console.log(result2.toString());


// Statement bodies
// normal function
var result3 = data.reduce(
    function (previousValue, currentValue, currentIndex, array) {
        if (currentIndex % 2 == 0) {
            return previousValue + currentValue;            
        } else {
            return previousValue;
        }
    },
    0
);

// arrow function
var result4 = data.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        if (currentIndex % 2 == 0) {
            return previousValue + currentValue;            
        } else {
            return previousValue;
        }
    },
    0
);

console.log('------ Array reduce use normal function ------');
console.log(result3);

console.log('------ Array map use arrow function ------');
console.log(result4);

// Lexical this
var Book = {
    _name: "Holiday",
    _authors: ["Watt", "Steve"],
    printAuthors() {
        this._authors.forEach(
            author => console.log(author + " write " + this._name)
        );
    }
};

console.log('------ Lexical this test ------');
Book.printAuthors();