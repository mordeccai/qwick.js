function Maths(){
	//calculate function
	this.calc = function(calculations){
		return eval(calculations)
	}
	//Get fibonacci
	this.fib = function(num){
		if(num <= 0){
			return 1}
		else{ 
			return this.fib(num - 1) + this.fib(num - 2)
		}
	}
	//Calculate median
	this.median = function(values){
		values.sort( function(a,b) {return a - b;} );
    	var half = Math.floor(values.length/2);
    	if(values.length % 2)
        	return values[half];
    	else
			return (values[half-1] + values[half]) / 2.0;
	}
	//Calculate Average
	this.average = function(values){
		var total = 0;
			for(var i = 0; i < values.length; i++) {
				total += values[i];
			}
		return total / values.length
	}
	//Calculate Mean
	this.mean =function(){
		var total = 0;
			for(var i = 0; i < values.length; i++) {
				total += values[i];
			}
		return total / values.length
	}
	//Calculate Sum
	this.sum =function(values){
		var total = 0;
		for (var i=0;i<values.length;i++){
			total += values[i];
		}
		return total
	}
	//Calculate Sum
}

var math = new Maths();