const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[previous-operand]')
const currentOperandText = document.querySelector('[current-operand]')

class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
    }

    clear() {
        this.currentOperand = ''
        this.

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