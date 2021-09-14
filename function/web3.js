// Initialize Web3
var Web3 = require('web3');
var web3 = new Web3("https://localhost:8545");

// Set Account
web3.eth.defaultAccount = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';

// Set Contract Abi
var ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "input_time",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "in_material",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "in_carbon",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "out_material",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "out_carbon",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "input_source",
				"type": "string"
			}
		],
		"name": "saveMass",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "input_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "input_source",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "concentration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "flow",
				"type": "uint256"
			}
		],
		"name": "saveMeasurement",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "input_material",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "input_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "input_source",
				"type": "string"
			}
		],
		"name": "saveStandard",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "input_source",
				"type": "string"
			}
		],
		"name": "search",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Set Contract Address
var contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

// Set the Contract
var contract = new web3.eth.Contract(ABI, contractAddress);
