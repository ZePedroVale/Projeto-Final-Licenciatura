# Smart education tool: Módulo educação para o consumo

Nesta tarefa pretende-se desenvolver o módulo de educação para o consumo, a qual irá recomendar o consumidor com medidas de prevenção de desperdício alimentar. 

Serão mapeadas e analisadas boas práticas, tais como: 

	- interpretação das indicações “Consumir de preferência antes de:” e “Consumir até:”, 
	- condições acondicionamento dos diferentes alimentos, 
    - receitas para reaproveitamento, 
	- entre outros. 

Para tal, será necessária desenvolver os _conteúdos_ _multimédia_ de suporte à educação dos utilizadores. 

Estes conteúdos serão disponibilizados em *duas* distintas formas: 

    - (1) _sequencial_, permitindo ao utilizador aprender ao seu ritmo, sendo os conteúdos desenvolvidos disponibilizados quando o utilizador assim o desejar e/ou 

    - (2) _inteligente_, tendo o sistema capacidade de aprendizagem do consumo do utilizador (através da integração/incorporação de informação de compras do mesmo), calculando o potencial risco de desperdício. 

No modo (2), serão utilizadas técnicas baseadas em inteligência artificial de forma a disponibilizar ou relembrar os conteúdos ao utilizador. 

Para tal, a ferramenta, na forma de **aplicação móvel**, contará com uma base de dados interna que permitirá ao algoritmo de inteligência artificial aprender de forma contínua as necessidades do utilizador, fornecendo alertas ou sugestões de reaproveitamento de bens alimentares. 

O IPB é a entidade líder da presente tarefa, sendo da sua responsabilidade coordenar os trabalhos a desenvolver pela FOODINTECH, MORE, ISQ e LIPOR. 

=========

## Primeira Idea da Solução

- Dashboard, talvez também uma app
- Crawler, página de notícias
- Unid gest alim: _backoffice_ interligando com a parte _Logística_(controlo de estoques, etc.)


## Elenco de funcionalidades previstas para o Smart Education 

### Lista de Tarefas a Fazer ([Milestones](https://gitlab.estig.ipb.pt/_cedri/projetobioma/pps2/smart_education_tool/-/milestones))

- [ ] Criação de concentrador (hub) de notícias e dicas (artigos) e eventos (ações, iniciativas, etc.)
- [ ] Scanner automático de fontes de artigos de sites (_web_ _crawler_), relacionados com o desperdício com: título, corpo, fotos e link para a fonte original
- [ ] Scanner automático de artigos nos posts em redes sociais, relacionados com o desperdício alimentar
- [ ] Gestão de fontes dos artigos: definição do endereço do site oficial e ativação de recolha automática periódica
- [ ] Validação/invalidação e ajustes de fotos de artigos existentes
- [ ] Gestão individual (criação, edição e eliminação) de artigos e eventos
- [ ] Visualização dos artigos em front office de aplicação móvel/site e dashboard do kiosk com slide
- [ ] Criação de concentrador de ementas (pratos) com ingredientes
----->pensa que não seria importante este aqui para não duplicar trabalho, esta parte estaria no SMonitoring/SWaste…
- [ ] Gestão (criação, edição e eliminação) de ementas e ingredientes
- [ ] Visualização das ementas em front office
- [ ] Visualização dos artigos em front office de aplicação móvel/site e dashboard do kiosk com slide
- [ ] Pesquisa em front office de receitas para reaproveitamento de ingrediente e ingredientes com mais/menos desperdício 
--------> Exp diz que resulta no nome do prato e o consumidor vai buscar em outra fonte
-------->  interligado com o SMonitoring, incentivando o consumidor a consumir reduzindo a pegada ecológica (pratos sustentáveis)

## Plano de Trabalho
Esboçado e explicado o PT em https://docs.google.com/spreadsheets/d/1eBNkQ8RueunXwQLNllKQVgzJp6zZs0IsLDo7wnpqsBg/edit?usp=sharing

## Ferramentas
- Devemos usar as seguintes ferramentas colaborativas para desenhos e esquemas em geral:
- 1) Figma https://www.figma.com/
- 2) Diagrams.net https://app.diagrams.net/

E para os relatórios e demais textos: [Overleaf](https://www.overleaf.com/)

Outros pontos que iremos investigar:
- a) _framework_ para o desenvolvimento: [React](https://reactjs.org/) ou [Django](https://www.djangoproject.com/) ou [Flask](https://palletsprojects.com/p/flask/)

- b) facilidade para as _interfaces_ _multiplataforma_: [React Native](https://reactnative.dev/) -- vantagem se escolhido React em a) ou [Angular](https://angular.io/) -- [AngularJS](https://angularjs.org/)

# Web Crawler

_Primeira ideia_: Social media mashup

Aceda à pasta [webCrawler->social-media-mashup-master](https://gitlab.estig.ipb.pt/_cedri/projetobioma/pps2/smart_education_tool/-/tree/main/webCrawler) e corra o ficheiro index.html no navegador web.

_Outras ideias_: aceda à pasta [webCrawler](https://gitlab.estig.ipb.pt/_cedri/projetobioma/pps2/smart_education_tool/-/tree/main/webCrawler)
