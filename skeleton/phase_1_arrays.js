// Array.prototype.myUniq = function () {
//     const newArr = [];

//     for (let i = 0; i < this.length; i++) {
//         if (!newArr.includes(this[i])) {
//             newArr.push(this[i]);
//         }
//     }

//     // console.log(newArr);
//     return newArr;
// };

// [1, 1, 2, 2, 3, 3].myUniq();

// Array.prototype.twoSum = function () {
//     const pairs = []

//     for (let i = 0; i < this.length - 1; i++) {
//         for (let j = i + 1; j < this.length; j++) {
//             if (this[i] + this[j] === 0) pairs.push([i, j]);
//         }
//     }

//     console.log(pairs);
// };

// [-2, -3, -1, 2, 3, 4, 1].twoSum();

// Array.prototype.transpose = function () {
//     const transposed = [];

//     let i = 0;
//     while (i < this[0].length) {
//         const subArr = [];

//         let j = 0;
//         while (j < this.length) {

//             subArr.push(this[j][i]);
//             j++
//         }
//         i++

//         transposed.push(subArr);
//     }


//     console.log(transposed);
// };

// [[1, 2], [3, 4], [5, 6]].transpose();

// Array.prototype.myEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// };

// [1, 2, 3].myEach(callback);

// Array.prototype.myMap = function (callback) {
//     const mapped = [];
//     this.myEach(el => {
//         mapped.push(callback(el));
//     })

//     console.log(mapped);
// };

// // function callback(el) {
// //     return el + "!";
// // };

// // ["Kevin", "Brandon", "Kyle"].myMap(callback);

// Array.prototype.myReduce = function (callback, acc) {

//     let arr = this;

//     if (acc === undefined) {
//         acc = this[0];
//         arr = this.slice(1);
//     };

//     arr.myEach(el => {
//         return acc = callback(acc, el);
//     });

//     console.log(acc);
// };

// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// });

// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25);

function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i+1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    [array[i],array[j]] = [array[j],array[i]];
                    sorted = false;
                };
                
            };
            
        }
    }
    return array;
};

console.log(bubbleSort([1,4,22,6,7,9,11]));

function substrings(string) {
    const subs = [];
    // const stringy = string.split("");
    for (let start = 0; start < string.length; start++) {
        for (let end = start+1; end <= string.length; end++) {
            subs.push(string.slice(start,end))
        };
        
    }

    return subs;
};

console.log(substrings("apple"));