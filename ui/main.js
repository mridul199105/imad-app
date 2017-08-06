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
var odim = newele.innerHTML;
function addMe() {
            if(i % 2 === 0) {
                newele.innerHTML = odim;
            } else {
                    newele.innerHTML = `
                  <div align="right">Not available</div> 
                  <span href="/ui/main.js" onclick="opennav()">Navigation</span>
                  <hr>
                  <left>
                      The content has been removed.
                  </left>
              <hr>`;
            }
            i++;
}

var vana = document.getElementById("movimg");
vana.style.marginLeft = "0px";
var mina = 0;

function inc() {
    mina += 10;
    vana.style.marginLeft = mina + "px";
}

function moveIt() {
    var interv = setInterval(inc, 100);
}

vana.onclick = function() {
    mina = 0;
};

moveIt();