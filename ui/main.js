console.log('Loaded!');

function opennavind() {
            document.getElementById("bg").style.transition = "0.5s";
            document.getElementById("mysidenav").style.width = "250px";
            document.getElementById("bg").style.marginLeft = "-235px";
            document.getElementById("bg").style.maxWidth = "720px";
}
        
function closenavind() {
            document.getElementById("bg").style.transition = "0.5s";
            document.getElementById("mysidenav").style.width = "0";
            document.getElementById("bg").style.marginLeft = "-485px";
            document.getElementById("bg").style.maxWidth = "970px";
}

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


var n = 0;
var button = document.getElementById("button");

button.onClick = function() {
    n = n + 1;
    var cnt = document.getElementById("countMe");
    cnt.innerHTML = n.toString();
};


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

function dec() {
    mina -= 10;
    vana.style.marginLeft = mina + "px";
}

var j = 0;
var interv;

vana.onclick = function() {
    clearInterval(interv);
    if( j % 3 === 0) {
        interv = setInterval(inc, 100);
    } else if (j % 3 === 1) {
        clearInterval(interv);
    } else {
        interv = setInterval(dec, 100);
    }
    j++;
};


