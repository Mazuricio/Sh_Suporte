var titulo = document.getElementById("titulo")
if (localStorage.titulo == "true"){
titulo.checked = true
} else {
titulo.checked = false
}
titulo.addEventListener("click", function salvar(){
if (localStorage.titulo == "true"){
localStorage.setItem("titulo", false)
} else{
localStorage.setItem("titulo", true)
}
})

var teste = browser.storage.local.get(["teste"])
document.getElementById("log").innerText = teste