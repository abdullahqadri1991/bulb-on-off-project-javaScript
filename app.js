let btn = document.getElementById('btn')
let image = document.getElementById('image')
btn.addEventListener('click', change)
function change() {
    if (btn.textContent.includes('on')) {
        image.src="on bulb.png"
        btn.style.backgroundColor = "green"
        btn.textContent = "turn off"
    } else {
        image.src="off bulb.png" 
        btn.style.backgroundColor = "red"
        btn.textContent = "turn on"
    }

}


