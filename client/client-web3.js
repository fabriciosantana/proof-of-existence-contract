const Web3 = require("web3");

const web3 = new Web3("http://127.0.0.1:7545")
//const web3 = new Web3("http://200.175.225.26:8545")
//const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

console.log("### CURRENT PROVIDER")
//console.log(web3.currentProvider)
console.log(web3.currentProvider.host)

console.log("### BLOCK NUMBER")
//console.log(web3.eth)
web3.eth.getBlockNumber().then(console.log)

console.log("### ACCOUNTS")
web3.eth.getAccounts().then(console.log)

web3.eth.personal.unlockAccount("0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12", "", 300).then(console.log)
//web3.eth.personal.unlockAccount("0x629ec97c617031e2e21a0b221caa8f478533a566", "fsantana", 300).then(console.log)

//web3.eth.personal.lockAccount("0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12").then(console.log)

web3.eth.sendTransaction({
    from: "0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0xB90692B5bcc1B6c8ea60120A1080077fCC3D0b43',
    value: "1000000000000000000",
    data: ""
}, 'MyPassword!').then(console.log);

let signature = ""

web3.eth.sign("Hello World", 
                "0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12", 
                (error, result) => {
                    signature = result
                    console.log("#### SIGNED MESSAGE: %s", result);
                }
            )

console.log("HASH MESSAGE: %s", web3.eth.accounts.hashMessage("Hello World"));


console.log(web3.eth.accounts.sign('Hello World', '2aff58328e6c6ae328a5489b96917d5d6af47ba684b12d15f0b4a3eb94a58222'));

/* NOT SUPPORTED
web3.eth.personal.ecRecover("Hello World",
                            "0x874b98ed867ccc84b7518e93f6aef9c6a61dbf24841bb81cf5d8191594df5c453e3fdb0e3b60c8d0098df6fc140d5fb916edefd84243aa0d6785bf9cb8199ff801" ,
                            (error, result) => {
                                console.log(error)
                                console.log(result)
                            })
*/


/* NOT IMPLEMENTED IN GANACHE CLI
web3.eth.signTransaction({
    from: "0xaF8F0eDe4854ef49Cd0F54FA8399D2E376ac8B12",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0xB90692B5bcc1B6c8ea60120A1080077fCC3D0b43',
    value: "1000000000000000000",
    data: ""
}, 'MyPassword!').then(console.log);
*/

const account = web3.eth.accounts.create()

console.log(account)

web3.eth.personal.newAccount().then(console.log)

const account1 = web3.eth.accounts.privateKeyToAccount("2aff58328e6c6ae328a5489b96917d5d6af47ba684b12d15f0b4a3eb94a58222");
console.log(account1)

/*
console.log(web3.eth.net)

*/


console.log(web3.eth.accounts.wallet)