//get the formCarbonEmission data
function showCompanyResultLineChart() {
  const companyResultLineChart = document.getElementById("companyResultLineChart")

  companyResultLineChart.innerHTML = `<h4>Company Results</h4>`;

  var result = contract.methods.search(input_company).call({from:web3.eth.defaultAddress})
    .then((result) => {
  companyResultLineChart.innerHTML = "the " + input_company.value + 
  " factory created " + result[0] + " tons of CO2 in " + result[1]
  })
}