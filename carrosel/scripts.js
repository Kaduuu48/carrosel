let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let conteiner = document.querySelector('.conteiner')
let list = document.querySelector('.conteiner .list')
let thumb = document.querySelector('.conteiner .thumb')

btnNext.onclick = ()=> moveItemsOnClick('next')
btnBack.onclick = ()=> moveItemsOnClick('back')




function moveItemsOnClick(type){
   let listItems = document.querySelectorAll(' .list .list-item')
   let thumbItems = document.querySelectorAll('.thumb .thumb-item')

   console.log(listItems)
   console.log(thumbItems)

   if(type === 'next'){
    list.appendChild(listItems[0])
    thumb.appendChild(thumbItems[0])
    conteiner.classList.add('next')
   } else{
    list.prepend(listItems[listItems.length -1])
    thumb.prepend(thumbItems[thumbItems.length -1])
    conteiner.classList.add('back')

   }

   setTimeout(() => {
    conteiner.classList.remove('next')
    conteiner.classList.remove('back')

  }, 3000);
  


}