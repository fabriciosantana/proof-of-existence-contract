const Web3 = require("web3");

const web3 = new Web3("http://127.0.0.1:7545")



let jsonContract = require("../build/contracts/ProofOfExistence1.json")

//console.log(jsonContract)

let contract = new web3.eth.Contract(jsonContract.abi, "0xf627d43a875a23Cc010e2bd34B0ae859D401CABe");


console.log(contract.defaultAccount)

console.log(contract.defaultBlock)
console.log(contract.defaultHardfork)
console.log(contract.defaultChain)
console.log(contract.defaultCommon)
console.log(contract.transactionBlockTimeout)
console.log(contract.transactionConfirmationBlocks)

console.log(contract.transactionPollingTimeout)

console.log(contract.options)
console.log(contract.options.address)


//console.log(contract.methods.proof())

console.log(contract.methods.notarize('An amazing idea')
                .send({
                    from: "0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12",
                    //gasPrice: "210000",
                    //gas: 20000000000000,
                    //value: 550
                }, 
                    (err, result) => {
                        console.log(result)
                        console.log(err)
                    }).then(console.log))


console.log(contract.methods.proof()
                    .call({
                        from: "0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12"}, 
                        (err, result) => {
                            console.log("Result: ", result)
                            console.log("Error: ", err)
                        }))


console.log(contract.methods.notarize("Hello World")
                        .estimateGas({
                            from: "0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12"}, 
                            (err, gasEstimation) => {
                                console.log("Estimated Gas: ", gasEstimation)
                                console.log(err)
                            }))
        


