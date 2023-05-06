const imagem = document.querySelector("img");
const tempo = document.querySelector("h1");
const body = document.querySelector("body");

//código para alterar imagem conforme a hora do sistema
setInterval(window.onload = () => {

      //const corpo = body.getAttribute("style")

      const time = new Date().getHours();
      var hora = Number(time);
      const src = imagem.getAttribute("src");

        
      if (hora >= 12 && hora < 18 && src === "dia.jpg") {
        // foto de tarde
        // console.log("Boa tarde!");
          imagem.setAttribute("src", "tarde.jpg");
          body.setAttribute("style", "background-image: url(tarde.jpg);")
          tempo.innerText = "Boa tarde!";

          if (hora == 17){
             imagem.setAttribute("src", "tarde_cinco.jpg");
             body.setAttribute("style", "background-image: url(tarde_cinco.jpg");
          }

      } else if (hora >= 18 && src === "dia.jpg") {
        // foto de noite
        // console.log("Boa noite!");
          imagem.setAttribute("src", "noite.jpg");
          body.setAttribute("style", "background-image: url(noite.jpg);")
          tempo.innerText = "Boa noite!";

      } else if ((hora >= 0 && hora < 6) || hora === 0) {
        // foto de madrugada
        // console.log("Boa madrugada!");
          if (src !== "noite.jpg") {
              imagem.setAttribute("src", "noite.jpg");
              body.setAttribute("style", "background-image: url(noite.jpg);")
              tempo.innerText = "Boa madrugada!";
        }
      }
}, 1000);

//código de relógio
const texto = document.querySelector(".hora");
setInterval(window.onload = function() {
     var tempo = new Date().getHours();
     
     var min = new Date().getMinutes();

     texto.innerText = `${tempo}:${min}`

     if (min < 10){
         texto.innerText = `${tempo}:0${min}`

         if (tempo < 10){
          texto.innerText = `0${tempo}:0${min}`
      }
     }else if (tempo < 10){
          texto.innerText = `0${tempo}:${min}`

          if (min < 10){
            texto.innerText = `0${tempo}:0${min}`
      }
    }

}, 1000);

//Código para escrever a data do sistema
const data = document.querySelector(".data");
window.onload = function() {
    
    const minhadata = new Date();
    const dia = minhadata.getDate();
   
    const mes = minhadata.getUTCMonth()+1;
    const ano = new Date().getUTCFullYear();
   
    data.innerText = `${dia}/${mes}/${ano}`

    if (dia < 10){
        data.innerText = `0${dia}/${mes}/${ano}`

        if (mes < 10){
            data.innerText = `0${dia}/0${mes}/${ano}`
        }
    }

    if (mes < 10){
        data.innerText = `${dia}/0${mes}/${ano}`

        if (dia < 10){
            data.innerText = `0${dia}/0${mes}/${ano}`
        }
    }
}


/*Alterando imagem com cliques */
/*const imagem = document.querySelector("img");

imagem.onclick = () => {
    const src = imagem.getAttribute("src");

    if (src === 'dia.jpg'){
        imagem.setAttribute("src", "tarde.jpg");
    }
    else if (src === 'tarde.jpg'){
        imagem.setAttribute("src", "noite.jpg");
    }
    else{
        imagem.setAttribute("src", "dia.jpg");
    }
}*/

/*Pegando a hora do sistema */
/*var data = new Date();

var hora, minutos, segundos;

hora = data.getHours();
minutos = data.getMinutes();
segundos = data.getSeconds();

console.log(`Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos, segundo o sistema local!`)*/
/*const receber = require('prompt-sync')({sigint:true});*/

/*var num, tempo
tempo = new Date();
hora = tempo.getHours();

num = Number(hora);*/