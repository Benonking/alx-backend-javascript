export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // create copies of an object
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Car = this.constructor[Symbol.species];
    return new Car(this._brand, this._color, this._motor);
  }
}
