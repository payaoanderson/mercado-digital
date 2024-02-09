alert('clique no ok para abrir o site');



function atualizarData() {
    // Criar um novo objeto de data
    var data = new Date();
    
    // Obter os componentes da data
    var dia = data.getDate();
    var mes = data.getMonth() + 1; // Os meses são baseados em zero
    var ano = data.getFullYear();
    
    // Obter os componentes do tempo
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    // Formatar a data e hora
    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + segundos;
    
    // Atualizar o conteúdo do elemento HTML com a nova data
    document.getElementById('data').textContent = dataFormatada;
  }
  
  // Chamar a função inicialmente para exibir a data
  atualizarData();
  
  // Atualizar a data a cada segundo (1000 milissegundos)
  setInterval(atualizarData, 1000);



    var spanAno = document.getElementById('ano');

    // Obtém o ano atual
    var anoAtual = new Date().getFullYear();

    // Define o texto do elemento para o ano atual
    spanAno.textContent = anoAtual;

  