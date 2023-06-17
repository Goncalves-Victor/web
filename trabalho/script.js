function DistribuiCartas(){
    let v=[]
    while(v.length!=4){
        let numero=Math.floor(Math.random() *12)
        if(v.indexOf(numero)==-1){
            v.push(numero)
        }
    }
    return v
}

function ordena(vet){
    let aux=[]
    while(vet.length>0){
        let menor = Math.min(...vet)
        aux.push(menor)
        vet.splice(vet.indexOf(menor),1)
    }

    return aux;
}

function jogadaBot(cartasBot,c){
    console.log("JOGADA")
    
    let maior = Math.max(...cartasBot)
    let menor = Math.min(...cartasBot)

    if(maior<c){
        console.log(menor)
        return
    }

}


var cartas=[0,5,10,2]
let i = Math.floor(Math.random() * 4)
var c=cartas[i]

console.log("Número aleatório: "+c)

var cartasBot=DistribuiCartas()
console.log("Cartas do Bot: "+cartasBot)

cartasBot=ordena(cartasBot)
console.log("Cartas Ordenadas "+cartasBot)

jogadaBot(cartasBot,c)

console.log("FIM")
