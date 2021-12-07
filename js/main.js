const screen=document.getElementById('screen');
function keyin(key) {
	screen.value+=key;
}
function calculate(){
	try{
		screen.value=eval(screen.value);
	}catch{
		screen.value="Math Error.";
		console.log("Math Error.");
	}
	
}
function del(){
	let newval="";
	for(let i =0;i<screen.value.length-1;i++){
	 newval+= screen.value[i];
	}
	screen.value=newval;
}