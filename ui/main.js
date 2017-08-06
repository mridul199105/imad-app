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

var i = 0;
var newele = document.getElementById("main");
var oldtimer = newele.innerHTML;

function addMe(onc) {
          var date = onc;
          newele.innerHTML = `
          <div align="right">${date}</div> 
          <span href="/ui/main.js" onclick="opennav()">Navigation</span>
          <hr>
          <left>
              The content has been removed.
          </left>
          <hr>`;
    
    i++;
}
