Palavra = function(eng,pt,op){

	return {
		
		ingles : eng,
		portugues : pt,
		certa : op,

		traducao : function(p){

			if(this.portugues.indexOf(p) < 0){
				this.certa = 2;
				return false;
			}
			
			this.certa = 1;
			return true;
		}

	}

}

palavras = [];
var acertos = 0;
var erros = 0;

window.onload = function () {
	
	if(typeof(Storage) !== "undefined") {
		json_palavras = localStorage.getItem("palavras");
		
		if(json_palavras != null){

			restaurar(json_palavras);
			if(palavras.length > 0){

				return;
			}
		}

	}



	palavras = [];
	adicionar();
	montaJogo();
	atualizaScore();

}

var xx;

function restaurar(json_str){
	
	var vetor = JSON.parse(json_str);
	var op = 0;
	var certos = [];
	var erradas = [];
	for(var i = 0; i < vetor.length; i++){
		var p = vetor[i];
		console.log(p);
		var new_p = Palavra(p.ingles, p.portugues, p.certa);
		palavras.push(new_p);
		if(p.certa == 1){
			certos.push(new_p);
		}
		if(p.certa == 2){
			erradas.push(new_p);
		}
	}

	montaJogo();

	certosErrados(certos,'success',true);
	certosErrados(erradas,'error',false);

	atualizaScore();

}


function certosErrados(vetor,classe,op){
	for(var i = 0; i < vetor.length; i++){
		var index = palavras.indexOf(vetor[i]);
		var tr = document.getElementById("tr_"+index);
		
		if(op){
			document.getElementById(index).value = vetor[i].portugues; 
			document.getElementById(index).disabled = true;
		}

		tr.setAttribute("class",classe);
	}
}

function traduzir(id){

	var eng = palavras[id];
	var pt = document.getElementById(id);
	var tr = document.getElementById("tr_"+id); 
	
	if(eng.traducao(pt.value)){
		tr.setAttribute("class","success");
		pt.disabled = true;
		atualizaScore();
		return true;
	}
	tr.setAttribute("class","error");
	atualizaScore();
	return false;
}


function atualizaScore(){
	acertos = document.getElementsByClassName("success").length;
	erros = document.getElementsByClassName("error").length;
	document.getElementById("acertos").textContent = acertos;
	document.getElementById("erros").textContent = erros;
	document.getElementById("total").textContent =  palavras.length - (acertos + erros);
	var value = JSON.stringify(palavras);
	if(value != null && palavras.length > 0){
		localStorage.setItem("palavras",value);
	}
}

function addPalavra(eng,pt){
	palavras.push(Palavra(eng,pt,0));
}


