const menuList=document.querySelector('.home-list');
const iconMenu=document.querySelector(".icon-menu");
const iconCross=document.querySelector(".icon-cross");
const iconSearch=document.querySelector('.icon-search');
const searchBar=document.querySelector('.input-search')


iconMenu.addEventListener('click',()=>{
       toggle();
   menuList.classList.toggle('show-menulist');
    
})

iconCross.addEventListener('click',()=>{
      toggle();
    menuList.classList.toggle('show-menulist');
})


iconSearch.addEventListener('click',()=>{
  
searchBar.classList.toggle('show-search');


})


function toggle(){
    iconMenu.classList.toggle('hide');
    iconCross.classList.toggle('hide');
}


document.getElementById("currentYear").textContent = new Date().getFullYear();



//image slider
const sliderImage=document.querySelectorAll('.slide');
let index=0;
function changeBackground(){
    sliderImage[index].classList.remove("show-background");
    
    index++;
    if(index>=sliderImage.length){
        index=0;
    }
    sliderImage[index].classList.add("show-background");
}
sliderImage[index].classList.add("show-background");
setInterval(changeBackground,3000);