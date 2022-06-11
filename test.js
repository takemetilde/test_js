// Callback Function
function modifyArray(arr, callback) {
    arr.push(100);
    callback();
}

var arr = [1,2,3,4,5]

modifyArray(arr, function() {
    console.log("Array is modified --->", arr);
});

// Reverse Words in String
var string = "Hello to this World.";

function reverseBySeperator(string, seperator) {
    return string.split(seperator).reverse().join(seperator);
}

console.log("Reverse words --->", reverseBySeperator(string, " "));
console.log("Reverse letters --->", reverseBySeperator(string, ""));

// Check if String is Array
console.log(Array.isArray(arr));

// Empty an Array
arr = [];

// Check if Number is Integer

function isInt(number) {
    return number % 1 === 0;
}

console.log(isInt(1))

// Concatenate a Duplicated Array
arr = [1,2,3,4,5];

function duplicateArray(arr) {
    return arr.concat(arr);
}

console.log(duplicateArray(arr));

// Using Closures
function createbase(baseNumber) {
    return function(N) {
        return baseNumber + N;
    };
}

var addSix = createbase(6);

console.log(addSix(6))

// FizzBuzz
for (let i = 1; i < 100; i++) {
    let fizz = i % 3 == 0,
        buzz = i % 5 == 0
    console.log( "i = ", i, fizz ? (buzz ? "FizzBuzz" : "Fizz") : (buzz ? "Buzz" : "") )
}

// Check if Words are Anagrams
var firstWord = "Mary";
var secondWord = "Army";

function isAnagram(firstWord, secondWord) {
    anagram1 = firstWord.toLowerCase().split("").sort().join("");
    anagram2 = secondWord.toLowerCase().split("").sort().join("");

    return anagram1 == anagram2;
}

console.log(isAnagram(firstWord, secondWord));

// Create Closure to Keep Count
function counter() {
    var count = 0;
    return {
        add: function(increment) {
            count += increment;
        },
        subtract: function (decrement) {
            count -= decrement;
        },
        retrieve: function() {
            return count;
        }
    }
}

var c = counter();

c.add(10);
console.log(c.retrieve());
c.subtract(5);
console.log(c.retrieve());
