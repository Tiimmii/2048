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
    }

    function moveRight(){
        for(let i=0; i<16; i++){
            if(i%4===0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let shifted = zeros.concat(filteredRow)
                squares[i].innerHTML = shifted[0]
                squares[i+1].innerHTML = shifted[1]
                squares[i+2].innerHTML = shifted[2]
                squares[i+3].innerHTML = shifted[3]
            }
        }
    }
    moveRight()
})
