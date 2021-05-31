input.onButtonPressed(Button.A, function () {
    if (contador > 0) {
        contador += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    contador = 0
})
input.onButtonPressed(Button.B, function () {
    contador += 1
})
let contador = 0
contador = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(contador)
})
