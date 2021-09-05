document.write('<script language=javascript src="../function/web3.js" async></script>');

//get the formCarbonEmission data
const submitBtn1 = document.getElementById("button_formsaveIndustry");
submitBtn1.addEventListener("click", FormDataIndustry);

/* document.querySelector('#button_formsearchIndustry').click(function(){
	window.open('../views/search.html')
}) */

function FormDataIndustry() {
	//取得 name 屬性為 form 的表單
	const form1 = document.forms['formsaveIndustry'];

	//取 elements 集合中 name 屬性為 @@ 的值
	var categoryIndus = form1.elements.indus_category.value;

	//save the data
	if (categoryIndus == "chemistry industry"){window.location.href="../views/save_chemistry.html";} 
	if (categoryIndus == "oil industry"){window.location.href="../views/save_oil.html";}
	if (categoryIndus == "steel industry"){window.location.href="../views/save_chemistry.html";}
}
