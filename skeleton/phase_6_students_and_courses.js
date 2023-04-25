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
        course.students.push(this.name);
        return this.courses.push(course);
    };

    this.courses.forEach(function (studentCourse) {
        if (studentCourse.conflictsWith(course)) {
            throw new Error("You done messed up")
        }
    })
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

function Course(name, department, credits, block, day) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.students = [];
    this.block = block;
    this.days = days;
}

Course.prototype.addStudent = function (student) {
    return this.students.push(student);
    student.courses.push(this.name);
};

Course.prototype.conflictsWith = function(secondCourse) {
    const daysOverlap = this.days.some(function (day) {
        return this.days.includes(day);
    });

    const blockOverlap = this.block === secondCourse.block;

    return daysOverlap && blockOverlap
};





