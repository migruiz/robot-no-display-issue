let motionDetected = false
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, 90)
max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.clockwise,
false
)
record.setSampleRate(14379, record.AudioSampleRateScope.Everything)
let strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (motionDetected) {
        max7219_matrix.scrollText(
        "WELCOME",
        75,
        500
        )
    } else {
        max7219_matrix.clearAll()
    }
    basic.pause(100)
})
basic.forever(function () {
    if (motionDetected) {
        for (let index = 0; index < 4; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 60)
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, 60)
            basic.pause(1000)
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 120)
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, 120)
            basic.pause(1000)
        }
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, 90)
        basic.pause(500)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo5)
    }
    basic.pause(50)
})
basic.forever(function () {
    if (motionDetected) {
        for (let index = 0; index < 4; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 70)
            basic.pause(800)
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 110)
            basic.pause(800)
        }
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
        basic.pause(800)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
    }
    basic.pause(50)
})
basic.forever(function () {
    if (motionDetected) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(600)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(600)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(600)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(600)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(600)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    basic.pause(50)
})
basic.forever(function () {
    if (motionDetected) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        basic.pause(3000)
    }
    basic.pause(50)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) > 700) {
        motionDetected = true
        basic.pause(5000)
    } else {
        motionDetected = false
    }
    basic.pause(50)
})
basic.forever(function () {
    if (motionDetected) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.clearScreen()
    }
    basic.pause(50)
})
