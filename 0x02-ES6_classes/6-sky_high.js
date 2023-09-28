import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors === 'number') {
      this._floors = floors;
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
