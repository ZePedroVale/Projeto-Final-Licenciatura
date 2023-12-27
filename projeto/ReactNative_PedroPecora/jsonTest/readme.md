## React Native

## Instalação / Dependências

1- npm install
2- npm install --global expo-cli
3- npm install react-native-image-slider-show
4- npm install react-native-svg-charts
5- npm install victory-native

Android studio com um Virtual device instalado

## Iniciar

1- expo start
2- Pressionar a tecla "a" para abrir no android

## Divisão de layout e mudança de gráfico

O layout se divide em 5, sendo que na primeira fileira, o container do meio está posicionado de maneira absoluta, acompanhado de um dashboard de cada lado.

Para realizar a mudança dos gráficos, verificar os gráficos disponíveis em https://formidable.com/open-source/victory/docs/native

### Definições de dados pelo Victory (Native)

O victory utiliza a seguinte estrutura de dados:
[{x: "Maça",
y: 50},
{x: "Banana",
y: 30},
...]
Que é composto por um array de dicionários compostos por 2 pares de key-value.
As keys são sempre _X,Y_, correspondendo aos eixos.

Algumas excessões podem ocorrer dependendo do tipo do gráfico, é valido verificar no link acima.

## Building

Rodar o comando
""expo build:android -t apk""https://docs.expo.dev/classic/building-standalone-apps/#3-start-the-build

e seguir o prompt.
A build irá ser criada em uma conta sua vinculada com a Expo, durando 30 dias online com a possibilidade de ser feito o download.
