// Initialize Web3
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
/* if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} 
else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
} */

// Set Account
web3.eth.defaultAccount = web3.eth.accounts[0];

// Set Contract Abi
var ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "input_source",
				"type": "string"
			}
		],
		"name": "search",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
		"constant": false,
		"inputs": [
			{
				"name": "input_time",
				"type": "string"
			},
			{
				"name": "input_source",
				"type": "string"
			},
			{
				"name": "input_mycalculate",
				"type": "string"
			},
			{
				"name": "input_material",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// Set Contract Address
var contractAddress = '0x0BE49F7eE2144803696e97BD9DbaB082D0630d97'; // Add Your Contract address here!!!

// Set the Contract
var contract = web3.eth.contract(ABI).at(contractAddress);