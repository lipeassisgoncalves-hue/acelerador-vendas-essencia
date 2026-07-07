export const questions = [
  {
    id: 'stage',
    title: 'Em qual fase esta o seu negocio hoje?',
    options: [
      { label: 'Estou comecando agora', value: 'iniciante', score: 1 },
      { label: 'Ja atendo, mas sem agenda cheia', value: 'crescimento', score: 2 },
      { label: 'Tenho clientes, mas quero faturar mais', value: 'expansao', score: 3 },
    ],
  },
  {
    id: 'monthlyRevenue',
    title: 'Qual seu faturamento medio mensal com unhas?',
    options: [
      { label: 'Ate R$ 1.500', value: 'low', score: 1 },
      { label: 'Entre R$ 1.500 e R$ 4.000', value: 'mid', score: 2 },
      { label: 'Acima de R$ 4.000', value: 'high', score: 3 },
    ],
  },
  {
    id: 'mainChallenge',
    title: 'Qual e o maior desafio hoje?',
    options: [
      { label: 'Atrair clientes todos os dias', value: 'atracao', score: 1 },
      { label: 'Cobrar melhor sem perder clientes', value: 'preco', score: 2 },
      { label: 'Organizar agenda, conteudo e vendas', value: 'gestao', score: 3 },
    ],
  },
  {
    id: 'salesRoutine',
    title: 'Como voce vende seus horarios?',
    options: [
      { label: 'Posto quando lembro', value: 'ocasional', score: 1 },
      { label: 'Uso stories e WhatsApp, mas sem roteiro', value: 'manual', score: 2 },
      { label: 'Tenho processo, mas quero otimizar', value: 'processo', score: 3 },
    ],
  },
  {
    id: 'positioning',
    title: 'Como voce percebe seu posicionamento?',
    options: [
      { label: 'Ainda pareco igual a outras profissionais', value: 'indefinido', score: 1 },
      { label: 'Tenho estilo, mas comunico pouco valor', value: 'em_progresso', score: 2 },
      { label: 'Tenho identidade clara e quero escalar', value: 'claro', score: 3 },
    ],
  },
]

export const profiles = {
  beginner: {
    name: 'Iniciante',
    range: [5, 7],
    headline: 'Voce esta construindo a base do seu negocio e precisa vender com mais clareza desde o comeco.',
    diagnosis:
      'Sua tecnica pode estar evoluindo, mas o negocio ainda depende de indicacoes, postagens soltas e muita tentativa para conseguir clientes.',
    problem:
      'O principal problema e a falta de uma mensagem clara: a cliente ainda nao entende rapidamente por que escolher voce, qual experiencia vai receber e como agendar.',
    opportunity:
      'Com uma base simples de posicionamento, conteudo e atendimento, voce pode comecar a atrair clientes mais alinhadas e ganhar seguranca para apresentar seus servicos.',
    methodHelp:
      'O Metodo Essencia organiza seus primeiros passos: promessa, perfil de cliente, oferta inicial, rotina de stories e abordagem no WhatsApp sem parecer insistente.',
    focus: ['Definir promessa clara', 'Criar rotina de stories', 'Montar abordagem de WhatsApp'],
  },
  growing: {
    name: 'Profissional em crescimento',
    range: [8, 10],
    headline: 'Voce ja tem movimento, mas ainda perde oportunidades por vender no improviso.',
    diagnosis:
      'Seu negocio ja mostra sinais de crescimento. Existem clientes, procura e potencial, mas a agenda pode oscilar porque a comunicacao e o fechamento ainda nao seguem um processo.',
    problem:
      'O principal problema e depender demais do momento: quando voce posta pouco, responde sem roteiro ou nao reforca valor, as vendas ficam menos previsiveis.',
    opportunity:
      'Ao transformar interesse em conversa guiada e conteudo em desejo, voce pode aproveitar melhor cada contato sem precisar prometer resultados irreais.',
    methodHelp:
      'O Metodo Essencia ajuda a criar um fluxo de vendas simples: conteudo que prepara a cliente, mensagens de follow-up e argumentos para sustentar seu preco com profissionalismo.',
    focus: ['Padronizar follow-up', 'Aumentar percepcao de valor', 'Vender sem depender de desconto'],
  },
  organized: {
    name: 'Nail designer organizada',
    range: [11, 13],
    headline: 'Voce tem estrutura, mas pode transformar organizacao em uma experiencia mais valorizada.',
    diagnosis:
      'Voce ja entende melhor sua rotina, atende com mais consistencia e provavelmente tem uma base de clientes. Agora o desafio e elevar valor percebido e reduzir esforco manual.',
    problem:
      'O principal problema e que sua organizacao ainda pode estar invisivel para a cliente. Se ela nao percebe seu diferencial, compara seu trabalho por preco.',
    opportunity:
      'Existe espaco para reposicionar servicos, melhorar ticket medio e comunicar uma experiencia mais premium sem perder sua identidade.',
    methodHelp:
      'O Metodo Essencia mostra como embalar seu atendimento, ajustar ofertas, organizar argumentos de venda e criar uma comunicacao que valoriza o cuidado por tras do seu trabalho.',
    focus: ['Reposicionar servicos', 'Melhorar ticket medio', 'Comunicar experiencia premium'],
  },
  scaling: {
    name: 'Empresaria em expansao',
    range: [14, 15],
    headline: 'Voce esta pronta para pensar como marca e tomar decisoes com mais estrategia.',
    diagnosis:
      'Seu negocio tem maturidade: existe demanda, identidade e capacidade de vender. O proximo passo e refinar processos para crescer com consistencia e margem.',
    problem:
      'O principal problema e centralizar tudo em voce. Sem uma estrategia mais clara de oferta, conteudo e relacionamento, crescer pode virar sobrecarga.',
    opportunity:
      'Voce pode fortalecer autoridade, selecionar melhor clientes e criar uma agenda mais intencional, com servicos que sustentem valor e nao apenas volume.',
    methodHelp:
      'O Metodo Essencia ajuda a revisar posicionamento, construir uma comunicacao mais estrategica e criar uma oferta que apoia crescimento sem abrir mao da qualidade.',
    focus: ['Escalar autoridade', 'Criar agenda intencional', 'Melhorar margem por atendimento'],
  },
}
