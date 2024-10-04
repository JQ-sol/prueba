
/*alert(document.getElementById("footer").value);
alert(document.getElementById("footer").innerHTML);
alert(document.getElementById("footer").textContent);

alert(document.querySelector(".post").textContent);
alert(document.querySelector(".post").innerHTML);

alert(document.querySelectorAll(".post"));
*/
/*function resaltarCiudad(busquedaCiudad){

var noticias=document.querySelectorAll(".post");
for(var i=0;i<noticias.length;i++)
{
if(busquedaCiudad=="Kyoto"){
noticias[0].style.backgroundColor="red";
noticias[0].style.Color="white";
noticias[0].style.border="5px solid blue";
noticias[0].style.display='none';
noticias[0].style.display='block';
}
if(busquedaCiudad=="Venecia"){
noticias[1].style.backgroundColor="red";
noticias[1].style.Color="white";
noticias[1].style.border="5px solid blue";
noticias[1].style.display='none';
noticias[1].style.display='block';
}
if(busquedaCiudad=="Sidney"){
noticias[2].style.backgroundColor="red";
noticias[2].style.Color="white";
noticias[2].style.border="5px solid blue";
noticias[2].style.display='none';
noticias[2].style.display='block';
}
}
}

function ocultarCiudad(busquedaCiudad)
{
var noticias=document.querySelectorAll(".post");	
for(var i=0;i<noticias.length;i++)
{
	if(busquedaCiudad=="Kyoto")
	{
		noticias[0].style.display = "none";
	}
}
}
*/
/*var noticias=document.querySelectorAll(".post");

function marcarCiudad(busquedaCiudad)
{

	for (var i = 0; i < noticias.length; i++) {
 		if(noticias[i].textContent.toLowerCase().indexOf(busquedaCiudad.toLowerCase())>=0){
 			noticias[i].style.border= "3px solid violet";
         
 		}
 		
}
}
function resaltarCiudad(busquedaCiudad){


for (var i = 0; i < noticias.length; i++) {
 		if(noticias[i].textContent.toLowerCase().indexOf(busquedaCiudad.toLowerCase())>=0){
 			noticias[i].style.backgroundColor= "pink";
 			
 		}
}
}


function ocultarCiudad(busquedaCiudad)
{

for (var i = 0; i < noticias.length; i++) {
 		if(noticias[i].textContent.toLowerCase().indexOf(busquedaCiudad.toLowerCase())>=0){
 			noticias[i].style.display= "none";
 			
 		}

 	}
}*/
var noticias=document.querySelectorAll(".post");
var modificado=true;
function marcarCiudad(busquedaCiudad)
{

	for (var i = 0; i < noticias.length; i++) {
 		if(noticias[i].textContent.toLowerCase().indexOf(busquedaCiudad.toLowerCase())>=0){
 			noticias[i].style.border= "3px solid violet";
           
 		}
}

           	
           
}
function resaltarCiudad(busquedaCiudad){


for (var i = 0; i < noticias.length; i++) {
 		if(noticias[i].textContent.toLowerCase().indexOf(busquedaCiudad.toLowerCase())>=0){
 			noticias[i].style.backgroundColor= "pink";
 			
 		}
 		
}
}


function ocultarCiudad(busquedaCiudad)
{

for (var i = 0; i < noticias.length; i++) {
 		if(noticias[i].textContent.toLowerCase().indexOf(busquedaCiudad.toLowerCase())>=0){
 			noticias[i].style.display= "none";
 			

 		}
 		

 	}
}
function limpiar(){
    for(var i = 0; i < noticias.length; i++){
    	noticias[i].style.border= "transparent";
        noticias[i].style.backgroundColor = "transparent";
        noticias[i].style.display = "block";
    } 


}

