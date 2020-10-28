let baby_boomers = 0
let milienials = 0
let sum = 0
let average = 0
let year_of_birth = 0
let random = 0
let dice = 0
let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    baby_boomers = 0
    milienials = 0
    sum = 0
    average = 0
    for (let index = 0; index < 20; index++) {
        year_of_birth = randint(1949, 2010)
        basic.showNumber(year_of_birth)
        if (1949 <= year_of_birth && year_of_birth >= 1968) {
            basic.showString("Baby Boom")
            baby_boomers += 1
        } else if (1969 <= year_of_birth && year_of_birth >= 1980) {
            basic.showString("X generation")
        } else if (1981 <= year_of_birth && year_of_birth >= 1993) {
            basic.showString("milenial")
            year_of_birth += 1
        } else {
            basic.showString("z generation")
        }
        sum += year_of_birth
    }
    average = sum / 20
    basic.showString("average")
    basic.showNumber(average)
    basic.showString("milenials")
    basic.showNumber(milienials)
    basic.showString("baby boomers")
    basic.showNumber(baby_boomers)
})
input.onPinPressed(TouchPin.P1, function () {
    random = 0
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(random)
        random += 1
        basic.clearScreen()
    }
    dice = randint(0, 6)
    basic.showNumber(dice)
    if (dice == 3 || dice == 6) {
        basic.showString("win")
    } else {
        basic.showString("lose")
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    y = 3
    x = 0
    while (input.buttonIsPressed(Button.B)) {
        led.plot(0, y)
        basic.pause(200)
        led.enable(false)
        basic.pause(200)
        led.enable(true)
        basic.clearScreen()
        led.plot(1, y)
        basic.pause(200)
        led.enable(false)
        basic.pause(200)
        led.enable(true)
        basic.clearScreen()
        led.plot(2, y)
        basic.pause(200)
        led.enable(false)
        basic.pause(200)
        led.enable(true)
        basic.clearScreen()
        led.plot(3, y)
        basic.pause(200)
        led.enable(false)
        basic.pause(200)
        led.enable(true)
        basic.clearScreen()
        led.plot(4, y)
        basic.pause(200)
        led.enable(false)
        basic.pause(200)
        led.enable(true)
        basic.clearScreen()
    }
})
