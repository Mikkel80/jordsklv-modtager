radio.onReceivedValue(function (name, value) {
    serial.writeValue("running time", input.runningTime())
    if (name == "sensor") {
        sensor = value
        serial.writeValue("sensor", value)
    }
})
let sensor = 0
radio.setGroup(1)
basic.showString("sensor")
basic.forever(function () {
    led.plotBarGraph(
    sensor,
    1000
    )
})
