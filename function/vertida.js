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
	if (categoryIndus == "chemistry industry"){window.location.href="../views/chemistry_calculate.html";} 
	if (categoryIndus == "oil industry"){window.location.href="../views/oil_calculate.html";}
	if (categoryIndus == "steel industry"){window.location.href="../views/chemistry_calculate.html";}
}

//回上頁時重新整理
if(window.name != "fresh"){
	location.reload();
	window.name = "fresh";
 }else{
	window.name = "";
 }