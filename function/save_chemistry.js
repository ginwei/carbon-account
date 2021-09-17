// get the current time 
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate() + '-'
today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds;

//get the formCarbonEmission data
const submitBtn = document.getElementById("button_formCarbonEmission");
submitBtn.addEventListener("click", processFormData);

function processFormData() {
	//取得 name 屬性為 form 的表單
	const form = document.forms['formCarbonEmission_chem'];
	
	//取 elements 集合中 name 屬性為 @@ 的值
	const chemsource_material_weight = form.elements.chemsource_material_weight.value;
	const chemsource_material_carbon = form.elements.chemsource_material_carbon.value;
	const chemout_material_weight = form.elements.chemout_material_weight.value;
	const chemout_material_carbon = form.elements.chemout_material_carbon.value;
	const resource = form.elements.resource.value;

	//save the data
	contract.methods.saveMass(date, chemsource_material_weight, chemsource_material_carbon, 
		chemout_material_weight, chemout_material_carbon, resource).send(
		{from:web3.eth.defaultAccount}
	);
	
	//alert
	alert("the data of " + resource + " is saved!");
	alert(chemsource_material_carbon);
}
