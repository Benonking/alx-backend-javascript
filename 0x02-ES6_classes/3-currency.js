export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else return;
  }  
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else return;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
