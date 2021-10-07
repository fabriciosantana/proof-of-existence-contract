const ProofOfExistence1 = artifacts.require("ProofOfExistence1");
const ProofOfExistence2 = artifacts.require("ProofOfExistence1");

module.exports = function (deployer) {
  deployer.deploy(ProofOfExistence2);
};
