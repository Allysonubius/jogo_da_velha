var jogador , vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');

var vencedorSelecionado = document.getElementById('vencedor-selecionado');

var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-'){
    	return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if ( jogador === 'X' ){
    	jogador = 'O';
    }else {
    	jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
	var quadrado1 = document.getElementById(1);
	var quadrado2 = document.getElementById(2);
	var quadrado3 = document.getElementById(3);
	var quadrado4 = document.getElementById(4);
	var quadrado5 = document.getElementById(5);
	var quadrado6 = document.getElementById(6);
	var quadrado7 = document.getElementById(7);
	var quadrado8 = document.getElementById(8);
	var quadrado9 = document.getElementById(9);

	if(checarSequencia(quadrado1,quadrado2,quadrado3)){
		mudarCorQuadrado(quadrado1,quadrado2,quadrado3);
		mudarVencedor(quadrado1);
		return;
	}

	if(checarSequencia(quadrado4,quadrado5,quadrado6)){
		mudarCorQuadrado(quadrado4,quadrado5,quadrado6);
		mudarVencedor(quadrado4);
		return;
	}

	if(checarSequencia(quadrado7,quadrado8,quadrado9)){
		mudarCorQuadrado(quadrado7,quadrado8,quadrado9);
		mudarVencedor(quadrado7);
		return;
	}

	if(checarSequencia(quadrado1,quadrado4,quadrado7)){
		mudarCorQuadrado(quadrado1,quadrado4,quadrado7);
		mudarVencedor(quadrado1);
		return;
	}

	if(checarSequencia(quadrado2,quadrado5,quadrado8)){
		mudarCorQuadrado(quadrado2,quadrado5,quadrado8);
		mudarVencedor(quadrado2);
		return;
	}

	if(checarSequencia(quadrado3,quadrado6,quadrado9)){
		mudarCorQuadrado(quadrado3,quadrado6,quadrado9);
		mudarVencedor(quadrado2);
		return;
	}

	if(checarSequencia(quadrado1,quadrado5,quadrado9)){
		mudarCorQuadrado(quadrado1,quadrado5,quadrado9);
		mudarVencedor(quadrado1);
		return;
	}

	if(checarSequencia(quadrado3,quadrado5,quadrado7)){
		mudarCorQuadrado(quadrado3,quadrado5,quadrado7);
		mudarVencedor(quadrado3);
		return;
	}

}

function mudarVencedor(quadrado){
	vencedor = quadrado.innerHTML;

	vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1,quadrado2,quadrado3){
	quadrado1.style.background = '#0f0';
	quadrado2.style.background = '#0f0';
	quadrado3.style.background = '#0f0';
}

function checarSequencia(quadrado1,quadrado2,quadrado3){
	var eigual = false;

	if( quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
		eigual = true;
	}

	return eigual;
}