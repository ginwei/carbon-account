
document.write('<script language=javascript src="../function/web3.js"></script>'); 

//get the formCarbonEmission data
function showCompanyResultLineChart() {
  let input_company = document.getElementById("company");
  let companyResultLineChart = document.getElementById("companyResultLineChart");

  companyResultLineChart.innerHTML = `<h4>Company Results</h4>`;

  contract.search(input_company, function(error, result){
	if (error) {console.log(error);}
	if (result) {
		companyResultLineChart.innerHTML = "the" + input_company + 
		" factory created " + result[0] + " tons of CO2 in " + result[1];}
  });

}

