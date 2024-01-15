const burgerButton = document.getElementsByClassName("burger")[0];
const mainMenu=document.getElementsByClassName("main-menu")[0];

burgerButton.addEventListener("click", function(){
    mainMenu.style.display= "block";
});
