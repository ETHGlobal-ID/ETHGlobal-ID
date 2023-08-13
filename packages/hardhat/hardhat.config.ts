import { NamedAccounts } from "./data/NamedAccounts";
import { DeploymentNetwork } from "./utils/Constants";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "dotenv/config";
import "hardhat-contract-sizer";
import { HardhatUserConfig } from "hardhat/config";
import { MochaOptions } from "mocha";

interface EnvOptions {
  ETHEREUM_PROVIDER_URL?: string;
  ETHEREUM_ARBITRUM_ONE_PROVIDER_URL?: string;
  ETHEREUM_OPTIMISM_PROVIDER_URL?: string;
  ETHEREUM_SEPOLIA_PROVIDER_URL?: string;
  ETHEREUM_OPTIMISM_GOERLI_PROVIDER_URL?: string;
  ETHEREUM_BASE_GOERLI_PROVIDER_URL?: string;
  ETHERSCAN_API_KEY?: string;
  PROFILE?: boolean;
}

const {
  ETHEREUM_PROVIDER_URL = "",
  ETHEREUM_ARBITRUM_ONE_PROVIDER_URL = "",
  ETHEREUM_OPTIMISM_PROVIDER_URL = "",
  ETHEREUM_SEPOLIA_PROVIDER_URL = "",
  ETHEREUM_OPTIMISM_GOERLI_PROVIDER_URL = "",
  ETHEREUM_BASE_GOERLI_PROVIDER_URL = "",
  ETHERSCAN_API_KEY,
  PROFILE: isProfiling,
}: EnvOptions = process.env as any as EnvOptions;

const mochaOptions = (): MochaOptions => {
  let timeout = 600000;
  let grep;
  let reporter;

  if (isProfiling) {
    timeout = 0;
    reporter = "mocha-silent-reporter";
  }

  return {
    timeout,
    color: true,
    bail: true,
    grep,
    reporter,
  };
};

const config: HardhatUserConfig = {
  networks: {
    [DeploymentNetwork.Hardhat]: {
      accounts: {
        count: 20,
        accountsBalance: "10000000000000000000000000000000000000000000000",
      },
      allowUnlimitedContractSize: true,
      saveDeployments: false,
      live: false,
    },
    [DeploymentNetwork.Mainnet]: {
      chainId: 1,
      url: ETHEREUM_PROVIDER_URL,
      saveDeployments: true,
      live: true,
    },
    [DeploymentNetwork.ArbitrumOne]: {
      chainId: 42161,
      url: ETHEREUM_ARBITRUM_ONE_PROVIDER_URL,
      saveDeployments: true,
      live: true,
    },
    [DeploymentNetwork.Optimism]: {
      chainId: 10,
      url: ETHEREUM_OPTIMISM_PROVIDER_URL,
      saveDeployments: true,
      live: true,
    },
    [DeploymentNetwork.Sepolia]: {
      chainId: 11155111,
      url: ETHEREUM_SEPOLIA_PROVIDER_URL,
      saveDeployments: true,
      live: true,
    },
    [DeploymentNetwork.OptimismGoerli]: {
      chainId: 420,
      url: ETHEREUM_OPTIMISM_GOERLI_PROVIDER_URL,
      saveDeployments: true,
      live: true,
    },
    [DeploymentNetwork.BaseGoerli]: {
      chainId: 84531,
      url: ETHEREUM_BASE_GOERLI_PROVIDER_URL,
      saveDeployments: true,
      live: true,
    },
  },

  paths: {
    deploy: ["deploy/scripts"],
  },

  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
      metadata: {
        bytecodeHash: "none",
      },
    },
  },

  typechain: {
    target: "ethers-v6",
  },

  namedAccounts: NamedAccounts,

  verify: {
    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    },
  },

  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },

  gasReporter: {
    currency: "USD",
    enabled: isProfiling,
  },

  mocha: mochaOptions(),
};

export default config;

// import * as dotenv from "dotenv";
// dotenv.config();
// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import "hardhat-deploy";
// import "@matterlabs/hardhat-zksync-solc";
// import "@matterlabs/hardhat-zksync-verify";

// // If not set, it uses ours Alchemy's default API key.
// // You can get your own at https://dashboard.alchemyapi.io
// const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// // If not set, it uses the hardhat account 0 private key.
// const deployerPrivateKey =
//   process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// // If not set, it uses ours Etherscan default API key.
// const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

// const config: HardhatUserConfig = {
//   solidity: {
//     version: "0.8.19",
//     settings: {
//       optimizer: {
//         enabled: true,
//         // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
//         runs: 200,
//       },
//     },
//   },
//   defaultNetwork: "localhost",
//   namedAccounts: {
//     deployer: {
//       // By default, it will take the first Hardhat account as the deployer
//       default: 0,
//     },
//   },
//   networks: {
//     // View the networks that are pre-configured.
//     // If the network you are looking for is not here you can add new network settings
//     hardhat: {
//       forking: {
//         url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
//         enabled: process.env.MAINNET_FORKING_ENABLED === "true",
//       },
//     },
//     mainnet: {
//       url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     sepolia: {
//       url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     goerli: {
//       url: `https://eth-goerli.alchemyapi.io/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     arbitrum: {
//       url: `https://arb-mainnet.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     arbitrumGoerli: {
//       url: `https://arb-goerli.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     optimism: {
//       url: `https://opt-mainnet.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     optimismGoerli: {
//       url: `https://opt-goerli.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     polygon: {
//       url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     polygonMumbai: {
//       url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
//       accounts: [deployerPrivateKey],
//     },
//     zkSyncTestnet: {
//       url: "https://testnet.era.zksync.dev",
//       zksync: true,
//       accounts: [deployerPrivateKey],
//       verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
//     },
//     zkSync: {
//       url: "https://mainnet.era.zksync.io",
//       zksync: true,
//       accounts: [deployerPrivateKey],
//       verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
//     },
//   },
//   verify: {
//     etherscan: {
//       apiKey: `${etherscanApiKey}`,
//     },
//   },
// };

// export default config;
