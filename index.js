// Your code goes here

function replaceText(){    //e is the event that happens; in this case 'DOMContentLoaded'
    const p = document.querySelector('#text')   //p with ID 'text'
    p.textContent = "This is really cool!"
    console.log(p.textContent)
}

document.addEventListener('DOMContentLoaded',replaceText)

