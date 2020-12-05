
carurl='https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?ManufacturerType=Intermediate&format=json';
results=[];
output="";
$.getJSON(carurl,function(data){
	console.log(data);
	results=data.Results;
	for(let i=0;i<results.length;i++){
		const manufacturer=results[i].Mfr_Name;
	    output="<options >"+manufacturer+"</options>";
		$("#listcar").html(output);
		

	}
});