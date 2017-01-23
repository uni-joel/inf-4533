function longueur(mot){
	return mot.length;
}

function effacer(lettre, mot){
	mot = mot.replace(lettre, "");
	return mot;
}

function second(array){
	array = array.sort();
	return array[1];
}

function compose(f, g){
	var value = 16;
	value = f(value);
	value = g(value);
	return value;
}

function map(f, array){
	var arr = array;
	array.forEach(function(val, key){
		arr[key] = f(val);
	});
	return arr;
}

function fmap(array, x){
	var finalval = x;
	array.forEach(function(func){
		finalval = func(finalval);
	});
	return finalval;
}