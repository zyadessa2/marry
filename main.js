let man = document.getElementById("man")
let female = document.getElementById("female")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let brother = document.getElementById("brother")
let love = document.getElementById("love")
let marry = document.getElementById("marry")
let thanks = document.getElementById("thanks")
let please = document.getElementById("please")

man.onclick = function(){
    brother.classList.remove("hide")
    man.classList.add("hide")
    love.classList.remove("hide")
    female.classList.add("hide")
}
love.onclick = function(){
    this.classList.add("hide")
    brother.classList.add("hide")
    man.classList.remove("hide")
    female.classList.remove("hide")
}
female.onclick = function(){
    marry.classList.remove("hide")
    yes.classList.remove("hide")
    no.classList.remove("hide")
    this.classList.add("hide")
    man.classList.add("hide")
}
yes.onclick = function(){
    thanks.classList.remove("hide")
    yes.classList.add("hide")
    no.classList.add("hide")
    marry.classList.add("hide")
    please.classList.add('hide')
}
no.onclick = function(){
    please.classList.remove('hide')
    marry.classList.add("hide")
}