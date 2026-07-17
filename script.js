const buttons = document.querySelectorAll('.option-btn');
const video = document.getElementById('mainVideo');
const stageHotspotContainers = document.querySelectorAll('.stage-hotspots');
const stagePanel = document.getElementById('stagePanel');
const stagePanelTitle = document.getElementById('stagePanelTitle');
const stagePanelText = document.getElementById('stagePanelText');
const stagePanelInner = document.querySelector('.stage-panel-inner');

function replayPanelAnimation() {
  stagePanelInner.classList.remove('animate');
  void stagePanelInner.offsetWidth; // força reflow pra reiniciar a animação
  stagePanelInner.classList.add('animate');
}

const videoMap = {
  jeans: 'vdo/Button 1.webm',
  livro: 'vdo/Button 2.webm',
  xicara: 'vdo/Button 3.webm',
  lata: 'vdo/Button 4.webm',
};

const panelDefaults = {
  jeans: 'JEANS',
  xicara: 'CAFÉ',
  lata: 'LATA DE ALUMÍNIO',
  livro: 'LIVRO',
};

const stagesByItem = {
  xicara: {
    cultivo: {
      titulo: 'Cultivo',
      texto: 'O cafeeiro leva, em média, 3 anos para produzir os primeiros frutos e pode permanecer produtivo por 20 a 30 anos. O Brasil é o maior produtor e exportador de café do mundo.',
    },
    colheita: {
      titulo: 'Colheita',
      texto: 'A colheita ocorre, geralmente, uma vez por ano, quando os frutos atingem a maturação ideal. Dependendo da região, pode ser manual ou mecanizada.',
    },
    beneficiamento: {
      titulo: 'Beneficiamento',
      texto: 'Após a colheita, os grãos passam por secagem, seleção, torra e moagem. A torra dura cerca de 10 a 20 minutos, mas define grande parte do aroma e do sabor da bebida.',
    },
    distribuicao: {
      titulo: 'Distribuição',
      texto: 'Depois de embalado, o café percorre milhares de quilômetros até chegar ao consumidor. O Brasil exporta café para mais de 100 países.',
    },
    consumo: {
      titulo: 'Consumo',
      texto: 'São necessários cerca de 10 gramas de café moído para preparar uma xícara tradicional de 200 ml. O café está entre as bebidas mais consumidas do planeta.',
    },
    residuo: {
      titulo: 'Resíduo',
      texto: 'Grande parte do resíduo gerado é a borra de café, rica em matéria orgânica. Quando descartada no lixo comum, perde seu potencial de reaproveitamento.',
    },
    reaproveitamento: {
      titulo: 'Reaproveitamento',
      texto: 'A borra pode ser transformada em composto orgânico, utilizada como substrato para o cultivo de cogumelos ou até na produção de biocombustíveis e cosméticos.',
    },
    retorno: {
      titulo: 'Retorno',
      texto: 'Após a compostagem, os nutrientes retornam ao solo, enriquecendo a terra e ajudando no desenvolvimento de novas plantas, fechando um ciclo natural de renovação.',
    },
  },
  jeans: {
    cultivo: {
      titulo: 'Cultivo e Colheita',
      texto: 'O algodão leva, em média, 150 a 180 dias entre o plantio e a colheita. O Brasil está entre os cinco maiores produtores mundiais, com destaque para Mato Grosso e Bahia. A colheita é predominantemente mecanizada no Brasil: após a retirada dos capulhos, as fibras seguem para beneficiamento, onde são separadas das sementes.',
    },
    tecelagem: {
      titulo: 'Fiação e Tecelagem',
      texto: 'As fibras são transformadas em fios e depois entrelaçadas para formar o denim. Uma única calça jeans utiliza, em média, 1 a 1,5 kg de algodão em caroço para produzir a quantidade de fibra necessária.',
    },
    tingimento: {
      titulo: 'Tingimento',
      texto: 'O tradicional azul do jeans vem do índigo, um pigmento conhecido há milhares de anos. O fio é mergulhado diversas vezes no corante para atingir sua tonalidade característica.',
    },
    confeccao: {
      titulo: 'Confecção',
      texto: 'Uma calça jeans pode reunir mais de 40 peças diferentes, além de bolsos, zíperes, botões e rebites. A montagem leva apenas alguns minutos em linhas industriais automatizadas.',
    },
    distribuicao: {
      titulo: 'Distribuição',
      texto: 'Depois de pronta, a peça pode percorrer centenas ou milhares de quilômetros entre a fábrica, centros de distribuição, lojas e o consumidor final.',
    },
    consumo: {
      titulo: 'Consumo',
      texto: 'Uma calça jeans costuma permanecer em uso por 5 a 10 anos, dependendo dos cuidados. Reparos, customizações e brechós podem ampliar significativamente sua vida útil.',
    },
    reciclagem: {
      titulo: 'Reciclagem Têxtil',
      texto: 'Quando reciclado, o jeans pode ganhar nova vida como isolamento acústico, enchimento, mantas industriais ou novos fios têxteis, reduzindo a necessidade de produzir algodão virgem.',
    },
    decomposicao: {
      titulo: 'Decomposição',
      texto: 'Um jeans composto majoritariamente por algodão pode levar de algumas décadas até cerca de 100 anos para se decompor, dependendo das condições ambientais. Modelos com fibras sintéticas, como poliéster ou elastano, podem permanecer por muito mais tempo.',
    },
  },
  lata: {
    extracao: {
      titulo: 'Extração',
      texto: 'O alumínio nasce da bauxita, um minério abundante. O Brasil está entre os cinco maiores produtores de bauxita do mundo, com minas concentradas principalmente na região Norte.',
    },
    refino: {
      titulo: 'Refino',
      texto: 'A bauxita é refinada para produzir alumina e, depois, transformada em alumínio por eletrólise. Essa é a etapa que mais consome energia em todo o ciclo produtivo.',
    },
    fabricacao: {
      titulo: 'Fabricação',
      texto: 'O alumínio é laminado em chapas extremamente finas e moldado em latas. Uma lata de 350 ml pesa, em média, cerca de 13 gramas, mas suporta alta pressão interna.',
    },
    distribuicao: {
      titulo: 'Distribuição',
      texto: 'Após serem produzidas, as latas são preenchidas, lacradas e distribuídas para todo o país. Sua leveza reduz custos logísticos e emissões durante o transporte.',
    },
    consumo: {
      titulo: 'Consumo',
      texto: 'O Brasil consome dezenas de bilhões de latas de bebidas por ano. Além de proteger o conteúdo, o alumínio resfria rapidamente, uma das razões de sua popularidade.',
    },
    descarte: {
      titulo: 'Descarte',
      texto: 'Quando descartada corretamente, a lata entra na cadeia da reciclagem. Seu alto valor comercial faz dela um dos materiais mais coletados por cooperativas e catadores.',
    },
    reciclagem: {
      titulo: 'Reciclagem',
      texto: 'O alumínio reciclado economiza cerca de 95% da energia necessária para produzir alumínio primário. No Brasil, uma lata pode voltar às prateleiras em aproximadamente 60 dias após ser descartada.',
    },
    novavida: {
      titulo: 'Nova Vida',
      texto: 'O alumínio pode ser reciclado infinitas vezes, sem perda significativa de qualidade. A mesma matéria-prima pode circular continuamente, reduzindo a necessidade de novas extrações.',
    },
  },
  livro: {
    cultivo: {
      titulo: 'Cultivo Florestal',
      texto: 'No Brasil, a maior parte do papel é produzida a partir de florestas plantadas de eucalipto e pinus, e não de florestas nativas. O eucalipto leva, em média, 6 a 7 anos para atingir o ponto de colheita.',
    },
    extracao: {
      titulo: 'Extração',
      texto: 'Após o crescimento, as árvores são colhidas por máquinas especializadas. Grande parte dos galhos, folhas e cascas permanece no solo, ajudando a devolver nutrientes para a próxima floresta.',
    },
    producao: {
      titulo: 'Produção de Papel',
      texto: 'A madeira é transformada em celulose e, depois, em papel. O Brasil está entre os maiores produtores mundiais de celulose, produzindo dezenas de milhões de toneladas por ano.',
    },
    impressao: {
      titulo: 'Impressão',
      texto: 'Após a fabricação do papel, as folhas recebem tinta, acabamento e encadernação. Um livro pode ser produzido em poucas horas, embora seu desenvolvimento editorial normalmente leve meses.',
    },
    distribuicao: {
      titulo: 'Distribuição',
      texto: 'Os livros percorrem centros de distribuição, editoras, livrarias e lojas virtuais antes de chegar ao leitor. Em muitos casos, percorrem centenas ou milhares de quilômetros.',
    },
    leitura: {
      titulo: 'Leitura',
      texto: 'Um livro pode durar décadas quando bem conservado. Diferentemente de muitos produtos, seu valor aumenta à medida que seu conteúdo é compartilhado.',
    },
    reciclagem: {
      titulo: 'Reciclagem',
      texto: 'Quando não pode mais ser utilizado, o papel pode ser reciclado e transformado em caixas, embalagens, papelão ou novos papéis. As fibras de papel costumam suportar de 5 a 7 ciclos de reciclagem antes de perderem resistência.',
    },
    reciclado: {
      titulo: 'Papel Reciclado',
      texto: 'Após a reciclagem, as fibras do papel voltam ao processo produtivo e podem dar origem a cadernos, caixas, embalagens e novos papéis. Cada fibra pode ser reciclada, em média, de 5 a 7 vezes, prolongando seu ciclo de vida antes de retornar definitivamente à natureza.',
    },
  },
};

