const { ethers } = require("ethers");

// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()

console.log(signer)

const a = await provider.getBalance("0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12")

console.log(a)