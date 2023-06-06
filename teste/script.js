const form=document.querySelector('form');
form.addEventListener('submit',envia);

function envia(e){
    e.preventDefault();
    let sum= parseInt(document.getElementById('n1').value)+parseInt(document.getElementById('n2').value)+parseInt(document.getElementById('n3').value);
    const media=sum/3;
    const nome=document.getElementById('nome').value;
    const idade=document.getElementById('idade').value;
    
    const data={
        nome:nome,
        idade:idade,
        notaFinal:media
    }

    add(data);
}


function add(data){

    const ul=document.querySelector('ul');
    const li=document.createElement('li');
    //let message=`Olá ${data.nome}, de ${data.idade} anos. Sua nota final é de ${data.notaFinal.toFixed(2)} pontos`;
    ul.appendChild(li);
    if(data.notaFinal<60){
        li.innerHTML=`Olá ${data.nome}, de ${data.idade} anos. Sua nota final é de <span class="vermelho">${data.notaFinal.toFixed(2)}</span> pontos`;
        
    }else{

        li.innerHTML=`Olá ${data.nome}, de ${data.idade} anos. Sua nota final é de <span class="verde">${data.notaFinal.toFixed(2)}</span> pontos`;
    }

    //li.textContent=message;
}