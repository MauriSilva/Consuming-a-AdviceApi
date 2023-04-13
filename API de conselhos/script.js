const url = "https://api.adviceslip.com/advice";

function pegaFrase(){
fetch(url)
.then(response=>{response.json()
    .then(data => colocarNaPagina(data));
})
}

function colocarNaPagina(data){
    let mensagem = document.getElementById("frase");
    mensagem.innerHTML=data.slip.advice;
}
