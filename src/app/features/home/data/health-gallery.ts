export interface HealthArticle {
  id: string;
  category: 'Respiração' | 'Garganta' | 'Sono';
  title: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
  crop: string;
  featured?: boolean;
  width?: number;
  height?: number;
  credit?: { author: string; source: string; license: string; licenseUrl: string };
}

export const HEALTH_ARTICLES: readonly HealthArticle[] = [
  {
    id: 'septoplastia', category: 'Respiração', featured: true,
    title: 'Cirurgia do desvio de septo: conheça a septoplastia',
    summary: 'Quando o desvio de septo dificulta a passagem do ar, a avaliação pode incluir a possibilidade de correção cirúrgica. Entenda o que orienta essa decisão.',
    detail: 'O septo é a estrutura que separa as duas cavidades do nariz. A septoplastia busca corrigir seu desvio quando ele contribui para a obstrução nasal. Ter um desvio não significa precisar de cirurgia: sintomas, exame do nariz e outras causas de dificuldade para respirar orientam a indicação. Na consulta, converse sobre alternativas, riscos e recuperação; os resultados variam de pessoa para pessoa.',
    image: '/images/tema-cirurgia-nasal.jpg', crop: 'model',
    alt: 'Modelo anatômico de nariz e garganta apresentado em um post educativo; imagem ilustrativa.',
  },
  {
    id: 'adenoides', category: 'Garganta',
    title: 'Retirada das adenoides: o que é a adenoidectomia?',
    summary: 'Localizadas atrás do nariz, as adenoides podem participar de quadros de obstrução respiratória quando aumentadas.',
    detail: 'As adenoides são tecidos de defesa localizados atrás do nariz e não são as mesmas estruturas que as amígdalas. A adenoidectomia é a cirurgia para sua retirada. Ela pode ser considerada em situações como obstrução da respiração ou infecções recorrentes, conforme avaliação individual. A decisão considera os sintomas, o histórico e os benefícios e riscos de cada opção.',
    image: '/images/tema-adenoides.svg', crop: 'illustration', width: 375, height: 305,
    alt: 'Ilustração em perfil que localiza as adenoides atrás do nariz e as amígdalas na garganta; legendas em inglês.',
    credit: { author: 'Cancer Research UK / Wikimedia Commons', source: 'https://commons.wikimedia.org/wiki/File:Diagram_showing_the_adenoids_and_tonsils_CRUK_280.svg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  },
  {
    id: 'cornetos', category: 'Respiração',
    title: 'Cirurgia dos cornetos: redução para a passagem do ar',
    summary: 'Entenda por que o tratamento cirúrgico dos cornetos costuma envolver a redução do volume, preservando sua função.',
    detail: 'Os cornetos são estruturas dentro do nariz que ajudam a aquecer, umidificar e filtrar o ar. Quando aumentados, podem contribuir para a obstrução nasal. Se o tratamento clínico não for suficiente, pode ser considerada uma cirurgia para reduzir seu volume, com preservação de tecido e função. Termos como turbinoplastia e turbinectomia parcial descrevem técnicas diferentes; a escolha depende da avaliação médica e não significa retirada completa dos cornetos.',
    image: '/images/tema-cornetos.png', crop: 'illustration', width: 500, height: 468,
    alt: 'Ilustração anatômica da parede lateral do nariz, mostrando os cornetos superior, médio e inferior.',
    credit: { author: 'Henry Vandyke Carter / Wikimedia Commons', source: 'https://commons.wikimedia.org/wiki/File:Gray855.png', license: 'Domínio público', licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' },
  },
  {
    id: 'rinossinusite', category: 'Respiração', title: 'Nariz e seios da face: entendendo as rinossinusites',
    summary: 'Obstrução nasal, secreção e pressão no rosto: compreender os sintomas é o início da conversa.',
    detail: 'A rinossinusite envolve a inflamação dos seios da face. A duração e a frequência dos sintomas fazem parte da avaliação. A escolha do tratamento depende do diagnóstico individual; um conteúdo educativo não define a necessidade de cirurgia.',
    image: '/images/tema-rinossinusite.jpg', crop: 'sinus',
    alt: 'Ilustração dos seios da face em uma representação do rosto, retirada do post sobre rinossinusites.',
  },
  {
    id: 'amigdalas', category: 'Garganta', title: 'Amígdalas: quando conversar sobre cirurgia?',
    summary: 'Infecções que se repetem merecem atenção. A indicação cirúrgica é sempre individual.',
    detail: 'As amígdalas fazem parte do sistema de defesa do organismo. Infecções recorrentes e alterações na respiração podem motivar uma avaliação. A cirurgia não é necessária em todos os casos: histórico, frequência das infecções e condições individuais orientam a decisão médica.',
    image: '/images/tema-amigdalas.jpg', crop: 'throat',
    alt: 'Ilustração em perfil da garganta, com a região das amígdalas destacada, retirada do post educativo.',
  },
  {
    id: 'apneia', category: 'Sono', title: 'Ronco e apneia: atenção à respiração à noite',
    summary: 'Ronco frequente e pausas respiratórias durante o sono são informações importantes para a consulta.',
    detail: 'O ronco pode estar relacionado à apneia do sono, mas não confirma o diagnóstico sozinho. Se alguém observa pausas na sua respiração durante a noite, relate isso ao médico. A avaliação individual ajuda a compreender esses sinais.',
    image: '/images/tema-apneia.jpg', crop: 'apnea',
    alt: 'Imagem ilustrativa de uma pessoa dormindo, usada no post sobre respiração durante o sono; não representa paciente da médica.',
  },
  {
    id: 'descanso', category: 'Sono', title: 'Sono reparador e disposição no dia a dia',
    summary: 'Como você se sente ao acordar também merece espaço na conversa sobre saúde.',
    detail: 'A quantidade de horas dormidas é apenas uma parte da história. Sonolência durante o dia, ronco e a percepção de como foi a noite são informações úteis na avaliação do sono. Esses sinais, isoladamente, não definem uma doença.',
    image: '/images/tema-sono.jpg', crop: 'rest',
    alt: 'Imagem ilustrativa de uma pessoa descansando sobre um travesseiro, usada no post sobre sono reparador; não representa paciente da médica.',
  },
];
