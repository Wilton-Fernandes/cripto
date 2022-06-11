
var lista = [{sigla:"BTC", nome: "BITCOIN"}, {sigla:"ETH", nome:"ETHERIUM"}, {sigla:"BNB", nome: "BNB"}, {sigla:"XRP", nome: "XRP"}, {sigla:"ADA", nome: "CARDANO"}, {sigla:"SOL", nome:"SOLANA"}, {sigla:"AVAX", nome: "AVALANCHE"}, {sigla:"SHIB", nome: "SHIBA INU"}, {sigla:"MATIC", nome:"POLIGONO"}, {sigla:"CAKE", nome: "PANCAKE SWAP"}, {sigla:"MANA", nome:"DECENTRALAND"}, {sigla:"GALA", nome:"GALA"}, {sigla:"SAND", nome:"THE SANDBOX"}, {sigla:"DOGE", nome:"DOGECOIN"}, {sigla:"DOT", nome:"POLKADOT"}]
var lista_usdt = []


function criaTabela(){
    let tabela = document.getElementById('tabela')
   // tabela.innerText = ""

    /*let linha = tabela.insertRow()
    let cab_logo = linha.insertCell()
    let cab_nome = linha.insertCell()
    let cab_sigla = linha.insertCell()
    let cab_cotacao = linha.insertCell()
    let cab_cotacaoReal = linha.insertCell()
    let cab_24h = linha.insertCell()

    cab_logo.innerText = "LOGO"
    cab_nome.innerText = "CRIPTOMOEDA"
    cab_sigla.innerText = "SIGLA"
    cab_cotacao.innerText= "COTAÇÃO EM DOLARES"
    cab_cotacaoReal.innerText= "COTAÇÃO EM REAIS"
    cab_24h.innerText = "VARIAÇÃO EM 24HR"*/

    

    for(var i=0; i < lista.length; i++){
        
        
        //let linha = document.getElementById(lista[i])
        //let linha2 = document.getElementsByClassName(lista[i])
        let linha = tabela.insertRow()
        let logo = linha.insertCell()
        let nome = linha.insertCell()
        let sigla = linha.insertCell()
        let cotacao = linha.insertCell()
        let real = linha.insertCell()
        let _24h = linha.insertCell()
        
        
        cotacao.id = lista[i].sigla
        _24h.id = 'f'+lista[i].sigla
        real.id = 'r'+lista[i].sigla

        sigla.innerText = lista[i].sigla
        nome.innerText = lista[i].nome
        
        var img = document.createElement("IMG");  
        img.src = 'iconesCripto/'+ lista[i].sigla + '.png'; 
        img.width="64" 
        logo.appendChild(img);

        
 
    }
}

function atualiza(){
    
    for(var i=0; i < lista.length; i++){

        let linha = document.getElementById(lista[i].sigla)
        
        let linha2 = document.getElementById('f'+lista[i].sigla)

        let linha3 = document.getElementById('r'+lista[i].sigla)
        
        fetch('https://api.binance.com/api/v3/ticker/price?symbol='+ lista[i].sigla +'BUSD')
        .then(response => response.json())
        .then(data => {
            linha.innerText = 'US$ '+ parseFloat(data.price)
            
        })

        fetch('https://www.binance.com/api/v3/ticker/24hr?symbol='+ lista[i].sigla +'BUSD')
        .then(response => response.json())
        .then(data => {
            linha2.innerText = data.priceChangePercent + " %"
            if (data.priceChangePercent > 0){
                linha2.style.color = "green"
            }else{
                linha2.style.color = "red"
            }

        })

        fetch('https://api.binance.com/api/v3/ticker/price?symbol='+ lista[i].sigla +'BRL')
        .then(response => response.json())
        .then(data => {
            linha3.innerText = 'R$ '+parseFloat(data.price)
            
        })
    }
}    

criaTabela()
atualiza()
setInterval(atualiza, 5000)






