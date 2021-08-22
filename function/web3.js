// Initialize Web3
var web3 = new Web3('http://localhost:7545');

// Set Account
web3.eth.defaultAccount = '0x6b89a8a4130BD1d0b4e514EA217d11a527C8C3FB';

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
			},
			{
				"internalType": "string",
				"name": "search_source",
				"type": "string"
			}
		],
		"name": "saveData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "emission",
						"type": "uint256"
					}
				],
				"internalType": "struct Storage.UserInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
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
				"internalType": "uint256",
				"name": "emission",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Set Contract Address
var contractAddress = '0xD7d1c998101ea2fa8d445f6347F8f70A357324a4';

// Set the Contract
var contract = new web3.eth.Contract(ABI, contractAddress);
