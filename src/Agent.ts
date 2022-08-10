import {Person} from "./Person";

export class Agent extends Person {
  constructor(name = 'FA') {
    super(name);
    this._name = name;
  }

  introduce() {
    super.introduce();
  }
}