import { NavigationItem } from '../../shared/models/content.model';
export const SITE = {
  name: 'Dra. Lilian Leal',
  field: 'Otorrinolaringologia',
  registration: {
    supplied: 'CRM 14865 | RQE 6417',
    verified: false,
  },
  instagram: 'https://www.instagram.com/dralilianleal.otorrino/',
  instagramLabel: '@dralilianleal.otorrino',
  professionalProfile: 'https://sandieu.com.br/corpoclinico/dra-lilian-leal/',
  // Preencher somente após confirmação direta.
  whatsapp: null as string | null,
  clinic: {
    name: 'Clínica Otos · Aldeota',
    address: 'Rua Carolina Sucupira, 1151 · Fortaleza, CE',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20Otos%2C%20Rua%20Carolina%20Sucupira%2C%201151%2C%20Aldeota%2C%20Fortaleza%2C%20CE',
    phoneLabel: '(85) 3457-8288',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Cl%C3%ADnica%20Otos%2C%20Rua%20Carolina%20Sucupira%2C%201151%2C%20Fortaleza%2C%20CE&output=embed',
    phoneHref: 'tel:+558534578288',
    source: 'Posts do Instagram fornecidos pelo usuário; agenda atual a confirmar.',
  },
} as const;
export const NAVIGATION: readonly NavigationItem[] = [
  { id: 'sobre', label: 'A médica' },
  { id: 'atuacao', label: 'Temas de saúde' },
  { id: 'duvidas', label: 'Dúvidas' },
  { id: 'localizacao', label: 'Localização' },
  { id: 'contato', label: 'Contato' },
];

