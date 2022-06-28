require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "b3d3aaf4f3a8b765b3c4e4afa533b4af4a77b517b465c47e4673a224b2944286";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 6688
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 10000000000,
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 10000000000,
      accounts: [privateKey]
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/efaa6552ca9445c6b3bbae274901f11b",
      accounts: [privateKey]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/efaa6552ca9445c6b3bbae274901f11b`,
      accounts: [privateKey],
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/efaa6552ca9445c6b3bbae274901f11b',
      accounts: [privateKey],
    }
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: '291EV4XF2H1PQSXZCSCBP4I3ABCGQS9659'
  }
};