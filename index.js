//saving the needed classes in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show_modal')

//Open modal function 
const openModal = () =>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
//close modal function 
const closeModal = () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    }

    //logic for opening modal
for(let j=0; j<btnOpen.length; j++){
    btnOpen[j].addEventListener('click', openModal)
}
//logic for closing modal
closeButton.addEventListener('click', closeModal )
overlay.addEventListener('click', closeModal)

//add an escape keyboard event listener

document.addEventListener('keydown', (e)=>{
    console.log(e.key)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})