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



var listhu = document.getElementById("nelist");

function submitname() {
    var request = new XMLHttpRequest();
    var nami = document.getElementById("name");
    var nana = nami.value;
    request.onreadystatechange = function() {
        if ( request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var n = request.responseText;
                var nameInput = JSON.parse(n);
                var listname = "";
                for (i = 0; i < nameInput.length; i++) {
                    listname += "<li>" + nameInput[i] + "</li>";
                }
                 listhu.innerHTML = listname;
            }
        }
    };
    request.open('GET', 'http://mridul199105.imad.hasura-app.io/submitme?name=' + nana , true);
    request.send(null);
}