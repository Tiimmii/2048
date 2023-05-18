document.addEventListener('DOMContentLoaded', ()=>{
    let displarGrid = document.querySelector('.grid')
    let score = document.getElementById('score-value')
    let width = 16

    function drawBox(){
        for(let i; i<width; i++){
            let box = document.createElement('div')
            box.innerHTML = 0
            displarGrid.appendChild(box)
        }
    }

    drawBox()
})