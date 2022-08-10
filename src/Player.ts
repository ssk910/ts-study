import {Person} from "./Person";
import {Teams} from "./Teams";
import {Agent} from "./Agent";
import {PlayerBuilder} from "./PlayerBuilder";

export class Player extends Person {
  private _team: Teams;
  private _contractPeriodMonth;
  private _agent: Agent;

  constructor(builder: PlayerBuilder) {
    super(builder.name);
    this._name = builder.name;
    this._team = builder.team;
    this._contractPeriodMonth = builder.contractPeriodMonth;
    this._agent = builder.agent;
  }

  get name(): string {
    return this._name;
  }

  get team(): Teams {
    return this._team;
  }

  get contractPeriodMonth() {
    return this._contractPeriodMonth;
  }

  get agent(): Agent {
    return this._agent;
  }

  introduce() {
    console.log(`{name: ${this._name}, team: ${this._team}, contract: ${this._contractPeriodMonth}, agent: ${this._agent.name}}`);
  }

  join(team: Teams, contractMonth: number): void {
    this._team = team;
    this._contractPeriodMonth = contractMonth;
    console.log(`${this.name} joined ${this.team} on ${this.contractPeriodMonth} month(s) contract.`)
  }

  leave(): void {
    this._team = Teams.NA;
    this._contractPeriodMonth = 0;
    console.log(`${this.name} left his team.`)
  }

  extendContract(periodMonth: number): void {
    this._contractPeriodMonth += periodMonth;
    console.log(`${this.name} signed his new contract - ${this.contractPeriodMonth} month(s) (+${periodMonth})`);
  }

  managedBy(agent: Agent): void {
    this._agent = agent;
    console.log(`${this.name} will be managed by agent ${this.agent.name} since now.`);
  }
}