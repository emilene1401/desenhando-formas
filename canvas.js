
//seleciona o elemento do canvas
var canvas = document.getElementById('desenho');
//variavel de contexto 2D
var ctx = canvas.getContext('2d');
//desenha um retangulo
ctx.fillRect(20,20,100,100);
//seleciona o elemento do canvas
var canvas = document.getElementById('desenho')
//variavel de contexto 2d
var ctx = canvas.getContext('2d')
//desenha um retangulo
ctx.fillStyle = "rgb(180,0,0)"
ctx.fillRect(20,20,100,100);
//segundo retangulo
ctx.fillStyle = "rgba(0,0,180, 0.7)"
ctx.fillRect(30,30,100,100);

// seleciona o elemento do canvas e cria contexto 
var ctx=document.getElementById('desenho').getContext('2d');

//inicia um novo path 
ctx.beginPath();

//configurações
var x = 100;
var y = 100;
var raio = 50;
var angulo_inicio = 0; 
var angulo_fim = Math.PI * 2;

// desenha  um arco 
ctx.arc(x,y,raio,angulo_inicio,angulo_fim);

//desenha linhas
ctx.stroke();

var ctx = document.getElementById('desenho').getContext('2d');

//configurações
var x = 20;
var y = 100;

// tamanho da fonte
ctx.font ='72px serif';

//inserindo texto
ctx.fillText("Olá, mundo!",x,y);

//iniciando o canvas
var canvas = document.getElementById('desenho');
var ctx = canvas.getContext('2d');

//configurações 
var x = 0;
altura = 50;
var largura = 0; 