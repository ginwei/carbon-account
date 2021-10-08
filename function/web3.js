// Initialize Web3
var web3 = new Web3("HTTP://127.0.0.1:7545");

// Set Account
web3.eth.defaultAccount = '0x91345e10F3D4992A9A70277DD2a07E3d935824C6';

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
		"outputs": [],
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
		"outputs": [],
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
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "input_source",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
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
var contractAddress = '0xa50Dce1813E51a70a747dc8FBa1f0aA8AA3BAc7b';

// Set the Contract
var contract = new web3.eth.Contract(ABI, contractAddress);
