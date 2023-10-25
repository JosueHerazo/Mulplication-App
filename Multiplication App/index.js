const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById
("question")
const inpuEl = document.getElementById
("input")
const formEl = document.getElementById
("form")

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0
}
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `Cuanto es  ${num1} multiplicado por
 ${num2}`
  
 const correctAnsEl = num1 * num2

    formEl.addEventListener("submit", ()=>{
        const userAns = +inpuEl.value;
        if (userAns === correctAnsEl){
            score++;
            updateLocalStorage()
        }else{
            score--
            updateLocalStorage()
        }
    })
    
    function updateLocalStorage(){
        localStorage.setItem
        ("score", JSON.stringify(score))
    }