// get the current time 
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate() + '-'
today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds;

let spinners = document.querySelector('.spinners');
var process;

//get the formCarbonEmission data
const submitBtnstart = document.getElementById("button_mea_start");
submitBtnstart.addEventListener("click", processData);

const submitBtnstop = document.getElementById("button_mea_stop");
submitBtnstop.addEventListener("click", function(){
    spinners.innerHTML = '';
});

function processData() {
    //取得 name 屬性為 form 的表單
    /* const form = document.forms['formCarbonEmission_mea'];
        
    //取 elements 集合中 name 屬性為 @@ 的值
    var concentration = form.elements.concentration.value;
    const volume = form.elements.volume.value;
    const resource = form.elements.resource.value; 

    contract.methods.saveMeasurement(date, resource, concentration, volume).send(
        {from:web3.eth.defaultAccount}
    )*/
    spinners.innerHTML = `<div class="spinner-grow" style="width: 5rem; height: 5rem;"></div>`
}

