const Web3 = require('web3')  
const Tx = require('ethereumjs-tx')
var express = require("express");


var app = express();


app.get('/SendTS/:Ts111GDP_Indi_Code/:Ts111GDP_x2000A/:Ts111GDP_x2001A/:Ts111GDP_x2002A/:Ts112GDP_Indi_Code/:Ts112GDP_x2000A/:Ts112GDP_x2001A/:Ts112GDP_x2002A/:Ts134GDP_Indi_Code/:Ts134GDP_x2000A/:Ts134GDP_x2001A/:Ts134GDP_x2002A', function(req, res){
    


    
let web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/fc0f8170e6d743df854d3aadc847d5dc"
    )
)


const account = '0xb07428Bc8315A4db9e96182197B3307Fa57Ec050'; //Your account address
//const privateKey = '37707e92400802ec6a82e6e03f5ba17bd01dc629b46bf8b0d8caacbaff0c9146';
const contractAddress = '0x90e2Da751BFB03F84222Bbc8A2FCf503b9679E43'; // Deployed manually


const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "Ts111GDP_Indi_Code",
				"type": "string"
			},
			{
				"name": "Ts111GDP_x2000A",
				"type": "string"
			},
			{
				"name": "Ts111GDP_x2001A",
				"type": "string"
			},
			{
				"name": "Ts111GDP_x2002A",
				"type": "string"
			},
			{
				"name": "Ts112GDP_Indi_Code",
				"type": "string"
			},
			{
				"name": "Ts112GDP_x2000A",
				"type": "string"
			},
			{
				"name": "Ts112GDP_x2001A",
				"type": "string"
			},
			{
				"name": "Ts112GDP_x2002A",
				"type": "string"
			},
			{
				"name": "Ts134GDP_Indi_Code",
				"type": "string"
			},
			{
				"name": "Ts134GDP_x2000A",
				"type": "string"
			},
			{
				"name": "Ts134GDP_x2001A",
				"type": "string"
			},
			{
				"name": "Ts134GDP_x2002A",
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
			},
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
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getTs2",
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
		"name": "TsContractsV1",
		"outputs": [
			{
				"name": "Indi_Code",
				"type": "string"
			},
			{
				"name": "x2000A",
				"type": "string"
			},
			{
				"name": "x2001A",
				"type": "string"
			},
			{
				"name": "x2002A",
				"type": "string"
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
		"name": "TsContractsV2",
		"outputs": [
			{
				"name": "Indi_Code",
				"type": "string"
			},
			{
				"name": "x2000A",
				"type": "string"
			},
			{
				"name": "x2001A",
				"type": "string"
			},
			{
				"name": "x2002A",
				"type": "string"
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
		"name": "TsContractsV3",
		"outputs": [
			{
				"name": "Indi_Code",
				"type": "string"
			},
			{
				"name": "x2000A",
				"type": "string"
			},
			{
				"name": "x2001A",
				"type": "string"
			},
			{
				"name": "x2002A",
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
var privateKey = new Buffer('5536f30cb1b63c332d4a3baa23afe6e18ee113f97d94dad0ca7de3c69fbd4ea8', 'hex')  

var functionName = 'addTs'  
    var types = ['string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string']  
    var args = [req.params.Ts111GDP_Indi_Code, req.params.Ts111GDP_x2000A, req.params.Ts111GDP_x2001A, req.params.Ts111GDP_x2002A, req.params.Ts112GDP_Indi_Code, req.params.Ts112GDP_x2000A, req.params.Ts112GDP_x2001A, req.params.Ts112GDP_x2002A, req.params.Ts134GDP_Indi_Code, req.params.Ts134GDP_x2000A, req.params.Ts134GDP_x2001A, req.params.Ts134GDP_x2002A]  
var fullName = functionName + '(' + types.join() + ')'  
var signature = CryptoJS.SHA3(fullName,{outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8)  
var dataHex = signature + coder.encodeParams(types, args)  
var data = '0x'+dataHex  




var nonce = web3.toHex(web3.eth.getTransactionCount(account))  
var gasPrice = web3.toHex(web3.eth.gasPrice)  
var gasLimitHex = web3.toHex(400000)
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
        "https://rinkeby.infura.io/v3/fc0f8170e6d743df854d3aadc847d5dc"
    )
)


const account = '0xb07428Bc8315A4db9e96182197B3307Fa57Ec050'; //Your account address
//const privateKey = '37707e92400802ec6a82e6e03f5ba17bd01dc629b46bf8b0d8caacbaff0c9146';
const contractAddress = '0x90e2Da751BFB03F84222Bbc8A2FCf503b9679E43'; // Deployed manually


const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "Ts111GDP_Indi_Code",
				"type": "string"
			},
			{
				"name": "Ts111GDP_x2000A",
				"type": "string"
			},
			{
				"name": "Ts111GDP_x2001A",
				"type": "string"
			},
			{
				"name": "Ts111GDP_x2002A",
				"type": "string"
			},
			{
				"name": "Ts112GDP_Indi_Code",
				"type": "string"
			},
			{
				"name": "Ts112GDP_x2000A",
				"type": "string"
			},
			{
				"name": "Ts112GDP_x2001A",
				"type": "string"
			},
			{
				"name": "Ts112GDP_x2002A",
				"type": "string"
			},
			{
				"name": "Ts134GDP_Indi_Code",
				"type": "string"
			},
			{
				"name": "Ts134GDP_x2000A",
				"type": "string"
			},
			{
				"name": "Ts134GDP_x2001A",
				"type": "string"
			},
			{
				"name": "Ts134GDP_x2002A",
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
			},
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
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getTs2",
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
		"name": "TsContractsV1",
		"outputs": [
			{
				"name": "Indi_Code",
				"type": "string"
			},
			{
				"name": "x2000A",
				"type": "string"
			},
			{
				"name": "x2001A",
				"type": "string"
			},
			{
				"name": "x2002A",
				"type": "string"
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
		"name": "TsContractsV2",
		"outputs": [
			{
				"name": "Indi_Code",
				"type": "string"
			},
			{
				"name": "x2000A",
				"type": "string"
			},
			{
				"name": "x2001A",
				"type": "string"
			},
			{
				"name": "x2002A",
				"type": "string"
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
		"name": "TsContractsV3",
		"outputs": [
			{
				"name": "Indi_Code",
				"type": "string"
			},
			{
				"name": "x2000A",
				"type": "string"
			},
			{
				"name": "x2001A",
				"type": "string"
			},
			{
				"name": "x2002A",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

var contractaddress = '0x90e2Da751BFB03F84222Bbc8A2FCf503b9679E43';
web3.eth.defaultAccount = web3.eth.accounts[0];
var myAbi = web3.eth.contract(abi);
var myfunction = myAbi.at(contractaddress);

myfunction.getTs.call(req.params.index,function (err, xname) {
    if (err) { console.log(err) }
    if (xname) {
        //display value on the webpage
		myfunction.getTs2.call(req.params.index,function (err1, xname1)
		{
			if (err1) { console.log(err1)}
			if (xname1){

				res.jsonp({indycode: xname[0].toString(), ts2000A: xname[1].toString(), ts2001A: xname[2].toString(), ts2002A: xname[3].toString(), ts2003A: xname[4].toString(), ts2004A: xname[5].toString(), ts2005A: xname1[0].toString(), ts2006A: xname1[1].toString(), ts2007A: xname1[2].toString() });

			}

		});
		
       
    }
});


    //res.send("Done");

});



app.listen(3000, () => {
    console.log("Server running on port 3000");
   });
