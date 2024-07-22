const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");


let size = 10
let isPressed = false
let color = 'black'
let x
let y 

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

    
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

})

 // click fires after both the mousedown and mouseup events have fired, in that order.
canvas.addEventListener('click', (e) => {
    if(!isPressed) {
        x = e.offsetX
        y = e.offsetY
       // console.log(x,y)
        drawCircle(x, y)
        
    }

})

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
    //ctx.stroke()  <-- if you comments out the line above and place this instead--
    //   it will draw a circle with no fill
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)  //line starts at this x and y coordinates on the canvas
    ctx.lineTo(x2, y2) //the line ends at this x and y coordinates on the canvas
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

// drawCircle(100,200);
// drawLine(300,300, 300, 500)

increaseBtn.addEventListener('click', (e) => {
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()

})

decreaseBtn.addEventListener('click', (e) => { 
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => { 
    color = e.target.value
})

clearEl.addEventListener('click', (e) => { 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

