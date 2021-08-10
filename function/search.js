//get the formCarbonEmission data
function showCompanyResultLineChart() {
  let companyResultLineChart = document.getElementById("companyResultLineChart")
  const company = document.querySelector('#company').value
  companyResultLineChart.innerHTML = `<h2>Company Results</h2>`
  
  //get the LineChart function
  companyResultLineChart.innerHTML += `<p>${company}</p>`
}