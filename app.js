


function getdata(){
    fetch("http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e055443a32f0471398420ff3ca57bd4d")
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}
//setInterval(getdata,1800000);*/
