const btnswitch = document.querySelector('#switch')
const btnnav = document.querySelector('#nav')

btnswitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    btnswitch.classList.toggle('active')
});