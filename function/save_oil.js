// get the current time
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate(); 
/* var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds;
var date = year + time; */


//get the formCarbonEmission data
const submitBtn = document.getElementById("button_formCarbonEmission");
submitBtn.addEventListener("click", processFormData);

function processFormData() {
	//取得 name 屬性為 form 的表單
	const form = document.forms['formCarbonEmission'];
	
	//取 elements 集合中 name 屬性為 @@ 的值
	var category = form.elements.category.value;
	const weight = form.elements.weight.value;
	const resource = form.elements.resource.value;
	var material;

	//save the data
	if (category === "Crude oil") material = 1; //cause of solidity, the 1 here represents 0.1
    if (category === "Diesel oil") material = 2; //0.2
    if (category === "Fuel oil") material = 3; //0.3

	contract.methods.saveStandard(material, weight, date, resource).send(
		{from: web3.eth.defaultAccount}
	);

	alert("the data of " + resource + " is saved!");
}
