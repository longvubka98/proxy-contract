const { ethers, upgrades } = require("hardhat");

const PROXY = '0x78ec5e9106b8f2e112c36f161c35b750c86a1036';

async function main() {
 const PizzaV2 = await ethers.getContractFactory("PizzaV2");
 console.log("Upgrading Pizza...");
 await upgrades.upgradeProxy(PROXY, PizzaV2);
 console.log("Pizza upgraded successfully");
}

main();
