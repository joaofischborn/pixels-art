createPixels(5)
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
function addColor(){
const selectPixels = document.querySelectorAll('.pixel')  
    for(let i = 0; i < selectPixels.length; i += 1){
        selectPixels[i].addEventListener('click', function(){
            const selectedClass = document.querySelector('.selected')
            selectPixels[i].style.backgroundColor = selectedClass.style.backgroundColor
        })
    }
}
addColor()

function clearBotton(){
const myButton = document.getElementById('clear-board')
const pixel = document.querySelectorAll('.pixel')
    myButton.addEventListener('click', function(){
        for(let i = 0; i < pixel.length; i += 1){
            pixel[i].style.backgroundColor = 'white'
        }
    })
}
clearBotton()

function createPixels(quantidade){
    const myPxBoard = document.getElementById('pixel-board')
    for(let i = 0; i < quantidade; i += 1){
        const br = document.createElement('br')
        for(let index = 0; index < quantidade; index += 1){
            const createLi = document.createElement('div')
            createLi.className = 'pixel'
            myPxBoard.appendChild(createLi)
            myPxBoard.appendChild(br)
            createLi.style.backgroundColor = 'white'
        }
    }
}

function generatePixel(){
const myBoard = document.getElementById('pixel-board')
const myInput = document.getElementById('board-size')
const generate = document.getElementById('generate-board')

generate.addEventListener('click', function (){
        if(myInput.value === ''){
            alert('Board inválido!')
        } else if (myInput.value < 5){
            myInput.value = 5
        } else if (myInput.value > 50){
            myInput.value = 50
        } 
        myBoard.textContent = ''
        createPixels(myInput.value)
        addColor()
        clearBotton()
    })
}
generatePixel()

window.onload = function generateColors(){
    let array = []
    for (let i = 0; i < 3; i += 1){
        let color ='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'
        array.push(color)
        document.getElementById('salmon').style.backgroundColor = array[0]
        document.getElementById('green').style.backgroundColor = array[1]
        document.getElementById('yellow').style.backgroundColor = array[2]
    }
}