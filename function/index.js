document.write('<script src="../function/web3.js"></script>');

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
	contract.set(date, resource, mycalculate, material);

	//alert
	return alert("it've been saved! ");
}

// Display Candidate Name
/* contract.get(function(err, result) {
    $('#dataname').html('the ' + result[0] + ' factory creates ' + result[1] + ' tons of CO2 in ' + result[2]);
    }); */
