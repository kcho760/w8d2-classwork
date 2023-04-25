function range(start, end) {
    if (start > end) {
        return [];
    }
    const arr = range(start, end - 1);
    arr.push(end);
    return arr;
};

console.log(range(1, 5));