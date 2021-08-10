//get the formCarbonEmission data
function showCompanyResultLineChart() {
  let companyResultLineChart = document.getElementById("companyResultLineChart")
  const company = document.querySelector('#company').value
  companyResultLineChart.innerHTML = `<h2>Company Results</h2>`
  
  //get the LineChart function
  companyResultLineChart.innerHTML += `<p>${company}</p>`
}

contract.search(search_resource).call(function(err, result){
	if (err) {console.log(err);}
	if (result) {
		document.getElementById("dataname").innerHTML = "the" + search_resource + 
		" factory created " + result[0] + " tons of CO2 in " + result[1];
});