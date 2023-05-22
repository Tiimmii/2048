document.addEventListener('DOMContentLoaded', ()=>{
    let displarGrid = document.querySelector('.grid')
    let scoreDisplay = document.getElementById('score-value')
    let resultDisplay = document.getElementById('result')
    let width = 4
    let squares = []
    let score = 0

    //drawing the initial box
    function drawBox(){
        for(let i=0; i<width*width; i++){
            let square = document.createElement('div')
            square.innerHTML = 0
            displarGrid.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    drawBox()

    // generate 2's randomly
    function generate(){
        let rand_num = Math.floor(Math.random() * squares.length)
        if(squares[rand_num].innerHTML==0){
            squares[rand_num].innerHTML=2
            checkForWin()
            checkForLoss()
            tileColours()
        }
        else generate()
    }
    // move right
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
    // move left
    function moveLeft(){
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
                let shifted = filteredRow.concat(zeros)
                squares[i].innerHTML = shifted[0]
                squares[i+1].innerHTML = shifted[1]
                squares[i+2].innerHTML = shifted[2]
                squares[i+3].innerHTML = shifted[3]
            }
    }
}
    function moveDown(){
        for(let i=0; i<width; i++){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML

            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredColumn = column.filter(num => num)
            console.log(filteredColumn)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let shifted = zeros.concat(filteredColumn)
            squares[i].innerHTML = shifted[0]
            squares[i+width].innerHTML = shifted[1]
            squares[i+(width*2)].innerHTML = shifted[2]
            squares[i+(width*3)].innerHTML = shifted[3]
        }
    }
    function moveUp(){
        for(let i=0; i<width; i++){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML

            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredColumn = column.filter(num => num)
            console.log(filteredColumn)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let shifted = filteredColumn.concat(zeros)
            squares[i].innerHTML = shifted[0]
            squares[i+width].innerHTML = shifted[1]
            squares[i+(width*2)].innerHTML = shifted[2]
            squares[i+(width*3)].innerHTML = shifted[3]
        }
    }
    function combineRow(){
        for(let i=0; i<15; i++){
            if(squares[i].innerHTML==squares[i+1].innerHTML){
                let total = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = total
                squares[i+1].innerHTML = 0
                score += total
                scoreDisplay.innerHTML = score
            }
        }
    }
    function combineColumn(){
        for(let i=0; i<12; i++){
            if(squares[i].innerHTML==squares[i+width].innerHTML){
                let total = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = total
                squares[i+width].innerHTML = 0
                score += total
                scoreDisplay.innerHTML = score
            }
        }
    }
    function control(e){
        if(e.keyCode == 39){
            keyRight()
        }
        else if(e.keyCode == 37){
           keyLeft()
        }
        else if(e.keyCode == 38){
            keyUp()
        }
        else if(e.keyCode == 40){
            keyDown()
        }
    }
    function keyRight(){
        moveRight()
        combineRow()
        moveRight()
        generate()
    }
    function keyLeft(){
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }
    function keyUp(){
        moveUp()
        combineColumn()
        moveUp()
        generate()
    }
    function keyDown(){
        moveDown()
        combineColumn()
        moveDown()
        generate()
    }
    document.addEventListener('keyup', control)

    //check for a win
    function checkForWin(){
        for(let i=0; i<16; i++){
            if(squares[i].innerHTML == 2048){
                resultDisplay.innerHTML == "You Win"
                document.removeEventListener('keyup', control)
            }
        }
    }
    //check for a loss
    function checkForLoss(){
        zeros = 0
        for(let i=0; i<16; i++){
            if(squares[i].innerHTML == 0){
                zeros++
            }
        }
        if(zeros == 0){
            resultDisplay.innerHTML == "You Lose"
            document.removeEventListener('keyup', control)
        }
    }
    function tileColours(){
        for(let i=0; i<16; i++){
            if(squares[i].innerHTML == 2){
                squares[i].style.backgroundColor = "#eee4da"
                squares[i].style.colour = "#727371"
            }
            else if(squares[i].innerHTML == 4){
                squares[i].style.backgroundColor = "#ece0ca"
                squares[i].style.colour = "#727371"
            }
            else if(squares[i].innerHTML == 8){
                squares[i].style.backgroundColor = "#f4b17a"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 16){
                squares[i].style.backgroundColor = "#f59575"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 32){
                squares[i].style.backgroundColor = "#f57c5f"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 64){
                squares[i].style.backgroundColor = "#f65d3b"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 128){
                squares[i].style.backgroundColor = "#edce71"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 256){
                squares[i].style.backgroundColor = "#edcc63"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 512){
                squares[i].style.backgroundColor = "#edc651"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 1024){
                squares[i].style.backgroundColor = "#eec744"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 2048){
                squares[i].style.backgroundColor = "#ecc230"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 4096){
                squares[i].style.backgroundColor = "#fe3d3d"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 8192){
                squares[i].style.backgroundColor = "#ff2020"
                squares[i].style.colour = "white"
            }
            else if(squares[i].innerHTML == 0){
                squares[i].style.backgroundColor = "#cdc1b5"
                squares[i].style.colour = "#727371"
            }
        }
    }
})
