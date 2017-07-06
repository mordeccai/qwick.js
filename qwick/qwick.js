//
function qjs(){
	var self = this;
	//Including library files
	this.include = function(filename){
		if(!(filename.includes('/') || filename.includes('.'))){
			//If / and . is not in the string
			var included = document.createElement('script');
			included.src = 'quick/library/'+filename+'/index.js';
			document.head.appendChild(included);
		} 
		else{
			//If / or|and . are in the string
			var included = document.createElement('script');
			included.src = filename;
			document.head.appendChild(included);
		}
		this.css = function(){
			alert('Css includes')
		}
	}
	//Import css style files
	this.importStyle = function(path,id){
		if(arguments.length == 1)
		{
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = path;
			link.media = 'all';
			head.appendChild(link);
		}
		else if(arguments.length > 1)
		{
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = path;
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = id;
			link.media = 'all';
			head.appendChild(link);
		}

	}
	//Add page styles
	this.style = function(cssStyles){
		var myCss = document.createElement('style');
		myCss.type = 'text/css';
		myCss.innerHTML = cssStyles;
		document.getElementsByTagName('head')[0].appendChild(myCss)
	}
	
	//Render html to 
 	this.render = function(Obj){
			// s - is for selected 
			if(Obj.replace){
					if(typeof Obj.content === "function"){
							var s = document.querySelectorAll(Obj.elem);
								for(var i=0;i<s.length;i++){
								s[i].innerHTML = Obj.content();
							}
					}else{
							var s = document.querySelectorAll(Obj.elem);
								for(var i=0;i<s.length;i++){
								s[i].innerHTML = Obj.content;
								}
					}
			}
			else{
			if(typeof Obj.content === "function"){
					var s = document.querySelectorAll(Obj.elem);
							for(var i=0;i<s.length;i++){
							s[i].innerHTML += Obj.content();
						}
					}else{
							var s = document.querySelectorAll(Obj.elem);
								for(var i=0;i<s.length;i++){
								s[i].innerHTML += Obj.content;
								}
					}
			}
		
	}
	//Create a class component  
 	this.createComponent = function(Obj){
			// s - is for selected
			window.state = {'id':'Mordex123'}
			for(x in Obj){
				
				if(x != 'template'){
			    	window[x] = Obj[x]
				}
			}
		/*if('event' in Obj){
			for(x in Obj.event){
			
					var s = document.querySelectorAll(Obj.event[x].elem)

					for(var i=0;i<s.length;i++){
						s[i].addEventListener(Obj.event[x], Obj.event[x].func)
					}
			}
		}*/
			return Obj.template;
		
	}
	//quick main function - Gets loaded after the window is loaded; 
 	this.main = function(callback){
		window.onload =()=>{
			//Main
			callback(0)
		}
	}
	//quick event listener function; 
 	this.on = function(event,element,callback){
		 if(element != 'window'){
		var s = document.querySelectorAll(element)
		for(var i=0;i<s.length;i++){
			s[i].addEventListener(event, callback)
		}}
		else{
			// If it is the window element
			window.addEventListener(event, callback)
		}
		
	}
}
var qwick = new qjs()
