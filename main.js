
function addtocart(data,itemnumber){
	console.log(data);
	document.getElementById("cart").innerHTML += "<button id='" + data + "'class='btn btn-success'>" + data + "</button> ";
	console.log(itemnumber.toString());
	document.getElementById(itemnumber.toString()).style.background = "green";
	document.getElementById(itemnumber.toString()).innerHTML = "Added";
	document.getElementById(itemnumber.toString()).disabled = true;
	setTimeout(function(){
		document.getElementById(itemnumber.toString()).style.background = "rgb(58,121,175)";
		document.getElementById(itemnumber.toString()).innerHTML = "Add to cart";
	},1000);
}