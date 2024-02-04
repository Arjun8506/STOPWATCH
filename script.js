let min = document.querySelector("#min")
let sec = document.querySelector("#sec")
let milli = document.querySelector("#milli")
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")

let num = 0
let second = 0
let minute = 0
let count = false
let intervalId;

start.addEventListener("click", () => {
    count = true
    timer()
})

stop.addEventListener("click", () => {
    count = false
    clearInterval(intervalId)
})

reset.addEventListener("click", () => {
    // count = false
    clearInterval(intervalId)
    milli.textContent = "00"
    sec.textContent = "00"
    min.textContent = "00"
    num = 0
    second = 0
    minute = 0
})

function timer() {
    if (count) {
        intervalId = setInterval(() => {
            num += 1
            milli.textContent = num
            if (num == 99) {
                second += 1
                sec.textContent = second
                num = 0
            }
            if (second < 10) {
                sec.textContent = "0" + second
            }
            if (second == 60) {
                minute += 1
                min.textContent = minute
                second = 0
            }
            if (minute < 10) {
                min.textContent = "0" + minute
            }
        }, 10);
    }

}