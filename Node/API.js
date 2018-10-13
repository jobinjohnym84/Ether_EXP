const Web3 = require('web3')  
const Tx = require('ethereumjs-tx')
var express = require("express");
var cors = require('cors');

var app = express();


app.get('/SendTS/:ctycode/:tsYear/:tsValue', function(req, res){
    


    
let web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/v3/cbf5d244781843ec9e9d27beb26aef39"
    )
)


const account = '0xCe35B218f28A275457B9e7eFD1257c08D201C9eC'; //Your account address
//const privateKey = '37707e92400802ec6a82e6e03f5ba17bd01dc629b46bf8b0d8caacbaff0c9146';
const contractAddress = '0xf26530942e838d4d4f190ae4508e89b0ae8a013c'; // Deployed manually


const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ctyry_Code",
                "type": "string"
            },
            {
                "name": "_Year",
                "type": "string"
            },
            {
                "name": "_Ts",
                "type": "string"
            }
        ],
        "name": "addTs",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getTs",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTsCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "TsContracts",
        "outputs": [
            {
                "name": "ctyry_Code",
                "type": "string"
            },
            {
                "name": "Year",
                "type": "string"
            },
            {
                "name": "Ts",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

let contract = web3.eth.contract(abi).at(contractAddress)  
var coder = require('web3/lib/solidity/coder')  
var CryptoJS = require('crypto-js')  
var privateKey = new Buffer('37707e92400802ec6a82e6e03f5ba17bd01dc629b46bf8b0d8caacbaff0c9146', 'hex')  

var functionName = 'addTs'  
var types = ['string','string','string']  
var args = [req.params.ctycode, req.params.tsYear, req.params.tsValue]  
var fullName = functionName + '(' + types.join() + ')'  
var signature = CryptoJS.SHA3(fullName,{outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8)  
var dataHex = signature + coder.encodeParams(types, args)  
var data = '0x'+dataHex  




var nonce = web3.toHex(web3.eth.getTransactionCount(account))  
var gasPrice = web3.toHex(web3.eth.gasPrice)  
var gasLimitHex = web3.toHex(300000)
var rawTx = { 'nonce': nonce, 'gasPrice': gasPrice, 'gasLimit': gasLimitHex, 'from': account, 'to': contractAddress, 'data': data}  


console.log("Getting gas estimate456");

var tx = new Tx(rawTx)  
tx.sign(privateKey)  
var serializedTx = '0x'+tx.serialize().toString('hex')  
web3.eth.sendRawTransaction(serializedTx, function(err, txHash){ console.log(err, txHash) })   

console.log("Getting gas estimate_End");

res.send("Done");


  });
  






  app.get('/GetTS/:index', function(req, res){


    
let web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/v3/cbf5d244781843ec9e9d27beb26aef39"
    )
)


const account = '0xCe35B218f28A275457B9e7eFD1257c08D201C9eC'; //Your account address
//const privateKey = '37707e92400802ec6a82e6e03f5ba17bd01dc629b46bf8b0d8caacbaff0c9146';
const contractAddress = '0xf26530942e838d4d4f190ae4508e89b0ae8a013c'; // Deployed manually


const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ctyry_Code",
                "type": "string"
            },
            {
                "name": "_Year",
                "type": "string"
            },
            {
                "name": "_Ts",
                "type": "string"
            }
        ],
        "name": "addTs",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getTs",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTsCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "TsContracts",
        "outputs": [
            {
                "name": "ctyry_Code",
                "type": "string"
            },
            {
                "name": "Year",
                "type": "string"
            },
            {
                "name": "Ts",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

var contractaddress = '0xf26530942e838d4d4f190ae4508e89b0ae8a013c';
web3.eth.defaultAccount = web3.eth.accounts[0];
var myAbi = web3.eth.contract(abi);
var myfunction = myAbi.at(contractaddress);

myfunction.getTs.call(req.params.index,function (err, xname) {
    if (err) { console.log(err) }
    if (xname) {
        //display value on the webpage
        
        res.jsonp({ctycode: xname[0].toString(), tsYear: xname[1].toString(), tsValue: xname[2].toString()});
    }
});


    //res.send("Done");

});

app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });

