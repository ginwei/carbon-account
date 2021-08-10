// Initialize Web3
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} 
else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

// Set Account
web3.eth.defaultAccount = web3.eth.accounts[0];

// Set Contract Abi
let contractAbi = [
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
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
		"constant": true,
		"inputs": [],
		"name": "emission",
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
		"constant": false,
		"inputs": [
			{
				"name": "input_mycalculate",
				"type": "string"
			},
			{
				"name": "input_material",
				"type": "uint256"
			}
		],
		"name": "calculate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
// Add Your Contract ABI here!!!

// Set Contract Address
let contractAddress = '0xaF18B6cdD9442978e6b333d50d17A5cc98300Fc3'; // Add Your Contract address here!!!

// Set the Contract
let contract = web3.eth.contract(contractAbi).at(contractAddress);

// get the current time 
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate() + '-'
today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds;


//get the formCarbonEmission data
const submitBtn = document.querySelector('#button_formCarbonEmission');
submitBtn.addEventListener("click", processFormData);

function processFormData(_e) {
  //取得 name 屬性為 form 的表單
  const form = document.forms['formCarbonEmission'];
  //取 elements 集合中 name 屬性為 @@ 的值
  const material = form.elements.material.value;
  const resource = form.elements.resource.value;
  const mycalculate = form.elements.mycalculate.value;

//save the data
contract.set(date, in_resource, mycalculate, material);

//alert
	return alert("已經保存！");

contract.search(search_resource).call(function(err, result){
	if (err) {console.log(err);}
	if (result) {
		document.getElementById("dataname").innerHTML = "the" + search_resource + 
		" factory created " + result[0] + " tons of CO2 in " + result[1];
});
}

// Display Candidate Name
/* contract.get(function(err, result) {
    $('#dataname').html('the ' + result[0] + ' factory creates ' + result[1] + ' tons of CO2 in ' + result[2]);
    }); */
