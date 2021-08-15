// Initialize Web3
var web3 = new Web3('http://localhost:7545');

// Set Account
web3.eth.defaultAccount = '0x16E15b184F39c4fBE1A4B29052CE018c5748610B';

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
				"internalType": "string",
				"name": "input_source",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "input_mycalculate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "input_material",
				"type": "uint256"
			}
		],
		"name": "saveData",
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
		"inputs": [],
		"name": "test",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Set Contract Address
var contractAddress = '0x4c25DA37bcB97d976B2Cd905E8016E5A0E6A4BCC'; // Add Your Contract address here!!!

// Set the Contract
var contract = new web3.eth.Contract(ABI, contractAddress);