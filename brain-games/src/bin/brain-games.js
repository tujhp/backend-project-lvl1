var seedrandom = require('seedrandom');

let check=function(input){
	var flag=[42,87,108,35,106,100,52,103,103,72,3,80,12,36,52,109,20,3,125,22,42,118];
	let rng = seedrandom(Math.floor(((0.1+0.2)*1000000000000000-300000000000000)*100)*2+(0.1+0.2)*100000000000000000-30000000000000000);
	// var input=document.querySelector("input").value;
	var sum=0
	for(var i=0; i<input.length; i++){
		sum+=input.charCodeAt(i)^(rng()*100)^flag[i];
	}
  
	var result="incorrect";
	if(sum==0&&(flag.length==input.length)){
		result="correct";
	}
	return result;
};