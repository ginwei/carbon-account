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
/* document.write('<script language=javascript src="../function/web3.js"></script>'); */

console.log(web3.eth.defaultAccount);

// get the current time
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate() + '-'
today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds;


//get the formCarbonEmission data
const submitBtn = document.getElementById("button_formCarbonEmission");
if (submitBtn){
	submitBtn.addEventListener('click', processFormData);
}

function processFormData() {
	//取得 name 屬性為 form 的表單
	const form = document.forms['formCarbonEmission'];
	//取 elements 集合中 name 屬性為 @@ 的值
	const material = form.elements.material.value;
	const resource = form.elements.resource.value;
	const mycalculate = form.elements.mycalculate.value;

	//save the data
	contract.set(date, resource, mycalculate, material);

	//alert
	alert("it've been saved! ");
}

// Display Candidate Name
/* contract.get(function(err, result) {
    $('#dataname').html('the ' + result[0] + ' factory creates ' + result[1] + ' tons of CO2 in ' + result[2]);
    }); */
