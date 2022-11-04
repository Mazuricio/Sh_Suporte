function onExtensionInstalled(listener){
    // Chama quando instala a extensao
    browser.runtime.onInstalled.addListener(listener)
    console.log("teste")
}

function getActive(){
    return storageget('active')
}
function setActive(valor){
    return storageset({ active: valor})
}
function getTitulo(valor){
    return storageget('titulo')
}
function setTitulo(valor){
    storageset({ titulo: valor })
}

// isso aqui nao entendi, é pra pegar os valores mais facil

function storageget(key){
    return new Promise((resolve) =>{
        browser.storage.local.get([key], (result) => {
            resolve(result[key])
        })
    })
}
function storageset(object) {
    return new Promise((resolve) => browser.storage.local.storage.set(object, resolve)) 
}