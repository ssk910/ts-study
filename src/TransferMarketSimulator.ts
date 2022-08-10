import {Player} from "./Player";
import {PlayerBuilder} from "./PlayerBuilder";
import {Teams} from "./Teams";
import {Agent} from "./Agent";
import {FreeAgent} from "./FreeAgent";

export class TransferMarketSimulator {
  private static instance: TransferMarketSimulator;

  private constructor() {
  }

  static getInstance(): TransferMarketSimulator {
    if (!TransferMarketSimulator.instance) {
      TransferMarketSimulator.instance = new TransferMarketSimulator();
    }

    return TransferMarketSimulator.instance;
  }

  simulate(): void {
    /* initialize agents */
    const freeAgent: Agent = new FreeAgent();
    const agent_kim_dongwan: Agent = new Agent('김동완');
    const agent_james: Agent = new Agent('James');
    const agent_harry: Agent = new Agent('Harry');


    /* initialize players */
    const player_kim_daewon: Player = new PlayerBuilder('김대원')
      .setTeam(Teams.GANGWON)
      .setAgent(agent_kim_dongwan)
      .setContractPeriodMonth(24)
      .build();
    const player_ki_sungyong: Player = new PlayerBuilder('기성용')
      .setTeam(Teams.SEOUL)
      .setAgent(agent_james)
      .setContractPeriodMonth(12)
      .build();
    const player_tzvetanov: Player = new PlayerBuilder('츠베타노프')
      .setTeam(Teams.GANGWON)
      .setAgent(agent_harry)
      .setContractPeriodMonth(12)
      .build();

    /* now */
    player_kim_daewon.introduce();
    player_ki_sungyong.introduce();
    player_tzvetanov.introduce();

    /* simulates */
    player_kim_daewon.extendContract(24);
    player_tzvetanov.leave();
    player_ki_sungyong.join(Teams.INCHEON, 24);
    player_tzvetanov.managedBy(agent_james);

    /* now */
    player_kim_daewon.introduce();
    player_ki_sungyong.introduce();
    player_tzvetanov.introduce();
  }
}