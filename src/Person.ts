import {Greeter} from "./Greeter";

export class Person implements Greeter {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  introduce(): void {
    console.log(`name: ${this._name}`);
  }
}