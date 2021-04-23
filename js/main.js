let menu_clicked = false
function burg(){
    if (menu_clicked == false){
        document.getElementById("header").style.background = "red";
        document.getElementById("burger").style.display = "block";
        menu_clicked = true
    }
    else if (menu_clicked == true){
        document.getElementById("header").style.background = "green";
        document.getElementById("burger").style.display = "none";
        menu_clicked = false
    }
}