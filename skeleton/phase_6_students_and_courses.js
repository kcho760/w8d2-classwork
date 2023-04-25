function Student(first, last) {
    this.first = first;
    this.last = last;
    this.courses = [];
};

Student.prototype.name = function () {
    return `${this.first} ${this.last}`;
};

Student.prototype.enroll = function (course) {
    if (this.courses.indexOf(course) === -1) {
        return this.courses.push(course);
    };
};

Student.prototype.courseLoad = function () {
    const courseLoad = {};

    this.courses.forEach(course => {
        const department = course.department;
        const credits = course.credits;

        if (courseLoad[department]) {
            courseLoad[department] += credits;
        } else {
            courseLoad[department] = credits;
        }
    });
};







