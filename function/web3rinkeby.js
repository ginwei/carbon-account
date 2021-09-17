// Initialize Web3
window.web3 = new Web3(web3.currentProvider);

// Set Account
window.web3.eth.defaultAccount = '0x9437Ca35f1DBa6e0a2C80ff638B1903ef0315c5F';

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
				"internalType": "string",
				"name": "time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "source",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "emission",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Set Contract Address
var contractAddress = '0x434aC61de7876a21a2fc2A099Fe630F53DBE575b';

// Set the Contract
var contract = new window.web3.eth.Contract(ABI, contractAddress);
