import {Teams} from "./Teams";
import {Agent} from "./Agent";
import {Player} from "./Player";
import {FreeAgent} from "./FreeAgent";

export class PlayerBuilder {
  private _name: string;
  private _team: Teams;
  private _contractPeriodMonth: number;
  private _agent: Agent;

  constructor(name: string) {
    this._name = name;
    this._team = Teams.NA;
    this._contractPeriodMonth = 0;
    this._agent = new FreeAgent();
  }

  get name(): string {
    return this._name;
  }

  get team(): Teams {
    return this._team;
  }

  get contractPeriodMonth(): number {
    return this._contractPeriodMonth;
  }

  get agent(): Agent {
    return this._agent;
  }

  setTeam(team: Teams): PlayerBuilder {
    this._team = team;
    return this;
  }

  setContractPeriodMonth(contractPeriodMonth: number): PlayerBuilder {
    this._contractPeriodMonth = contractPeriodMonth;
    return this;
  }

  setAgent(agent: Agent): PlayerBuilder {
    this._agent = agent;
    return this;
  }

  build(): Player {
    return new Player(this);
  }
}