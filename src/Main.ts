import {TransferMarketSimulator} from "./TransferMarketSimulator";

(function () {
  if (global.window) {
    window['marketSimulator'] = window['marketSimulator'] || TransferMarketSimulator.getInstance();
  } else {
    TransferMarketSimulator.getInstance().simulate();
  }
})();