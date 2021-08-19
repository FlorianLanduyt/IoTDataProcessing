var DataProcess = artifacts.require("./DataProcess.sol"); // artifacts --> specific to truffle 

module.exports = function(deployer) {
  deployer.deploy(DataProcess);
};
