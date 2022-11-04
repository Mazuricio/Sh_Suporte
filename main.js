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
	var not_txt = document.getElementsByClassName("dropdown") 
	not_txt[0].style.display = "none" 
	// Remove o Sidebar do menu lateral, aproveitando melhor a pagina
	var sidebar = document.getElementsByClassName("sidebar-bottom")
	sidebar[0].style.display = "none"
	// adiciona o contato embaixo da logo
	var contato = document.getElementById("sidebar-contact")
	var topmenu = document.getElementsByClassName("sidebar-top")
	var stEnti = document.getElementById("sidebar-item-clube-site") 
	var inserir = topmenu[0].insertBefore(contato, stEnti)
	// Dando uma ajeitada no menu
	stEnti.style.display = "none" // remove site entidade
	topmenu[0].style.gap = "0px"  // diminue
	// remove "esconder menu"
	var esconder = document.getElementsByClassName("sidebar-menu-button sidebar-toggler")
	esconder[0].style.display = "none" 


	// alterar "site de entidade" pro dominio
	/*
	var entidade = document.getElementById("sidebar-item-clube-site")
	var dominio = entidade.href.replace("https://", '')
	entidade.innerText = dominio
	*/
}
//console.log("Guardando dados")
//browser.storage.local.set({"teste": 'PFF'})
console.log("FIM")

function titulo(){
document.title = "ALTEROU"
}
// Tem pra eu saber que rodou ate o final