var americaMG = {
    nome: "América MG",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var athleticoPR = {
    nome: "Athletico PR",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var atleticoGO = {
    nome: "Atlético GO",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var atleticoMG = {
    nome: "Atlético MG",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var avai = {
    nome: "Avaí",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var botafogo = {
    nome: "Botafogo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var ceara = {
    nome: "Ceará",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var corinthians = {
    nome: "Corinthians",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var coritiba = {
    nome: "Coritiba",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var cuiaba = {
    nome: "Cuiabá",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var flamengo = {
    nome: "Flamengo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var fluminense = {
    nome: "Fluminense",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var fortaleza = {
    nome: "Fortaleza",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var goias = {
    nome: "Goiás",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var internacional = {
    nome: "Internacional",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var juventude = {
    nome: "Juventude",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var palmeiras = {
    nome: "Palmeiras",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var bragantino = {
    nome: "Bragantino",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var santos = {
    nome: "Santos",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

var saoPaulo = {
    nome: "São Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
};

function calculaPontos(time) {
    var pontos = time.vitorias * 3 + time.empates;
    return pontos;
};

americaMG.pontos = calculaPontos(americaMG);
athleticoPR.pontos = calculaPontos(athleticoPR);
atleticoGO.pontos = calculaPontos(atleticoGO);
atleticoMG.pontos = calculaPontos(atleticoMG);
avai.pontos = calculaPontos(avai);
botafogo.pontos = calculaPontos(botafogo);
ceara.pontos = calculaPontos(ceara);
corinthians.pontos = calculaPontos(corinthians);
coritiba.pontos = calculaPontos(coritiba);
cuiaba.pontos = calculaPontos(cuiaba);
flamengo.pontos = calculaPontos(flamengo);
fluminense.pontos = calculaPontos(fluminense);
fortaleza.pontos = calculaPontos(fortaleza);
goias.pontos = calculaPontos(goias);
internacional.pontos = calculaPontos(internacional);
juventude.pontos = calculaPontos(juventude);
palmeiras.pontos = calculaPontos(palmeiras);
bragantino.pontos = calculaPontos(bragantino);
santos.pontos = calculaPontos(santos);
saoPaulo.pontos = calculaPontos(saoPaulo);

var times = [americaMG, athleticoPR, atleticoGO, atleticoMG, avai, botafogo, ceara, corinthians, coritiba, cuiaba, flamengo, fluminense, fortaleza, goias, internacional, juventude, palmeiras, bragantino, santos, saoPaulo]

function exibeTimesNaTela(times) {
    var elemento = ""
    for (var i = 0; i < times.length; i++) {
        elemento += "<tr><td>" + times[i].nome + "</td>";
        elemento += "<td>" + times[i].vitorias + "</td>";
        elemento += "<td>" + times[i].empates + "</td>";
        elemento += "<td>" + times[i].derrotas + "</td>";
        elemento += "<td>" + times[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaTimes = document.getElementById("tabelaJogadores");
    tabelaTimes.innerHTML = elemento;
    
}

exibeTimesNaTela(times);

function adicionarVitoria(i) {
    var time = times[i]
    time.vitorias++
    time.pontos = calculaPontos(time)
    exibeTimesNaTela(times)
}

function adicionarEmpate(i) {
    var time = times[i]
    time.empates++
    time.pontos = calculaPontos(time)
    exibeTimesNaTela(times)
}

function adicionarDerrota(i) {
    var time = times[i]
    time.derrotas++
    exibeTimesNaTela(times)
}