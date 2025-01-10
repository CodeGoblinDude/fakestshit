require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");


/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.0",
  networks: {
    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com", // RPC URL Holesky
      accounts: [`0x01002dc12ad4451ff323a20a00bfb1a15af5aebda0b49285080f53e36084b4a0`], // Ваш приватный ключ MetaMask
    },
    ganache: {
      url: "http://127.0.0.1:7545", // Default RPC URL for Ganache
      accounts: [
        "0x9457c4c596ed3eb86c45e28259366c0c2a8e0053640f363fad4a9a9c327ee62d", // Replace with private keys from Ganache
        "0xb6dafd7f1cb67c4ba8a72bdc69bb92629327e1d538902f42280fe923f65bd011", // Add additional keys if needed
      ],
    },
  },
};