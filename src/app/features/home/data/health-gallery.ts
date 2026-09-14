export interface HealthArticle {
  id: string;
  category: 'Respiração' | 'Garganta' | 'Sono';
  title: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
  crop: string;
}

export const HEALTH_ARTICLES: readonly HealthArticle[] = [
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
