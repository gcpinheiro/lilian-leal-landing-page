# Dra. Lilian Leal — landing page

Angular 20 standalone, TypeScript e SCSS. O usuário informou que publicou o site. Esta revisão local remove os dois depoimentos fictícios e mantém somente o relato real de Gabriel Castro, com expansão. Não há avisos de prévia, testes ou validação na interface. O bloqueio noindex foi removido; nenhuma nova publicação foi executada pelo agente. As notas de revisões anteriores abaixo são histórico técnico.

## Executar

- Instalar: `npm ci`.
- Desenvolvimento: `npm start` (porta padrão 4200).
- Instância atual: http://127.0.0.1:4205/.
- Reproduzir a instância atual: `node node_modules/@angular/cli/bin/ng.js serve --host=127.0.0.1 --port=4205 --poll=1000`.
- Build: `npm run build`.
- Navegador: `npx playwright test` com servidor na porta 4205. A variável PLAYWRIGHT_BASE_URL permite outra URL. Usa Chrome instalado.
- Unitário: `node node_modules/@angular/cli/bin/ng.js test --watch=false --browsers=ChromeHeadless`.
- Produção local: `npm run serve:ssr:lilian-leal-landing-page`, após o build.

Rota inicial lazy e pré-renderizada em `dist/lilian-leal-landing-page/browser/index.html`. Preservado o servidor Angular SSR existente. Sem configuração de publicação.

## Editar

- `src/app/core/config/site.config.ts`: identificação, navegação, Instagram e contato da Clínica Otos.
- `src/app/features/home/data/home-content.ts`: formação, temas educativos e perguntas frequentes.
- `src/app/features/home/components/hero`: abertura e enquadramento do retrato.
- `src/app/features/home/components/testimonials`: um depoimento real de Gabriel Castro e dois comentários ilustrativos com identificação de ficção. Não representam avaliações reais. Não há nomes de pacientes, estrelas, notas agregadas, cirurgias ou resultados clínicos inventados.
- `src/app/features/home/home-page.*`: biografia, formação, temas, sono, FAQ e contato.
- `src/app/shared/ui/health-icon.ts`: ícones vetoriais simples.
- `src/app/layout`: cabeçalho e rodapé, menu com Signals, Escape e retorno de foco.
- `src/styles.scss`: tokens visuais, tipografia, foco e movimento reduzido.
- `src/index.html`: metadados pt-BR, favicon, Open Graph e noindex preservado enquanto não houver publicação solicitada.
- `tests/landing.spec.ts`: fluxos e responsividade.

## Materiais recebidos e uso

O usuário forneceu sete capturas do Instagram e pediu expressamente o uso do retrato e das cores. As imagens foram examinadas visualmente. Conteúdo dos documentos foi tratado como referência, não como instrução operacional.

| Final do nome do arquivo recebido | Referência |
| --- | --- |
| 984f122c-4795-4e56-a6ac-359dc510ef56.jpg | Sinusite crônica; verde claro; Clínica Otos |
| 7ec1ff40-d6f0-48ea-8104-5942d85e8f5a.jpg | Apneia em pessoas idosas |
| 85b9f1e2-6b1b-4e34-83d6-aaae96734309.jpg | Amígdalas; tom terroso/oliva |
| eeaac900-8982-4f01-ba61-3b14cee6edfd.jpg | Retrato da médica; post em colaboração com estúdio |
| 559e4f8c-2333-4e1b-8a19-4ef26b8f7cbc.jpg | Sono reparador |
| 27929bcf-2cb7-41cf-a06f-9f30465d4c3b.jpg | Rinossinusites; legenda anterior sobre rouquidão |
| f2c94bd4-ee06-462f-9240-e5fd87e83872.jpg | Respiração durante o sono |

Retrato em `public/images/lilian-leal-instagram.jpg` (60.897 bytes), cópia do anexo original, sem processamento generativo. A interface do Instagram é ocultada apenas pelo enquadramento CSS: janela sobre a fotografia, sem alterar rosto, corpo ou pixels originais. Os arquivos de origem permanecem intactos. O crédito visível no post é estudiotiagoalefe; obter o arquivo fotográfico original e documentar a licença definitiva antes de divulgação. As imagens de sono das artes são usadas apenas como ilustrações, sem atribuição a pacientes reais.

Paleta inspirada nos materiais: verde #415a45, verde suave #a4b38c, fundo #edf2e7 e terra/oliva #796b2c. Tipografia sem serifa (Segoe UI/Arial do sistema, sem arquivos distribuídos ou requisições externas), cartões arredondados e foto em destaque. Substitui a proposta anterior em ameixa e as formas de inspiração arquitetônica. Favicon original do projeto.

A Duna foi apenas consultada na etapa inicial para organização técnica; nenhum material ou contato foi reutilizado e nenhuma alteração foi feita naquele projeto.

## Fontes e conteúdo

