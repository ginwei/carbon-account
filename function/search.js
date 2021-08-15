document.write('<script language=javascript src="../function/web3.js"></script>'); 

//get the formCarbonEmission data
function showCompanyResultLineChart() {
  const input_company = document.getElementById("company");
  const companyResultLineChart = document.getElementById("companyResultLineChart");

  //companyResultLineChart.innerHTML = `<h4>Company Results</h4>`;
  
  const result = contract.methods.search(input_company).call({from:web3.eth.defaultAddress});
  console.log(result)
  companyResultLineChart.innerHTML = "the " + input_company.value + 
" factory created " + result[0] + " tons of CO2 in " + result[1];
}

  


