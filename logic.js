console.log("logic.js successfully charged !")

function Change_tab(evt,topnav){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++){
        tablinks[i].classname=tablinks[i].className.replace("active", "");
    }

    document.getElementById(topnav).style.display = "block";
    evt.currentTarget.classname += "active";
}