function openTab(tabName) {
    var i, elementList;
    elementList = document.getElementsByClassName("content");
    for (i = 0; i < elementList.length; i++) {
    elementList[i].style.display = "none";
    }   
document.getElementById(tabName).style.display = "block";
}