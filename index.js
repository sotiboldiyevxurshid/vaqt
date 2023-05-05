let inp = document.querySelector ('.inp')
let btn1 = document.querySelector ('.o1')
let btn2 = document.querySelector ('.o2')
let btn3 = document.querySelector ('.o3')
let btn4 = document.querySelector ('.o4')
let btn5 = document.querySelector ('.o5')
let btn6 = document.querySelector ('.o6')
let text = document.querySelector(".text")
let h2 = document.querySelector("h2") 



btn1.onclick = () => {
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