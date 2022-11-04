// Inicia quando instalado/atualizado a extensão 
const TITULO = true
const MENU_RADAPE = true

onExtensionInstalled(setInitial)


function setInitial(){
    setInitialActive()
    setInitialValor()
}

async function setInitialActive(){
    const active = await getActive()
    if (active == null) await setActive(true)
}

async function setInitialValor(){
    const titulo1 = await getTitulo()
    if(titulo1 == null) await setTitulo(TITULO)
    const menu_rp = await getMenuRp(MENU_RADAPE)
}