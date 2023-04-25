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

Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// [1, 2, 3].myEach(callback);

Array.prototype.myMap = function (callback) {
    const mapped = [];
    this.myEach (el => {
       mapped.push(callback(el));
    }) 

    console.log(mapped);
};

function callback(el) {
    return el + "!";
};

["Kevin", "Brandon", "Kyle"].myMap(callback);