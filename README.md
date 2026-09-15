# Dra. Lilian Leal

Landing page de otorrinolaringologia em Angular 20, TypeScript e SCSS, com página inicial pré-renderizada.

## Executar

```bash
npm ci
npm start
```

Acesse http://localhost:4205.

- Build: `npm run build` (arquivos em `dist/lilian-leal-landing-page`).
- Testes de navegador: `npx playwright test`, com o servidor acima ativo e Chrome instalado.
- Testes unitários: `npm test -- --watch=false --browsers=ChromeHeadless`.
- Servidor de produção local: `npm run serve:ssr:lilian-leal-landing-page`, após o build.

## Onde editar

| Conteúdo | Arquivo ou pasta |
| --- | --- |
| Contatos, endereço, mapa e menu | `src/app/core/config/site.config.ts` |
| Formação e perguntas frequentes | `src/app/features/home/data/home-content.ts` |
| Temas de saúde, imagens e créditos | `src/app/features/home/data/health-gallery.ts` |
| Depoimento de Gabriel Castro | `src/app/features/home/components/testimonials/testimonials.ts` |
| Seções da página | `src/app/features/home/home-page.html` e `components/` |
| Cores, fontes e estilos globais | `src/styles.scss` |
| Título e metadados | `src/index.html` |
| Imagens | `public/images/` |

## Materiais e fontes

- Formação: [perfil San Dieu](https://sandieu.com.br/corpoclinico/dra-lilian-leal/).
- Retrato, paleta e imagens dos posts: capturas do [Instagram da médica](https://www.instagram.com/dralilianleal.otorrino/) fornecidas pelo usuário. Crédito do retrato: estudiotiagoalefe. Substitua pelos originais licenciados quando disponíveis.
- Adenoides: [Cancer Research UK / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Diagram_showing_the_adenoids_and_tonsils_CRUK_280.svg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), sem alterações.
- Cornetos: [Henry Vandyke Carter / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gray855.png), domínio público. Preserve os créditos ao substituir imagens.
- Conteúdo educativo: Biblioteca Virtual em Saúde ([septo](https://bvsms.saude.gov.br/desvio-do-septo-nasal/), [ronco](https://bvsms.saude.gov.br/ronco/), [sinusite](https://bvsms.saude.gov.br/bvs/dicas/235_sinusite.html), [amigdalite](https://bvsms.saude.gov.br/amidalite-ou-amigdalite/)) e ENT Health ([adenoides](https://www.enthealth.org/conditions/tonsils-and-adenoids/), [cornetos](https://www.enthealth.org/conditions/turbinate-hypertrophy/)).
- Depoimento real fornecido por Gabriel Castro. Não há depoimentos fictícios.

## Pendências

- Confirmar o WhatsApp antes de preencher `whatsapp`; os botões principal e flutuante dependem dessa configuração.
- Confirmar UF do CRM, vínculo do RQE, datas de formação e tempo de atuação. Revisar o conteúdo com a médica, observando as [orientações do CFM](https://publicidademedica.cfm.org.br/manual/resolucao-comentada/capitulo-2).
- Google Maps depende do serviço externo; seu carregamento não pôde ser confirmado no ambiente automatizado. Safari no iPhone não foi testado diretamente.
