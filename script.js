let answer = document.getElementById('answer')
let buttons = document.getElementsByClassName('calculator-button')

function getResult() {
    if (answer.value.length > 0) {
        try {
            let result = eval(answer.value)
        
            if (typeof result !== 'number' || isNaN(result) || !isFinite(result)) throw new Error()
            
            answer.value = +result.toFixed(8)
        } catch {
            alert("Ошибка в выражении")
        } 
    }
}

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        if (event.target.innerText == '=') {
            getResult()
        } else {
            answer.value += event.target.innerText
        }
    })
}

document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9\/*\-+\(\)]/)) answer.value += event.key
    if ((event.key).match(/Backspace/)) answer.value = answer.value.substring(0, answer.value.length - 1)
    if ((event.key).match(/[Enter=]/)) getResult()
})