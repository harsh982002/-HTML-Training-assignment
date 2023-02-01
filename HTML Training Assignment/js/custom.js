function collapse (){
    if(document.getElementsByClassName("sidebar")[0].style.width=="0px"){
    var sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.style.width="85px";
    var div=sidebar.querySelectorAll("div")
    div.forEach(element => {
        element.style.width="50%";
        element.style.backgroundColor="white"
        element.style.marginLeft="5px"
    });
    var img=sidebar.querySelectorAll("img")
    img.forEach(element => {
        element.style.width="15px";
    });
    var p=sidebar.querySelectorAll("p")
    p.forEach(element => {
        element.style.fontSize="11px";
    });
}
else if(document.getElementsByClassName("sidebar")[0].style.width==""){
    var sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.style.width="85px";
    var div=sidebar.querySelectorAll("div")
    div.forEach(element => {
        element.style.width="50%";
        element.style.backgroundColor="white"
        element.style.marginLeft="5px"
    });
    var img=sidebar.querySelectorAll("img")
    img.forEach(element => {
        element.style.width="15px";
    });
    var p=sidebar.querySelectorAll("p")
    p.forEach(element => {
        element.style.fontSize="11px";
    });
}
else{
    var sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.style.width="0px";
    var div=sidebar.querySelectorAll("div")
    div.forEach(element => {
        element.style.width="0%";
        element.style.backgroundColor="white"
        element.style.marginLeft="0px"
    });
    var img=sidebar.querySelectorAll("img")
    img.forEach(element => {
        element.style.width="0px";
    });
    var p=sidebar.querySelectorAll("p")
    p.forEach(element => {
        element.style.fontSize="0px";
    }); 
}
}