"use strict";
if(index_page===true){

// creat am element of menu id
const menu_btn = document.querySelector(".menu_btn");
//create a boolean element
let menu_open = false;
const nav_list = document.querySelector(".navbar_mob");

// add event to the menu 
menu_btn.addEventListener('click', function(){
    // if its not open then set open class to the element
    if(!menu_open ){
        menu_btn.classList.add('open');
        nav_list.classList.add('visible');
        menu_open = true;
    }
    // if is already open close remove open class
    else{
        menu_btn.classList.remove('open');
        nav_list.classList.remove('visible');
        menu_open = false;
    }
});
}