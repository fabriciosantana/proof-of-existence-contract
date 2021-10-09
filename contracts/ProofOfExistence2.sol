// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProofOfExistence2 {
  constructor()  {
  }

  // state
  bytes32[] public proofs;

  // store a proof of existence in the contract state
  // *transactional function*
  function storeProof(bytes32 proof) public {
    proofs.push(proof);
  }

  // calculate and store the proof for a document
  // *transactional function*
  function notarize(string memory document) external {
    bytes32 proof = proofFor(document);
    storeProof(proof);
  }
  // helper function to get a document's sha256
  // *read-only function*
  function proofFor(string memory document) public pure returns (bytes32) {
    return sha256(abi.encode(document));
  }

  // check if a document has been notarized
  // *read-only function*
  function checkDocument(string memory document) public view returns (bool) {
    bytes32 proof = proofFor(document);
    return hasProof(proof);
  }
  // returns true if proof is stored
  // *read-only function*
  function hasProof(bytes32 proof) internal view returns (bool) {
    for (uint256 i = 0; i < proofs.length; i++) {
      if (proofs[i] == proof) {
        return true;
      }
    }
    return false;
  }

}
