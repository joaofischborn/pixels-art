function selectColor(){
    const colors = document.querySelectorAll('.color')
    for(let i = 0; i < colors.length; i += 1){  
        colors[i].addEventListener('click', function(){
            const colorSelected = document.querySelector('.selected');
            colorSelected.classList.remove('selected')
            colors[i].className = 'color selected'
        })
    }
}
selectColor()