function montaJogo(){
	for(var i = 0; i < palavras.length; i++){
		criaTr(i,palavras[i].ingles);
	}
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function criaTr(id,eng){

	var tr = make("tr");
	tr.setAttribute("id","tr_"+id);

	var td = make("td");
	td.textContent = eng;
	
	var td_input = make("td");
	var input = make("input");
	input.setAttribute("id",id);
	input.setAttribute("onchange","traduzir(this.id)");
	td_input.appendChild(input);

	tr.appendChild(td);
	tr.appendChild(td_input);
	
	document.getElementById("corpo_tabela").appendChild(tr);

}



function make(element){
	return document.createElement(element);
}



function adicionar(){
	addPalavra('climate',['clima']);
	addPalavra('shade',['proteger']);
	addPalavra('shadow',['sombra']);
	addPalavra('projector',['projetor']);
	addPalavra('beam',['viga']);
	addPalavra('old-fashioned',['antigo']);
	addPalavra('cheer',['dar vivas','aclamar']);
	addPalavra('cheer up',['anime-se']);
	addPalavra('direct',['direto','dirigir']);
	addPalavra('channel',['canal']);
	addPalavra('english channel',['canal da mancha']);
	addPalavra('curve',['curso']);
	addPalavra('of course',['fora do curso']);
	addPalavra('current',['corrente']);
	addPalavra('directly',['diretamente']);
	addPalavra('typical',['típico']);
	addPalavra('primary',['primário']);
	addPalavra('secundary',['secundário']);
	addPalavra('associate',['associar','associado']);
	addPalavra('fellow',['companheiro']);
	addPalavra('society',['sociedade']);
	addPalavra('spectator',['espectador']);
	addPalavra('athletics',['atletismo']);
	addPalavra('medal ',['medalha']);
	addPalavra('nest',['ninho']);
	addPalavra('take advantage of',['tirar vantagem de']);
	addPalavra('facility',['facilidade']);
	addPalavra('rare',['raro']);
	addPalavra('embarrass',['embaraçar']);
	addPalavra('scared',['assustado']);
	addPalavra('hire',['alugar']);
	addPalavra('plumber',['encanador']);
	addPalavra('huge',['imenso']);
	addPalavra('lonely',['solitário']);
	addPalavra('definition',['definição']);
	addPalavra('loads of',['muito']);
	addPalavra('make the best of',['fazer o melhor possível']);
	addPalavra('make the most of ',['aproveitar o máximo']);
	addPalavra('by birth',['de nascimento']);
	addPalavra('by heart',['de cor']);
	addPalavra('poetry',['poesia']);
	addPalavra('measurement',['medida']);
	addPalavra('report',['relatório']);
	addPalavra('reporter',['reporter']);
	addPalavra('misbehaviour',['mal comportamento']);
	addPalavra('well done',['muito bem']);
	addPalavra('set',['conjunto']);
	addPalavra('recipe',['receita']);
	addPalavra('alike',['parecido']);
	addPalavra('like each other',['ser parecido']);
	addPalavra('package',['pacote']);
	addPalavra('parcel',['pacote']);
	addPalavra('packet',['pacote']);
	addPalavra('camp',['campo']);
	addPalavra('camping',['camping']);
	addPalavra('campsite',['acampamento']);
	addPalavra('saddle',['sela']);
	addPalavra('via',['via']);
	addPalavra('oral',['oral']);
	addPalavra('messenger',['mensageiro']);
	addPalavra('pigeon',['pombo']);
	addPalavra("It's time",['está na hora']);
	addPalavra('beat',['bater']);
	addPalavra('chief',['chefe']);
	addPalavra('tribe',['tribo']);
	addPalavra('disappoint',['desapontar']);
	addPalavra('disappointment',['decepção']);
	addPalavra('fine',['fino']);
	addPalavra('superior',['superior']);
	addPalavra('sort',['tipo','ordenar']);
	addPalavra('sort out',['resolver','separar']);
	addPalavra('recycle',['reciclar']);
	addPalavra('rubbish',['lixo']);
	addPalavra('hollow',['oco']);
	addPalavra('solid',['sólido']);
	addPalavra('fall to pieces',['cais aos pedaços']);
	addPalavra('the lot',['o lote']);
	addPalavra('represent',['representar']);
	addPalavra('representative',['representante']);
	addPalavra('symbolize',['simbolizar']);
	addPalavra('ceremony',['cerimônia']);
	addPalavra('shame',['vergonha']);
	addPalavra('ashamed',['envergonhado']);
	addPalavra('exclaim',['exclamar']);
	addPalavra('nonsense',['sem sentido']);
	addPalavra('traffic jam',['engarrafamento']);
	addPalavra('rank',['posição']);
	addPalavra('admiral',['almirante']);
	addPalavra('tailor',['alfaiate']);
	addPalavra('dressmaker',['costureira']);
	addPalavra('designer',['estilista']);
	addPalavra('baggage',['bagagem']);
	addPalavra('treat',['treatment']);
	addPalavra('shock',['choque']);
	addPalavra('allowance',['mesada']);
	addPalavra('make allowance',['abrir uma execeção']);
	addPalavra('jet',['jato']);
	addPalavra('sharp',['afiado']);
	addPalavra('process',['processo']);
	addPalavra('raw',['cru']);
	addPalavra('sample',['amostra']);
	addPalavra('undergraduate',['estudante de faculdade']);
	addPalavra('graduate',['graduado']);
	addPalavra('vain',['vaidoso']);
	addPalavra('in vain',['em vão']);
	addPalavra('as long as ( so long as )',['desde que']);
	addPalavra('turn',['vez','virar','mudar']);
	addPalavra('turn to',['recorrer a']);
	addPalavra('turn out to be',['vir a ser']);
	addPalavra('badly',['mal']);
	addPalavra('traffic lights',['semáforo']);
	addPalavra('misjudge',['julgar mal']);
	addPalavra('queue',['formar fila','fila']);
	addPalavra('jump the queue',['furar a fila']);
	addPalavra('aloud',['em voz alta']);
	addPalavra('spot',['pouco','lugar']);
	addPalavra("do ons's best",['fazer o melhor possível']);
	addPalavra('beyond',['além de']);
	addPalavra('wild',['selvagem']);
	addPalavra('fantastic',['fantástico']);
	addPalavra('expectation',['expectativa']);
	addPalavra('coarse',['grosseiro']);
	addPalavra('approach',['aproximar']);
	addPalavra('firm',['firme','firma']);
	addPalavra('mattress',['colchão']);
	addPalavra('smart',['esperto','elegante']);
	addPalavra('rot',['apodrecer']);
	addPalavra('rotten',['podre']);
	addPalavra('sheet',['lençol','folha']);
	addPalavra('blanket',['cobertor']);
	addPalavra('ray',['raio']);
	addPalavra('fever',['fabre']);
	addPalavra('ski',['esquiar']);
	addPalavra('sauce',['molho']);
	addPalavra('veil',['véu']);
	addPalavra('give in',['ceder']);
	addPalavra('mug',['atacar']);
	addPalavra('stretch',['alongar']);
	addPalavra('earnest',['sério','sincero']);
	addPalavra('run short of',['estar em escassez de']);
	addPalavra('altogether',['completamente']);
	addPalavra('model',['modelo']);
	addPalavra('representation',['representação']);
	addPalavra('in time',['na hora']);
	addPalavra('on time',['em tempo']);
	addPalavra('show',['espetáculo']);
	addPalavra('confidence',['confiança']);
	addPalavra('secret',['segredo']);
	addPalavra('keep a secret',['guardar um segredo']);
	addPalavra('self-confidence',['auto-confiança']);
	addPalavra('in confidence',['em segredo']);
	addPalavra('in secret',['em segredo']);
	addPalavra('drag',['arrastar']);
	addPalavra('figurative',['figurativo']);
	addPalavra('mean to say',['quer dizer']);
	addPalavra('whichever',['qualquer um']);
	addPalavra('idiot',['idiota']);
	addPalavra('fool',['bobo']);
	addPalavra('flash',['flash']);
	addPalavra('thunderstorm',['temporal']);
	addPalavra('image',['imagem']);
	addPalavra('signal',['sinal']);
	addPalavra('slide',['escorregar']);
	addPalavra('slip',['escorregar']);
	addPalavra('anomatopeia',['onomatopéia']);
	addPalavra('chash',['estrondo']);
	addPalavra('chush',['esmagar']);
	addPalavra('splash',['espalhar']);
	addPalavra('saucer',['pires']);
	addPalavra('tablecoth',['toalha de mesa']);
	addPalavra('file',['arquivo']);
	addPalavra('known',['conhecido']);
	addPalavra('face',['desbotar']);
	addPalavra('sunlight',['luz do sol']);
	addPalavra('do up',['amarrar']);
	addPalavra('undo',['desamarrar']);
	addPalavra('undone',['desamarrado']);
	addPalavra('zip',['ziper']);
	addPalavra('knot',['nó']);
	addPalavra('regain',['recuperar']);
	addPalavra('consciousness',['consciência']);
	addPalavra('consume',['consumir']);
	addPalavra('apploud',['aplaudir']);
	addPalavra('applause',['aplauso']);
	addPalavra('clap',['aplaudir']);
	addPalavra('blade',['lâmina']);
	addPalavra('shoulder blade',['omoplata','ombro']);
	addPalavra('cork',['rolha','cortiça']);
	addPalavra('corkscrew',['abridor de garrafas']);
	addPalavra('remove',['remover']);
	addPalavra('drive',['forçar']);
	addPalavra('staff',['funcionários']);
	addPalavra('rude',['rude']);
	addPalavra('environment',['meio ambiente']);
	addPalavra('sorrow',['tristeza']);
	addPalavra('tragedy',['tragédia']);
	addPalavra('fond of',['gostar de']);
	addPalavra('carpet',['carpete']);
	addPalavra('rug',['tapete']);
	addPalavra('mat',['capacho']);
	addPalavra('ripe',['maduro']);
	addPalavra('unripe ',['verde']);
	addPalavra('overripe',['passado do ponto']);
	addPalavra('sour',['azedo']);
	addPalavra('appoint',['indicar']);
	addPalavra('position',['posição']);
	addPalavra('surf',['surfar']);
	addPalavra('deaf',['surdo']);
	addPalavra('blame',['culpar']);
	addPalavra('court',['quadra']);
	addPalavra('rectangle',['retangulo']);
	addPalavra('rectangular',['retangular']);
	addPalavra('net',['rede']);
	addPalavra('tame',['manso']);
	addPalavra('wax',['cera']);
	addPalavra('bank',['margem']);
	addPalavra('at last',['finalmente']);
	addPalavra('in the end',['no fim']);
	addPalavra('outcome',['resultado']);
	addPalavra('left',['sobrou']);
	addPalavra('spare',['dispensar','de sobra']);
	addPalavra('puncture',['perfuração']);
	addPalavra('equipment',['equipamento']);
	addPalavra('motion',['movimento']);
	addPalavra('fool',['bobo','enganar']);
	addPalavra('owing to',['por causa do']);
	addPalavra('spill',['derramar']);
	addPalavra('former',['previo']);
	addPalavra('latter',['posterior']);
	addPalavra('the former',['o prévio']);
	addPalavra('the latter',['o atual']);
	addPalavra('arise',['surgir']);
	addPalavra('back out',['afastar','sair']);
	addPalavra('back up',['backup','dar suporte']);
	addPalavra('movement',['movimento']);
	addPalavra('sneeze',['esperirrar']);
	addPalavra('bless',['abençoar']);
	addPalavra('bless you',['saude']);
	addPalavra('depart',['partir']);
	addPalavra('departure',['embarcar']);
	addPalavra('crack',['quebrar']);
	addPalavra('workmanship',['mão de obra']);
	addPalavra('spin',['girar']);
	addPalavra('spin drier',['tambor de centrifugar']);
	addPalavra('slim',['magro']);
	addPalavra('role',['papel']);
	addPalavra('replace',['substituir']);
	addPalavra('book',['reservar']);
	addPalavra('venue',['local']);
	addPalavra('anyway',['de qualquer maneira']);
	addPalavra('warmth',['calor']);
	addPalavra('muddy',['emlameado']);
	addPalavra('meanwhile',['enquanto isso']);
	addPalavra('peck',['bicar']);
	addPalavra('beack',['bico']);
	addPalavra('block',['bloco','obstruir']);
	addPalavra('clay',['argila']);
	addPalavra('cream',['creme']);
	addPalavra('spring',['saltar','mola']);
	addPalavra('curious',['curioso']);
	addPalavra('investigate',['investigar']);
	addPalavra('keen',['afeiçoado']);
	addPalavra('article',['artigo']);
	addPalavra('journalist',['jornalista']);
	addPalavra('bold',['bravo','forte']);
	addPalavra('courageous',['corajoso']);
	addPalavra('strike',['bater']);
	addPalavra('strinking',['impressionante']);
	addPalavra('survive',['sobreviver']);
	addPalavra('shoplift',['furtar']);
	addPalavra('emprison',['emprisionar']);
	addPalavra('remedy',['remédio']);
	addPalavra('cure',['cura']);
	addPalavra('aircraft',['aeronave']);
	addPalavra('helicopter',['helicoptero']);
	addPalavra('stain',['tingir','pintar']);
	addPalavra('woodwork',['carpintaria']);
	addPalavra('ink',['tinta']);
	addPalavra('creep',['rastejar']);
	addPalavra('passage',['passagem','trecho']);
	addPalavra('extract',['extrato']);
	addPalavra('steer',['manobrar']);
	addPalavra('steering wheel',['direção']);
	addPalavra('aside',['de lado']);
	addPalavra('obey',['obedecer']);
	addPalavra('disobey',['desobedecer']);
	addPalavra('stick',['pregar']);
	addPalavra('pin',['alfinete']);
	addPalavra('drawing pin',['taxinha']);
	addPalavra('apposition',['oposição']);
	addPalavra('border',['fronteira']);
	addPalavra('pattern',['padrão']);
	addPalavra('financial',['financeiro']);
	addPalavra('weave',['tecer']);
	addPalavra('ruin',['arruinar','ruina']);
	addPalavra('tourism',['turismo']);
	addPalavra('whisper',['sussurrar']);
	addPalavra('lamp',['lampada']);
	addPalavra('garage',['garagem']);
	addPalavra('stiff',['rígido']);
	addPalavra('muscle',['músculo']);
	addPalavra('cardboard',['cartolina']);
	addPalavra('astonish',['surpreender']);
	addPalavra('refusal',['recusar']);
	addPalavra('bound',['cercado']);
	addPalavra('out of bounds',['fora dos limites']);
	addPalavra('boundary',['fronteira']);
	addPalavra('bee',['abelha']);
	addPalavra('wasp',['vespa']);
	addPalavra('sting',['ferroar']);
	addPalavra('sansation',['sansação']);
	addPalavra('slap',['esbofetar']);
	addPalavra('curl',['cacho','cachear']);
	addPalavra('paste',['pasta']);
	addPalavra('toothpaste',['pasta de dente']);
	addPalavra('creative',['criativo']);
	addPalavra('novel',['romance']);
	addPalavra('store',['loja','armazenar']);
	addPalavra('variety',['variedade']);
	addPalavra('tinned food',['comida enlatada']);
	addPalavra('toy',['brinquedo']);
	addPalavra('attempt',['tentativa']);
	addPalavra('mountaineer',['alpinista']);
	addPalavra('bow',['arco','curvar']);
	addPalavra('bow tie',['gravata borboleta']);
	addPalavra('rainbow',['arcoiris']);
	addPalavra('stove',['forno']);
	addPalavra('run on',['funcionar']);
	addPalavra('cupboard',['armário']);
	addPalavra('current',['atual']);
	addPalavra('awkward',['estranho','embaraçoso']);
	addPalavra('well',['poço']);
	addPalavra('fan',['abanar','fã']);
	addPalavra('goat',['bode']);
	addPalavra('horn',['chifre']);
	addPalavra('rocky',['rochoso']);
	addPalavra('hillside',['encosta']);
	addPalavra('pinch',['beliscar']);
	addPalavra('propose',['propor','pretender']);
	addPalavra('total',['total']);
	addPalavra('billion',['bilhões']);
	addPalavra('swing',['balança']);
	addPalavra('to and fro',['pra frente e para trás']);
	addPalavra('funny',['estranho']);
	addPalavra('crossword',['palavras cruzadas']);
	addPalavra('jigsaw',['quebra cabeça']);
	addPalavra('puzzle',['enigma']);
	addPalavra('accompany',['acompanhar']);
	addPalavra('swear',['jurar']);
	addPalavra('strip',['despir','tira de papel']);
	addPalavra('stripe',['listra']);
	addPalavra('undress',['despir']);
	addPalavra('ballon',['balão']);
	addPalavra('burst',['explodir']);
	addPalavra('burst into tears',['cais aos prantos']);
	addPalavra('swell',['inchar']);
	addPalavra('swelling',['inchaço']);
	addPalavra('awful',['horrível']);
	addPalavra('mood',['humor ']);
	addPalavra('frame',['batente','moldura']);
	addPalavra('frame of mind',['estado de espírito']);
	addPalavra('lump',['pedaço']);
	addPalavra('train',['treinar']);
	addPalavra('clerk',['escritório']);
	addPalavra('clerical',['de escritório']);
	addPalavra('hook',['gancho']);
	addPalavra('resign',['demitir','se']);
	addPalavra('tremble',['tremer']);
	addPalavra('shiver',['tremer']);
	addPalavra('ditch',['vala']);
	addPalavra('excess',['excesso']);
	addPalavra('pie',['torta']);
	addPalavra('pastry',['massa']);
	addPalavra('stric',['severo','exato']);
	addPalavra('revenge',['vingança']);
	addPalavra('repay',['retibuir']);
	addPalavra('wrong',['enganar','enganação']);
	addPalavra('satisfying',['satisfatório']);
	addPalavra('dive',['mergulhar']);
	addPalavra('advisable',['recomendável']);
	addPalavra('promote',['promover']);
	addPalavra('promotion',['promoção']);
	addPalavra('income',['renda']);
	addPalavra('network',['rede']);
	addPalavra('log on(in)',['entrar no sistema']);
	addPalavra('password',['senha']);
	addPalavra('committee',['comitê']);
	addPalavra('parliamentary',['parlamentar']);
	addPalavra('cough',['tossir']);
	addPalavra('reward',['recompensa']);
	addPalavra('twist',['torcer']);
	addPalavra("to one's taste",['ao seu gosto']);
	addPalavra('coward',['covarde']);
	addPalavra('rust',['enferrujar']);
	addPalavra('stroke',['golpe','afagar']);
	addPalavra('roar',['rugir']);
	addPalavra('slop',['declive']);
	addPalavra('steep',['ingreme']);
	addPalavra('brake',['freio']);
	addPalavra('terra',['soil']);
	addPalavra('shield',['escudo']);
	addPalavra('bleed',['sangrar']);
	addPalavra('plaster',['gesso']);
	addPalavra('spit',['cuspir']);
	addPalavra('comb',['pentear']);
	addPalavra('rubber',['borracha']);
	addPalavra('tyre',['pneu']);
	addPalavra('ribbon',['fita']);
	addPalavra('tie up',['amarrar']);
	addPalavra('stuff',['coisas']);
	addPalavra('manufacture',['manufaturar']);
	addPalavra('hob',['fogão']);
	addPalavra('grill',['gril']);
	addPalavra('oven',['forno']);
	addPalavra('trunk',['tronco','tromba','baú']);
	addPalavra('call',['chamar']);
	addPalavra('shell',['casca']);
	addPalavra('outer',['exterior']);
	addPalavra('shy',['timido']);
	addPalavra('mature',['maduro']);
	addPalavra('diminish',['diminuir']);
	addPalavra('sow',['plantar']);
	addPalavra('wrap',['embrulhar']);
	addPalavra('wrap up',['empacotar']);
	addPalavra('sticky tape',['fita adevisa']);
	addPalavra('string',['barbante']);
	addPalavra('bribe',['suborno']);
	addPalavra('department',['departamento']);
	addPalavra('threaten',['ameaçar']);

}