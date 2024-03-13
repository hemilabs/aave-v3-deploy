import { eHemiNetwork, IAaveConfiguration } from "./../../helpers/types";
import AaveMarket from "../aave";
import {
  strategyDAI,
  strategyUSDC,
  strategyWETH,
} from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers";
import { strategySUSD } from "./reservesConfig";

// TODO update reserveAsset and chainlinkAggregator address
export const HemiConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Hemi Aave Market",
  ATokenNamePrefix: "Hemi",
  StableDebtTokenNamePrefix: "Hemi",
  VariableDebtTokenNamePrefix: "Hemi",
  SymbolPrefix: "Hemi",
  ProviderId: 55, // TODO find out what will be the correct value
  ReservesConfig: {
    DAI: strategyDAI,
    USDC: strategyUSDC,
    WETH: strategyWETH,
  },
  ReserveAssets: {
    [eHemiNetwork.main]: {
      DAI: "",
      USDC: "",
      WETH: "",
    },
    [eHemiNetwork.testnet]: {
      DAI: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "DAI"],
    },
  },
  ChainlinkAggregator: {
    [eHemiNetwork.main]: {
      DAI: "",
      USDC: "",
      WETH: "",
    },
  },
};

export default HemiConfig;
