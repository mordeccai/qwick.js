/*
Quick.js FileSystem module.
Created by Tito Modeccai

*/

function FileSystem(){
	this.open = function(path,flag,callback){
		if(flag == 'r'){ // If the flag if r - read file only
		   var xmlhttp = new XMLHttpRequest();
		   xmlhttp.open('GET',path, true);
		   xmlhttp.onreadystatechange=function(){
				 if (xmlhttp.readyState==4 && xmlhttp.status==200){
				   // Ajax result
				   var string = xmlhttp.responseText;
				   callback(string)

				 }
		   }
		   xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		   xmlhttp.send();
		}
	}
}

var fs = new FileSystem();