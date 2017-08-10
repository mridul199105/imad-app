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

function asba() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if ( request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var n = request.responseText;
                var cont = document.getElementById("cntMe");
                cont.innerHTML = n.toString();
            }
        }
    };
    request.open('GET', 'http://mridul199105.imad.hasura-app.io/counter', true);
    request.send(null);
}


var namelist = [];
var listname = "";
var listhu = document.getElementById("nelist");
    
function submitname() {
    var namae = document.getElementById("name");
    var nameInput = namae.value;
    namelist = ["NAME 1", "NAME 2", "NAME 3", "NAME 5"];
    for (i = 0; i < namelist.length; i++) {
        listname += "<li>" + namelist[i] + "</li>";
    }
     listhu.innerHTML = listname;
}