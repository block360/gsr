import { ContractDesc } from "@oasisdex/web3-context";
import { Abi } from "helpers/types";
import { keyBy } from "lodash";
import getConfig from "next/config";
import { Dictionary } from "ts-essentials";

export function contractDesc(abi: Abi[], address: string): ContractDesc {
  return { abi, address };
}

const infuraProjectId =
  process.env.INFURA_PROJECT_ID ||
  getConfig()?.publicRuntimeConfig?.infuraProjectId ||
  "";
const etherscanAPIKey =
  process.env.ETHERSCAN_API_KEY ||
  getConfig()?.publicRuntimeConfig?.etherscan ||
  "";

const tokensMainnet = {} as Dictionary<ContractDesc>;

const protoMain = {
  id: "1",
  name: "main",
  label: "Mainnet",
  infuraUrl: `https://mainnet.infura.io/v3/${infuraProjectId}`,
  infuraUrlWS: `wss://mainnet.infura.io/ws/v3/${infuraProjectId}`,

  tokens: tokensMainnet,
  tokensMainnet: tokensMainnet,

  etherscan: {
    url: "https://etherscan.io",
    apiUrl: "https://api.etherscan.io/api",
    apiKey: etherscanAPIKey || "",
  },
  ethtx: {
    url: "https://ethtx.info/mainnet",
  },
};

export type NetworkConfig = typeof protoMain;

const main: NetworkConfig = protoMain;
const goerli: NetworkConfig = {
  id: "5",
  name: "goerli",
  label: "goerli",
  infuraUrl: `https://goerli.infura.io/v3/${infuraProjectId}`,
  infuraUrlWS: `wss://goerli.infura.io/ws/v3/${infuraProjectId}`,
  tokens: {},
  tokensMainnet: protoMain.tokensMainnet,

  etherscan: {
    url: "https://goerli.etherscan.io",
    apiUrl: "https://api-goerli.etherscan.io/api",
    apiKey: etherscanAPIKey || "",
  },
  ethtx: {
    url: "https://ethtx.info/goerli",
  },
};

const hardhat: NetworkConfig = {
  ...protoMain,
  id: "2137",
  name: "hardhat",
  label: "Hardhat",
  infuraUrl: `https://testchain-dev.gsuprotocol.io/rpc`,
  infuraUrlWS: `wss://testchain-dev.gsuprotocol.io/wss`,
};

export const networksById = keyBy([main, hardhat, goerli], "id");
export const networksByName = keyBy([main, hardhat, goerli], "name");

export const dappName = "GSR";
export const pollingInterval = 12000;
