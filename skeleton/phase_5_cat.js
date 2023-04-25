function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
    return `${this.owner} loves ${this.name}`;
};

let c = new Cat("sally", "Kevin")
console.log(c.cuteStatement());

Cat.prototype.cuteStatement = function () {
    return `Everyone loves ${this.name}`;
}

console.log(c.cuteStatement());

Cat.prototype.meow = function () {
    return `${this.name} meows`;
}

console.log(c.meow());
