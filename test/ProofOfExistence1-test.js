
const expect = require("chai").expect;

const ProofOfExistence1 = artifacts.require("ProofOfExistence1");

contract('ProofOfExistence1', () => {
  it('should ...', async () => {
    const proofOfExistence = await ProofOfExistence1.deployed();

    expect(await proofOfExistence.proof()).to.equal("0x0000000000000000000000000000000000000000000000000000000000000000");

    const notorized = await proofOfExistence.notarize("hello world");

    expect(await proofOfExistence.proof()).to.not.equal("0x0000000000000000000000000000000000000000000000000000000000000000");

  });
  
});
