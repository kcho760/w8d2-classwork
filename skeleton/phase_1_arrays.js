Array.prototype.myUniq = function () {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (!newArr.includes(this[i])) {
            newArr.push(this[i]);
        }
    }

    // console.log(newArr);
    return newArr;
};

[1, 1, 2, 2, 3, 3].myUniq();

Array.prototype.twoSum = function () {
    const pairs = []

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) pairs.push([i,j]);
        }
    }

    console.log(pairs);
};

[-2,-3,-1,2,3,4,1].twoSum();