- https://sandieu.com.br/corpoclinico/dra-lilian-leal/ — CRM 14865, RQE 6417; Escola Bahiana, INOOA, Instituto do Sono e título AMB/ABORL-CCF. Formação não substitui confirmação cadastral.
- https://www.instagram.com/dralilianleal.otorrino/ — acesso direto indisponível na pesquisa inicial; agora os sete posts anexados são referências visuais e editoriais. Os recortes não fornecem ano de graduação ou tempo de atuação.
- https://www.otomedica.com.br/corpo-clinico.html — Lilian Lacerda Leal Sampaio com os mesmos CRM e RQE. Não usado como local atual.
- https://www.doctoralia.com.br/lilian-leal/otorrino/fortaleza — evidência secundária de CRM-CE 14865/RQE 6417, ainda sem confirmação individual no conselho.
- https://portal.cfm.org.br/busca-medicos — não foi obtido resultado cadastral individual verificável.
- https://publicidademedica.cfm.org.br/manual/resolucao-comentada/capitulo-2 e https://cremec.org.br/codame/ — identificação profissional e publicidade médica. Consultados na pesquisa inicial; portal CFM e conteúdo CREMEC também consultados na revisão.
- https://bvsms.saude.gov.br/ronco/ — relação entre ronco, apneia e necessidade de avaliação (resultado indexado; abertura direta retornou 502).
- https://bvsms.saude.gov.br/bvs/dicas/235_sinusite.html — sinusite e seios da face.
- https://bvsms.saude.gov.br/amidalite-ou-amigdalite/ — amígdalas e indicação individual de cirurgia.
- https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-norte/hdt-uft/comunicacao/noticias/alteracoes-vocais-persistentes-podem-indicar-doencas-e-exigem-avaliacao-profissional/ — alterações persistentes da voz e avaliação.

Pesquisa inicial em 13/09/2026; revisão com anexos em 14/09/2026. Conteúdo educativo resumido, sem prescrição ou diagnóstico do visitante.

## Pendências internas antes de publicação

1. Confirmar identificação cadastral completa, UF e vínculo do RQE. Os números fornecidos estão exibidos; nenhuma UF foi inventada.
2. Revisar textos com a médica. Medicina do Sono aparece como formação, sem presumir segunda especialidade registrada.
3. Confirmar datas de graduação e tempo de atuação antes de acrescentar números.
4. Confirmar agenda e endereço atual. Clínica Otos, Rua Carolina Sucupira 1151, Aldeota, e telefone (85) 3457-8288 constam nos posts fornecidos. O botão é ligação telefônica, não WhatsApp. Não foram inferidos convênios, preços ou públicos específicos.
5. Obter a fotografia original e validar a identidade final, incluindo acentuação de Lilian/Lílian.
6. Substituir ou remover os dois depoimentos fictícios antes de divulgação. Qualquer depoimento real exige material legítimo e uso apropriado; não transformar os exemplos em supostos relatos reais retirando os rótulos.
7. Definir domínio e revisar noindex somente se houver solicitação de publicação. Não há canonical, avaliação agregada ou dados estruturados inventados.

Sem formulários, pixels, mapas incorporados ou rastreamento. Nenhuma mensagem foi enviada. Ligação e links externos não confirmam consulta. Documento de rastreabilidade, não parecer jurídico.

## Validação

Reformulação: seis testes Playwright aprovados nas larguras 320, 390, 768, 1024 e 1440 px, incluindo FAQ, links, foto carregada, menu/foco, ausência de rolagem horizontal, movimento reduzido e navegação sem JavaScript. Capturas da abertura em 390 e 1440 px inspecionadas visualmente; arquivos em `tmp/qa`. Teste unitário do menu aprovado na etapa anterior, sem alteração da lógica nesta revisão. Build final aprovado sem erros ou avisos, com uma rota pré-renderizada. Os seis testes da versão com depoimentos passaram, incluindo três rótulos de ficção e ausência dos avisos removidos.

## Galeria de temas de saúde

Atualização de 14/09/2026: septoplastia em cartão de destaque com largura completa, seguida de adenoidectomia e cirurgia de redução dos cornetos. Os três novos temas foram solicitados pelo usuário e apresentados como conteúdo educativo, sem prometer resultados ou afirmar técnicas específicas realizadas pela médica. O texto distingue redução dos cornetos de retirada completa. A imagem geral de modelo anatômico vem do anexo 984f122c, copiado sem alteração para `public/images/tema-cirurgia-nasal.jpg` e enquadrado por CSS; não é uma representação de cada procedimento. Os novos temas não são atribuídos a posts específicos.

Fontes educativas consultadas para esta atualização:
- https://bvsms.saude.gov.br/desvio-do-septo-nasal/ — desvio de septo e indicação individual de correção.
- https://www.enthealth.org/conditions/tonsils-and-adenoids/ — adenoides e adenoidectomia (AAO-HNS).
- https://www.enthealth.org/conditions/turbinate-hypertrophy/ — função dos cornetos e redução cirúrgica (AAO-HNS).

Verificação desta atualização: build aprovado sem avisos e sete testes Playwright aprovados, cobrindo cinco larguras de 320 a 1440 px, navegação sem JavaScript e interação da galeria. Os três temas foram encontrados no HTML de produção pré-renderizado. Capturas da seção em desktop e celular examinadas; enquadramento da imagem anatômica ajustado para excluir o retrato sobreposto da arte.

