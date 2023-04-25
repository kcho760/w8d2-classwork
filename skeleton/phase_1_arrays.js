Array.prototype.myUniq = function () {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (!newArr.includes(this[i])) {
            newArr.push(this[i]);
        }
    }

    // console.log(newArr);
    return newArr;
}

[1, 1, 2, 2, 3, 3].myUniq();