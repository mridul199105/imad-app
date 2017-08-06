console.log('Loaded!');

function opennav() {
            document.getElementById("mysidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("main").style.maxWidth = "720px";
            document.getElementById("main").style.transition = "0.5s";
        }
        function closenav() {
            document.getElementById("mysidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("main").style.maxWidth = "970px";
            document.getElementById("main").style.transition = "0.5s";
        }
    
    var i = 0;
    