// Initialize Web3
var web3 = new Web3('https://besu-project-f29e43939c-node-065403cc.baas.twcc.ai');

// Set Account
web3.eth.defaultAccount = '0xacA6C18CCc3f6AeCB127B47209f66B71e93D9781';

// Set Contract Abi
var ABI = [
	{"inputs":[{"internalType":"string","name":"input_time","type":"string"},{"internalType":"uint256","name":"in_material","type":"uint256"},{"internalType":"uint256","name":"in_carbon","type":"uint256"},{"internalType":"uint256","name":"out_material","type":"uint256"},{"internalType":"uint256","name":"out_carbon","type":"uint256"},{"internalType":"string","name":"input_source","type":"string"}],"name":"saveMass","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"input_time","type":"string"},{"internalType":"string","name":"input_source","type":"string"},{"internalType":"uint256","name":"concentration","type":"uint256"},{"internalType":"uint256","name":"flow","type":"uint256"}],"name":"saveMeasurement","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"input_material","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"string","name":"input_time","type":"string"},{"internalType":"string","name":"input_source","type":"string"}],"name":"saveStandard","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"input_source","type":"string"}],"name":"search","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"users","outputs":[{"internalType":"string","name":"time","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"uint256","name":"emission","type":"uint256"}],"stateMutability":"view","type":"function"}];

// Set Contract Address
var contractAddress = '0x7be62268f30571f877dFFb6cfA05e8362cDF5A95';

// Set the Contract
var contract = new web3.eth.Contract(ABI, contractAddress);
