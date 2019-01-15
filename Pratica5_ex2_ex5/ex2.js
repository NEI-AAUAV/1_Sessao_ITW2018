//Ex 1 e 2
console.log("Ex1 e 2)\n");
var s = "3";
var x = 3;
console.log(s + 1); //adicionar á letra 3 a letra 1=31
console.log(x + 1); //adicionar ao nr inteiro 3 o nr inteiro 1=4

//Ex 3
console.log("\n\nEx 3)\n");
var s1="abcdef";
var x1=-100;
console.log(s1 + "xyz"); //abcdefxyz
console.log(s1 + 800); //abcdef800
console.log(x1 + 800);//-100+800=800

//Ex4
console.log("\n\nEx 4)\nAlert 1");
    var a = "3";
    var b = 3;
    if (a === b) //com == estamos a comparar apenas o valor entre a e ,que neste caso é verdade pois 3=3
                //com === estamos a comparar o valor e também o tipo de variavel, ou seja como a é uma string e b é um numero , vai dar falso,pois apesar de o valor de a e b serem iguais os seus tipos nao
    alert("Iguais");
    else
    alert("Diferentes");

//Ex 5
console.log("\n\nEx 5)Alert 2")
var a = "abc";
    switch (a) {
    case "abc":
        alert("string abc");
        break;
    case 3:
        alert("inteiro 3");
        break;
    default:
        alert("outro");
}
//Ex 6
console.log("\n\nEx 6)")
var x = document.getElementById("op1");
var y = document.getElementById("op2");
document.getElementById("res").setAttribute("value",parseFloat(x.value)+parseFloat(y.value));
console.log(parseFloat(x.value));
console.log(parseFloat(y.value));
