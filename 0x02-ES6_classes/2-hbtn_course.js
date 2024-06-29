export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('students must be an array of Strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name get & set
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // length get & set
  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // students get & set
  get students() {
    return this._students;
  }
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array of Strings');
    }
    this._students = students;
  }
}
