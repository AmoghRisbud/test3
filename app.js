
const apikey="YKgJVTGb0lJAYXtBt7TmehunxaTzmLHo";
var manufact = document.getElementById("Manufacturer").value;
var model = document.getElementById("Model").value;
var year = document.getElementById("Year").value;
let url= "https://apis.solarialabs.com/shine/v1/vehicle-stats/specs/?make=${manufact}&model={model}&year={year}&apikey={apikey}";
fetch(url).then(data=>{console.log(data);})