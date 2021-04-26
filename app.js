const p1 = document.querySelector('.player1')
const p2 = document.querySelector('.player2')
const s1 = document.querySelector('.score1')
const s2 = document.querySelector('.score2')
const reset = document.querySelector('.reset')
const congo = document.querySelector('.winner')
const option = document.getElementById('gamepoint1')
let gPoint = 0

//This event listener controls the score of Player 1.
p1.addEventListener('click', function () {
    congo.innerText = ''
  
    let sc1 = parseFloat(s1.innerText)
    sc1 += 1
    s1.innerText = sc1     // Updates the score on the ScoreCard for player 1
    if ((parseFloat(s1.innerText)) == (parseFloat(gPoint) + 1)) {   //Condition for giving the result
        congo.append("Player One WINS!")
        resetScore()
        p1.classList.add('disabled')
        p2.classList.add('disabled')
    }
})


//This event listener controls the score of Player 2.
p2.addEventListener('click', function () {
    congo.innerText = ''
    
    let sc2 = parseFloat(s2.innerText)
    sc2 += 1
    s2.innerText = sc2       // Updates the score on the ScoreCard for player 2
    if ((parseFloat(s2.innerText)) == (parseFloat(gPoint) + 1)) {  //Condition for giving the result
        congo.append(" Player Two WINS!")
        resetScore()
        p2.classList.add('disabled')
        p1.classList.add('disabled')
    }

})
reset.addEventListener('click', resetWin)

option.addEventListener('change', () => {

    gPoint = parseFloat(option.value)

})

function resetWin(){
    congo.innerText=''
    s1.innerText = "0"
    
    s2.innerText = "0"
    p1.classList.remove('disabled')
    p2.classList.remove('disabled')
}

function resetScore() {
    s1.innerText = "0"
    
    s2.innerText = "0"
    p1.classList.remove('disabled')
    p2.classList.remove('disabled')
}