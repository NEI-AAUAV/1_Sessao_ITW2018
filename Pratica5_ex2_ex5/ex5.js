//--------------------------------------------------------------------------------------------------------
//Aconselho vivamente a observarem os console.log em comentarios para uma melhor compreensao do codigo
var azul = document.getElementById("azul");

var vermelho = document.getElementById("vermelho");

var verde = document.getElementById("verde");

var amarelo = document.getElementById("amarelo");

var info = document.getElementById("currentInfo");

//Declarar os div de cada quadrado como variaveis globais e o div do currentinfo
//--------------------------------------------------------------------------------------------------

var allSquares = [azul, vermelho, verde, amarelo]; //criar um array com todos os quadrados

function scramble() {
    var x, y;

    for (var i = 0; i < allSquares.length; i++) {

        console.log(i)
        //console.log(window.innerWidth);    //window.innerWidth-->retorna o valor de pixeis de largura da janela do browser
        //console.log(window.innerHeight);   //window.innerHeight-->retorna o valor de pixeis de altura da janela do browser


        //Math.random()-->Retorna um valor entre 0 (inclusive ) e 1 (exclusive);
        x = Math.random() * (window.innerWidth - 100); //ao multiplicar um valor entre 0 e 1 pela largura da janela menos a largura do quadrado(para evitar que o quadrado sai "fora " do ecra), teremos sempre um valor entre 0 e a largura do browser

        y = Math.random() * (window.innerHeight - 100);//msm coisa que em cima , so que desta vez pelo altura, para dar valores entre 0 e altura

        //console.log(x,y);

        allSquares[i].style.top=parseInt(y)+'px';
        allSquares[i].style.left=parseInt(x)+'px';
        
        //parseInt(x) converte x para inteiro(para evitar casa decimais, que neste caso nao é relevante)

        
    }

}
function setCurrentDiv(div) {

    console.log(div);


    var cor=div.id;
    //console.log(cor);//retorna o id do div passado como argumento, que neste caso é a cor , o que queremos imprimir

    info.innerHTML='Ola!Eu sou o '+cor+'<br/>'+div.style.top+'<br/>'+div.style.left;
    

}

function clearSelected() {
    info.innerHTML = "";//clear da info
}

scramble();


