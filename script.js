//your JS code here. If required.
function mapLetters(str) {
	let obj = {};//in object duplicate keys are not allowed
	for(let i = 0; i< str.length; i++){
		let ch = str[i];// or str.charAt(i)
		if(obj[ch] == undefined){//if this character is not present
			obj[ch] = [i];
//put the value as array, key also =>> add as obj[ch] not obj.ch cuz 'ch' varaible is not present in obj....its actually storing characters			
		}else{
			obj[ch].push(i);//if character already present, push ith index also
		}
	}
	return obj;
}


const str = prompt("Enter str: ");
alert(JSON.stringify(mapLetters(str)));