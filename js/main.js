console.log("SH-SUPORTE ATIVO")
// Variaveis
var url = window.location.href

if(url == "https://beta.shootinghouse.com.br/login"){
	console.log("Pagina de login")
// -- A Password fixa eh um dos objetivos, nao descobri como mas seria aqui

} else if(url == "https://www.shootinghouse.com.br/verificacao-integridade"){
// -- Passa a pagina de verificacao de 2 etapas automaticamente --  
	var botao = document.getElementsByClassName("btn btn-warning")
	botao.goback.click()
// -- 
} else {
	// Muda o Titulo da Pagina 
	var t1 = document.getElementsByClassName("dropdown-toggle")
	var teste = t1[0].text.toUpperCase()
	var valor = 0
	teste = teste.replaceAll("\t","")
	teste = teste.replaceAll("\n","")
	if (teste.indexOf("NOTIFICAÇÕES") != -1){
		valor = 1
	} else {
		valor = 0
	}
	var t2 = t1[valor].text.replaceAll("\t","")
	t2 = t2.replaceAll("\n","")
	t2 = t2.replaceAll("\n","")
	document.title = t2
	// -- 
	// Tira as notificacao, me incomodava
	var not = document.getElementById("count-notification")
	not.style.display = "none" 
	var img = document.getElementById("actions-notification-icon")
	img.style.display = "none"
	// Remove o Sidebar do menu lateral, aproveitando melhor a pagina
	var sidebar = document.getElementsByClassName("sidebar-bottom")
	sidebar[0].style.display = "none"
}
getLocalStorage()
console.log("FIM")

function titulo(){
document.title = "ALTEROU"
}
// Tem pra eu saber que rodou ate o final