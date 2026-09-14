import { Formation } from '../../../shared/models/content.model';

// Formação descrita no perfil San Dieu, sem inferir datas ou segundo RQE.
export const FORMATION: readonly Formation[] = [
  { label: 'Medicina', institution: 'Escola Bahiana de Medicina e Saúde Pública', location: 'Graduação · Salvador, BA' },
  { label: 'Otorrinolaringologia', institution: 'INOOA', location: 'Formação médica · Salvador, BA' },
  { label: 'Medicina do Sono', institution: 'Instituto do Sono', location: 'Formação complementar · São Paulo, SP' },
];

export interface HealthTopic {
  category: string;
  title: string;
  description: string;
  symbol: string;
}
export const HEALTH_TOPICS: readonly HealthTopic[] = [
  { category: 'Nariz e respiração', title: 'Rinossinusites', symbol: 'air',
    description: 'A inflamação dos seios da face pode estar associada a obstrução nasal, secreção e pressão no rosto. Entender a causa ajuda a orientar a avaliação.' },
  { category: 'Garganta', title: 'Amígdalas e infecções', symbol: 'plus',
    description: 'Infecções que se repetem e alterações das amígdalas merecem avaliação individual. A necessidade de cirurgia depende de critérios clínicos.' },
  { category: 'Sono', title: 'Ronco e apneia', symbol: 'moon',
    description: 'Ronco frequente e pausas na respiração durante o sono merecem atenção. O diagnóstico depende de avaliação médica.' },
  { category: 'Voz', title: 'Rouquidão persistente', symbol: 'voice',
    description: 'Mudanças na voz, cansaço ao falar e rouquidão persistente são motivos para buscar avaliação e compreender o que está acontecendo.' },
];

export const FAQS = [
  { question: 'Todo desvio de septo precisa de cirurgia?', answer: 'Não. A septoplastia pode ser indicada quando o desvio contribui para a dificuldade de respirar pelo nariz. A decisão depende dos sintomas, do exame nasal e da avaliação de outras possíveis causas de obstrução. Na consulta, são discutidas as opções de tratamento e os benefícios e riscos da cirurgia para cada pessoa.' },
  { question: 'Todo ronco significa apneia do sono?', answer: 'Não. O ronco pode estar relacionado à apneia, mas não confirma o diagnóstico sozinho. Pausas respiratórias percebidas durante o sono e sonolência diurna são informações importantes para relatar na avaliação.' },
  { question: 'Infecções nas amígdalas sempre precisam de cirurgia?', answer: 'Não. A cirurgia é considerada em situações específicas, após avaliar a frequência das infecções, o histórico e as condições de cada pessoa. A indicação deve ser individualizada.' },
  { question: 'Como saber sobre horários e agendamento?', answer: 'Entre em contato com a Clínica Otos para consultar os horários da Dra. Lilian Leal e obter informações sobre agendamento.' },
] as const;
