export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  // get code
  get code() {
    return this._code;
  }
  // set code
  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = val;
  }

  // get name
  get name() {
    return this._name;
  }
  // set name
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._name = val;
  }
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
