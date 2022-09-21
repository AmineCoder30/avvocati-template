let theBtCard = document.querySelectorAll(".add-card")
let myImage = document.querySelector(".vedeo-section img")
let myvedeo = document.querySelector(".my-vedeo")
let theIcon = document.querySelector(".my-vedeo i")
let theFirstImg = document.querySelector(".seller-one>img")
let theChImg = document.querySelectorAll(".seller-one .ch-prd img");
// ##################################################""
let theSellerTow = document.querySelector(".seller-tow>img")
let theChImgTow = document.querySelectorAll(".seller-tow .ch-prd img");
// #####################################################
let theSellerThree = document.querySelector(".seller-three>img")
let theChImgthree = document.querySelectorAll(".seller-three .ch-prd img");
// ############################################
let theSellerfour = document.querySelector(".seller-four>img")
let theChImgfour = document.querySelectorAll(".seller-four .ch-prd img");
// ###############################################
console.log(theChImg)
for (let i = 0; i < theBtCard.length; i++) {
   theBtCard[i].addEventListener("click", function () {
       theBtCard[i].textContent = '';
       theBtCard[i].textContent = 'adding..';
       theBtCard[i].style.backgroundColor = "#b97d03"
   })
    
}
myImage.onclick = function () {
    myvedeo.classList.remove("hide")
}
theIcon.onclick = function () {
    myvedeo.classList.add("hide")
}
function changeImg(img,array) {
    for (let a = 0; a < array.length; a++) {
       array[a].onclick = function () {
           img.src = array[a].src;
       }
        
    }
}
changeImg(theFirstImg,theChImg)
changeImg(theSellerTow,theChImgTow)
changeImg(theSellerThree,theChImgthree)
changeImg(theSellerfour,theChImgfour)