radio.onReceivedNumber(function (receivedNumber) {
    while (enviado == 0) {
        basic.pause(100)
    }
    if (receivedNumber == 111) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (receivedNumber == 222) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (receivedNumber == 333) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
function ganador (núm: number) {
	
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(3)
    enviado = 3
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(2)
    enviado = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    radio.sendNumber(1)
    enviado = 1
})
let enviado = 0
radio.setGroup(111)
enviado = 0
