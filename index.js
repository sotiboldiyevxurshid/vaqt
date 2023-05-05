let inp = document.querySelector ('.inp')
let btn = document.querySelector ('.btn')
let btn2 = document.querySelector ('.btn2')
let btn3 = document.querySelector ('.btn3')
let btn4 = document.querySelector ('.btn4')
let btn5 = document.querySelector ('.btn5')
let btn6 = document.querySelector ('.btn6')
let text = document.querySelector(".text")
let h2 = document.querySelector("h2") 



btn.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toUpperCase()
}

btn2.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toLowerCase()
}
btn3.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = `${inpvalue.charAt(0).toUpperCase()}${inpvalue.slice(1)}`
}
btn4.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.italics()

}
btn5.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.bold()
}
btn6.onclick = () => {
    let inpvalue = inp.value
    h2.style.textDecoration = "underline";
    h2.innerHTML = inpvalue.toUpperCase()
}