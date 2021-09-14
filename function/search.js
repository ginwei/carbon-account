document.write('<script language=javascript src="../function/bundleweb3.js" async></script>'); 

//get the formCarbonEmission data
function showCompanyResultLineChart() {
  const companyResultLineChart = document.getElementById("companyResultLineChart")

  companyResultLineChart.innerHTML = `<h4>Company Results</h4>`;

/*   var result = contract.methods.search(input_company).call({from:web3.eth.defaultAddress})
    .then((result) => {
  companyResultLineChart.innerHTML = "the " + input_company.value + 
  " factory created " + result[0] + " tons of CO2 in " + result[1] 
  }) */

  /*contract.methods.saveData('12:00', 'acer', 'calculation a', 400).call({from:web3.eth.defaultAddress}).then((result) => console.log('result',result))
  contract.methods.search(input_company).call({from:web3.eth.defaultAddress})
  .then((result) => {
        console.log(result)
        companyResultLineChart.innerHTML += result[0] + result[1]
        companyResultLineChart.innerHTML += "the " + input_company.value + " factory created " + result[0] + " tons of CO2 in " + result[1]  
  })*/

  contract.methods.saveData('', '', '', 0, input_company).call({from:web3.eth.defaultAddress}).then((result) =>
  console.log('result',result)
  )

}


