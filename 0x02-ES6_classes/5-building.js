export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      if (
        this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function'
      ) {
        throw Error('Class extending Building must ovveride evacuationWarningMessage');
      }
      this._sqft = sqft;
    }
  }
}
