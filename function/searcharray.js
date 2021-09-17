//get the formCarbonEmission data
async function showCompanyResultLineChart() {
  const companyResultLineChart = document.getElementById("companyResultLineChart");
  const input_company = company.value;

  companyResultLineChart.innerHTML = `<h4>Company Results</h4>`;

  let id = 1;
  while(id =< 10) {
    let result = await contract.methods.search(input_company, id).call({from:web3.eth.defaultAddress});

    companyResultLineChart.innerHTML = "the " + input_company + 
    " factory created " + result[0] + " tons of CO2 in " + result[1]
    id += 1;
  }
  
  
}