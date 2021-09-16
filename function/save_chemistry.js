// get the current time 
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate() + '-'
today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds;


//get the formCarbonEmission data
const submitBtn = document.getElementById("button_formCarbonEmission");
submitBtn.addEventListener("click", processFormData);

function processFormData() {
	//取得 name 屬性為 form 的表單
	const form = document.forms['formCarbonEmission'];
	
	//取 elements 集合中 name 屬性為 @@ 的值
	const material = form.elements.material.value;
	const resource = form.elements.resource.value;
	const mycalculate = form.elements.mycalculate.value;

	//save the data
	contract.methods.saveData(date, resource, mycalculate, material, '').send(
		{from:web3.eth.defaultAccount}
	)
	
	//alert
	alert("saved!");
}
