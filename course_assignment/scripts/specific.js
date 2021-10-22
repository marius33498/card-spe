// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

  
 var request = new XMLHttpRequest()
 
  request.open("Get", "file:///Users/t129120/Desktop/Noroff-2019/course_assignment/card-specific.html?id=c353618d9f76c03a0c7d549f2d877f9533112d0c", true)

  request.onload = function(){
	  
  }
  
   request.send();