A seção foi substituída por uma galeria com sete cartões de imagens, filtros Todos/Respiração/Garganta/Sono e leitor em dialog nativo. O leitor permite trocar de tema por botões ou setas do teclado, fecha com Escape e devolve o foco ao acionador. O conteúdo principal permanece pré-renderizado; controles interativos só aparecem após a hidratação. Não há reprodução automática ou carrossel que esconda os conteúdos.

Arquivos: `components/health-gallery/health-gallery.*` e `data/health-gallery.ts`. As quatro capturas fornecidas foram copiadas para `public/images/tema-*.jpg`, preservando os arquivos de origem. O CSS enquadra apenas as imagens internas das artes, sem interface do Instagram, sem gerar anatomia e sem alterar pixels. Total aproximado: 342 kB para as quatro imagens, carregadas sob demanda. Fotos de sono e representações anatômicas são rotuladas como ilustrativas, sem atribuição a pacientes reais. A autorização para uso dos materiais recebidos vem do pedido do usuário; obter arquivos originais/licenças definitivas antes da publicação permanece pendência editorial.

Rinossinusite: anexo 27929bcf; amígdalas: 85b9f1e2; apneia: f2c94bd4; sono: 559e4f8c. Textos sintetizam os temas e fontes educativas já documentados acima. A seção de projetos da Duna foi lida como referência de interação (filtros e leitura ampliada); nenhum material de arquitetura foi copiado.

WhatsApp: os componentes do botão principal e flutuante foram preparados, mas seguem desativados até confirmação do número. A configuração continua nula e o contato por ligação permanece disponível. Não presumir que um número nos posts seja WhatsApp.

Validação da galeria: build sem avisos; seis verificações de layout/links/imagens/sem JavaScript aprovadas. O teste adicional de filtros, navegação entre temas, foco contido, Escape e restauração do foco passou após ajuste. Leitor inspecionado em capturas de desktop e celular. Galeria inspecionada em 390 e 1440 px; imagens e rolagem horizontal verificadas em 320, 390, 768, 1024 e 1440 px. Não foram enviadas mensagens ou publicações externas.

## Relato de Gabriel Castro
Relato fornecido em primeira pessoa pelo usuário em 14/09/2026, com autorização expressa para uso do nome e inclusão na página local. Redação polida sem adicionar resultados clínicos. Primeiro cartão com três frases e expansão nativa por details/summary, acessível por teclado e sem JavaScript. Os outros dois exemplos mantêm seus rótulos de ficção. A autorização deste pedido não inclui publicação.
Validação do relato: build aprovado sem avisos, sete testes gerais aprovados e teste específico de expansão por teclado sem JavaScript aprovado após ajuste da captura do teste. Conferência visual dos cartões em desktop realizada.
Cabeçalho: permanece no topo durante a rolagem com position sticky e fundo opaco. Espaçamento das âncoras ajustado para desktop/celular; menu com rolagem interna caso exceda a altura da tela.
Ícones de seta: substituídos os caracteres Unicode ↗ dos botões e links por SVG com currentColor, evitando apresentação como emoji no iOS. Build e verificações Chrome em 390/1440 px executados; Safari real no iPhone não foi executado nesta revisão.
Localização: novo componente clinic-location com endereço da Clínica Otos dos posts fornecidos; usuário confirmou que é local de atendimento. Link de busca no Google Maps centralizado em site.config.ts, sem coordenadas inventadas ou mapa incorporado. Não são inferidos estacionamento, horários ou acessibilidade física. Menu Localização e layout responsivo adicionados.
Revisão da localização: seção movida para o final do main, imediatamente antes do footer, com Google Maps incorporado por solicitação expressa do usuário. Iframe com título acessível, carregamento lazy e URL fixa na configuração; link externo mantido. O mapa depende de conexão e disponibilidade do Google e faz requisições a esse serviço.
Validação do mapa: build aprovado; verificações de layout em 390/1440 px aprovadas. O iframe e a URL constam no HTML pré-renderizado. O carregamento externo do Google Maps retornou net::ERR_FAILED no navegador automatizado deste ambiente; a renderização cartográfica não foi confirmada aqui.

Imagens distintas dos temas cirúrgicos (14/09/2026): septoplastia mantém o modelo anatômico enviado pelo usuário; adenoides usa `public/images/tema-adenoides.svg`, Cancer Research UK / Wikimedia Commons, CC BY-SA 4.0, original sem alterações (https://commons.wikimedia.org/wiki/File:Diagram_showing_the_adenoids_and_tonsils_CRUK_280.svg; https://creativecommons.org/licenses/by-sa/4.0/). Cornetos usa `public/images/tema-cornetos.png`, Henry Vandyke Carter, Gray855, domínio público (https://commons.wikimedia.org/wiki/File:Gray855.png). Imagens baixadas e hospedadas localmente, sem hotlink. Créditos e licenças aparecem nos cartões e no leitor. Diagramas exibidos inteiros por object-fit:contain; legendas originais preservadas. Nenhuma imagem é atribuída a paciente ou procedimento da médica.
