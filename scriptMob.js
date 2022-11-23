let menuId=false;
document.querySelector('.head-button').addEventListener('click',(event) => {

    if(menuId)
   {document.querySelector('.mob').style.display='none';
   menuId=false;
   }
   else {document.querySelector('.mob').style.display='block';
   menuId=true;    
}
})

window.matchMedia("(min-width: 921px").addListener((event)=>{
    if(event.matches)
    {
    document.querySelector('.mob').style.display='none';
    menuId=false;
    }
})
