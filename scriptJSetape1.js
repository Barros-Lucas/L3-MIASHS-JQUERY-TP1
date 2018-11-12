window.addEventListener('load',initEvent);

function initEvent(){
	document.querySelector("#bt").addEventListener('click',initBt);
}

function initBt(){
	let reqGetLines = new XMLHttpRequest();

  reqGetLines.open("GET", "https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb", true);

  reqGetLines.onreadystatechange = function (){

  	if (reqGetLines.readyState == 4 && reqGetLines.status == 200) {
  	 let donnes = JSON.parse(reqGetLines.responseText);
     let monUl = document.createElement("ul");
     document.querySelector('#showliste').replaceChild(monUl,document.querySelector('#showliste').firstChild);
     donnes.lines.line.forEach(function(line){
      let monLi = document.createElement("li");
      monUl.appendChild(monLi);
      monLi.innerText = line.shortName+" - "+line.name;
    	monLi.style.color=line.bgXmlColor;
		 });
  	}
    else if ( !document.getElementById('showliste').firstChild)
	      document.getElementById("showliste").appendChild(document.createTextNode("On attend"));
	}
  reqGetLines.send(null);
}
