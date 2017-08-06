console.log('Loaded!');

function opennav() {
            document.getElementById("main").style.transition = "0.5s";
            document.getElementById("mysidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("main").style.maxWidth = "720px";
        }
        function closenav() {
            document.getElementById("main").style.transition = "0.5s";
            document.getElementById("mysidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("main").style.maxWidth = "970px";
        }
    

var maintt = document.getElementById(main).innerHTML;
var oldtt = document.getElementById(main);
var i = 0;
function addMe() {
     alert("Working");
    if(i % 2 === 0) {
        
        oldtt.innerHTML = maintt;
    } else {
       
        oldtt.innerHTML = `
         <div align="right">The date has been removed</div> 
         <hr>
          <span href="/ui/main.js" onclick="opennav()">Navigation</span>
          <hr>
          <left>
              The Content has been removed
          </left>
          <hr>`;
    }
    i++;
        
    
}