function resetStageOverlay() {
  stageHotspotContainers.forEach(c => c.classList.remove('active'));
  stagePanel.classList.remove('active');
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));
}

function showStage(item, stage, btn) {
  const info = stagesByItem[item] && stagesByItem[item][stage];
  if (!info) return;
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));
  btn.classList.add('selected');
  stagePanelTitle.textContent = info.titulo;
  stagePanelText.textContent = info.texto;
  stagePanel.classList.add('active');
  replayPanelAnimation();
}

stageHotspotContainers.forEach(container => {
  const item = container.dataset.item;
  container.querySelectorAll('.hotspot').forEach(btn => {
    btn.addEventListener('click', () => showStage(item, btn.dataset.stage, btn));
  });
});

video.addEventListener('ended', () => {
  const activeBtn = document.querySelector('.option-btn.active');
  const item = activeBtn && activeBtn.dataset.item;
  if (!stagesByItem[item]) return;
  const container = document.querySelector(`.stage-hotspots[data-item="${item}"]`);
  if (!container) return;
  container.classList.add('active');
  stagePanelTitle.textContent = panelDefaults[item] || '';
  stagePanelText.textContent = 'Toque em um dos círculos para ver a história daquela etapa.';
  stagePanel.classList.add('active');
  replayPanelAnimation();
});

function playItem(item, { unmute = false } = {}) {
  const src = videoMap[item];
  if (!src) return;
  resetStageOverlay();
  video.src = encodeURI(src);
  video.currentTime = 0;
  if (unmute) video.muted = false;
  video.play().catch(() => {
    // autoplay bloqueado (sem gesto do usuário): mantém mudo e tenta de novo
    video.muted = true;
    video.play().catch(() => {});
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    playItem(btn.dataset.item, { unmute: true });
  });
});

// JEANS aceso por padrão, igual à referência — toca sozinho ao abrir
const jeansBtn = document.querySelector('.option-btn[data-item="jeans"]');
jeansBtn.classList.add('active');
playItem('jeans');
