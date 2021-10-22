// refer to question 3 before development starts for scope document

 function changeWord() {
	 var word = document.getElementById("aboutText").innerHTML;
	 var changeText = word.replace(/Magic/g, "Something",function(x){
		 return x.toUpperCase();
	 });
	document.getElementById("aboutText").innerHTML = changeText;
 }


  function addText(){
	  var click = document.getElementById("moreInfoContent");
	  if(click.style.display === "none"){
		  click.style.display = "block";
  }else{
	  click.style.display = "none";
  }
  }

