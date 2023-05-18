document.addEventListener('DOMContentLoaded', ()=>{
    let displarGrid = document.querySelector('.grid')
    let score = document.getElementById('score-value')
    let width = 16
    let squares = []

    function drawBox(){
        for(let i=0; i<width; i++){
            let square = document.createElement('div')
            square.innerHTML = 0
            displarGrid.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    drawBox()
    function generate(){
        let rand_num = Math.floor(Math.random() * squares.length)
        if(squares[rand_num].innerHTML==0){
            squares[rand_num].innerHTML=2
        }
        else generate()
        console.log(squares)
    }
})