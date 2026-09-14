import { NavigationItem } from '../../shared/models/content.model';
export const SITE = {
  name: 'Dra. Lilian Leal',
  field: 'Otorrinolaringologia',
  registration: {
    supplied: 'CRM 14865 | RQE 6417',
    verified: false,
    note: 'Identificação informada. UF do CRM e vínculo do RQE em validação.',
  },
  instagram: 'https://www.instagram.com/dralilianleal.otorrino/',
  instagramLabel: '@dralilianleal.otorrino',
  professionalProfile: 'https://sandieu.com.br/corpoclinico/dra-lilian-leal/',
  // Preencher somente após confirmação direta.
  whatsapp: null as string | null,
  clinic: {
    name: 'Clínica Otos · Aldeota',
    address: 'Rua Carolina Sucupira, 1151 · Fortaleza, CE',
    phoneLabel: '(85) 3457-8288',
    phoneHref: 'tel:+558534578288',
    source: 'Posts do Instagram fornecidos pelo usuário; agenda atual a confirmar.',
  },
} as const;
export const NAVIGATION: readonly NavigationItem[] = [
  { id: 'sobre', label: 'A médica' },
  { id: 'atuacao', label: 'Temas de saúde' },
  { id: 'duvidas', label: 'Dúvidas' },
  { id: 'contato', label: 'Contato' },
];

