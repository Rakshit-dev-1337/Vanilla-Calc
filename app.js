const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[previous-operand]')
const currentOperandText = document.querySelector('[current-operand]')


const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click')
})

class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear ()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete () {

    }

    appendNumber () {

    }

    chooseOperation (operation) {

    }

    compute () {

    }

    updateDisplay () {

    }
}