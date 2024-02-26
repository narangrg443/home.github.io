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