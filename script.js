const color1 = document.getElementById('black').style.backgroundColor = 'black'
const color2 = document.getElementById('salmon').style.backgroundColor = 'salmon'
const color3 = document.getElementById('green').style.backgroundColor = 'green'
const color4 = document.getElementById('yellow').style.backgroundColor = 'yellow'

const colors = document.querySelectorAll('.color')
    for(let i = 0; i < colors.length; i += 1){  
        colors[i].addEventListener('click', function(){
            const colorSelected = document.querySelector('.selected');
            colorSelected.classList.remove('selected')
            colors[i].className = 'color selected'
        })
    }

const selectPixels = document.querySelectorAll('.pixel')  
    for(let i = 0; i < selectPixels.length; i += 1){
        selectPixels[i].addEventListener('click', function(){
            const selectedClass = document.querySelector('.selected')
            selectPixels[i].style.backgroundColor = selectedClass.style.backgroundColor
        })
    }