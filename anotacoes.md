vscode ``` open keyboard shortcut ``` 

dentro de nodemodules tem o bin do tsc para compilar js para ts

no package.json ```  build: 'tsc' ``` 

```  npx tsc --init ``` 

no arquivo tsconfig.json ``` "module": "ES2020" ``` 

```  npm run build ``` // cria o arquivo js

``` node src/server.js ``` // inicia o server

``` "rootDir": "./src" ```  // onde está o código da aplicação

``` "outDir": "./build" ``` // cria os builds em uma pasta separada

``` npm run build ``` // precisamos buildar novamente

"moduleResolution": "node" // Descomentar essa linha em tsconfig.json

Algumas libs não tem suporte nativo ao ts então precisamos instalar um outro package ``` npm install @types/express -D  ```

``` npm i ts-node-dev -D ``` cria as builds automaticamente

dentro do package.json em scripts``` "dev": "tsnd src/server.ts" ```

criando a view ``` https://vitejs.dev/guide/ ```

``` npm create vite@latest ``` 

``` npm i ``` para instalar as dependências do projeto

React são varias funções que retornam html, css e js

Entendendo ``` Componentes e Propriedades no React ```

Exemplo simples:

```
interface buttonProps{
  title: String,
}

function Button(props: buttonProps){
  return (
    <button>
      {props.title}
    </button>
   )
}
 

function App() {
  return (
    <div>
      <h1>Hello NLW</h1>
      <Button title="Teste" />
    </div>
  )
}

export default App

```

rodando o app mobile 

Excutar como adm

``` npm i -g expo-cli ```

``` expo init mobile ``` // inicia o projeto mobile
``` expo start ``` // roda o app

Set-ExecutionPolicy RemoteSigned // Dando permissão

Set-ExecutionPolicy Restricted // Removendo permissão

npm install -D tailwindcss postcss autoprefixer // instalando tailwindcss

npx tailwindcss init -p // -p cria o arquivo postcss.config.cjs um "pre-processador para css"

dentro de tailwind.config.cjs em content ./src/**/*.tsx // todas as pastas e todos os arquivos com extensão tsx

colocando imagens no projeto com tailwind

a imagem precisa estar em /public

```
theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/Fundo.png')"
      }
    },
  },
```

aplicação da imagem

```
class="bg-[#121214] bg-fundo bg-cover bg-no-repeat"
```

com a extensão R Component

``` rnso ```   cria um esqueleto para componente de estilo rapidamente

``` rnbc ``` cria um esqueleto para componente rapidamente

instalando fonts no app

parar a aplicação quando for rodar um comando expo, pois ele modifica códigos nativos

``` expo install expo-font @expo-google-fonts/inter ```

garante que aplicação será exibida na área segura da tela, detalhes físicos do aparelho

``` expo install react-native-safe-area-context ```

efeito de gradient

``` expo install expo-linear-gradient ```

passando props sem declarar na interface

``` 
interface Props extends ViewProps{
  title: string;
  subtitle: string;
}

export function Heading({title, subtitle, ...rest}:Props) {
  return (
    <View style={styles.container} {...rest}>

    </View>
  );
} 
```
### Back-end

### Entidades

### Game

id

title

bannerUrl

CDN (Amazon S3) (Content Delivery Network)

### Ad

id

id gameId

name

yearsPlaying

discord

weekDays

hoursStart

hoursEnd

useVoiceChannel

createAt

### Dica

1:30h -> 90 min

R$ 189,14 -> 189,14 * 100 -> 18914

Datas (fuso horário / formatos diferentes i18n)

Pontos flutuantes


### Casos de usos

- Listagem de games com contagens de anúncios
- Criação de um novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio

### Métodos http / API RESTful / HTTP Codes -> qual o tipo de responsa q está retornando do backend

get - busca dados, post - cria dados, put - edita dados, patch - editar uma info específica (S/N), delete, head, options

[Status Code](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjbybLLtJT6AhVHRLgEHSQ_B5cQFnoECAsQAQ&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FStatus&usg=AOvVaw2pSlgOW81Ahg7C8tS8pF0W)

### tipos de parâmetros

query: Ex: page=2 | são passados atravéz de ? na url. Usamos para persistir estados, por exemlos, filtros, paginação etc.
route: não são nomeados, por exemplo, um id de uma consulta. Identidicador único.
body: Envia várias info atravéz de uma única requisição. Não fica na url.

colocando o ORM prisma nas dependências

``` npm install -D prisma ```

``` npx prisma init -h``` mostra as opções disponíveis para conexão (doc)

``` npx prisma init --datasource-provider SQLite ``` cria um .env e uma pasta prisma com a config de conexão com o db

``` npx prisma migrate dev ``` cria um controle de alterações do db

``` npx prisma studio ``` cria uma gui do db

``` id String @id ``` geralmente os ids são do tipo string para evitar brecha de segurança pois os números são gerados de forma sequêncial. Exemplos de algoritmos usando tipo int ( uuid, cuid)

instalando package prisma client de conexão

``` npm i @prisma/client ``` 

criando a conexão e mostra todas as queries no console

``` 
    - import { PrismaClient } from '@prisma/client';
    - const prisma = new PrismaClient({
        log: ['query']
      });
```

cria um arquivo dentro de node_modules/.prisma/client/index.d.ts que só tem definições de tipos do typescript

cria baseado no schema/banco tipos do typescript

cria todos os métodos q podemos executar referênte aos campos criados

``` npx prisma generate ```

exemplo de método assíncrono  com typescript

await aguarda a instrução finalizar para continar com o código

```
app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    
  })
  return response.json([]);
})
```

### Atenção

no package.json precisamos adicionar uma nova flag para não ter q ficar reiniciar o servidor na mão.
essa flag permite o tsnd criar e fechar a conexão com db automaticamente
"dev": "tsnd ```  --exit-child  ``` src/server.ts"

instalando cors

projete a aplicação contra front-end q não são permitidos para nosso back-end

quais endereços front-end queremos permitir que acessem o backend

se não for configurado nenhum front vai conseguir acessar 

``` npm i cors ```

``` npm i @types/cors -D ``` suporte para typescript

configuração para ambiente em produção

apenas esse domínio consegue acessar o backend

```
app.use(cors({
  origin:  'url',
}))
```

react tem como propósito ser reativo para uso tem o useState

exemplo:

parâmetros: nome do evento, muda o valor

``` 
const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false)

function handleClickButton(){
    setHasUserClickedOnButton(!hasUserClickedOnButton)
}

// todo o código aqui é executado mesmo q não mude o estado causando problema de performace

// para evitar isso temos o useEffect

```

dentro do jsx

``` 
<button onClick={handleClickButton}>Clique aqui</button>
```

usando useEffect

parâmetros: efeito colateral (callback),  quando vai ser executado

se o segundo argumento for vazio será executado uma única vez independente de quantas  vezes o código for renderizado

exemplo:

``` 
useEffect(() => {
    console.log(hasUserClickedOnButton) -> 'clicou'
  }, [setHasUserClickedOnButton])

```

a função ``` map ``` do javascript percorre um array e retorna algo 

toda vez que percorremos um array com o map precisamos declarar uma key

exemplo:

``` key={game.id} ```

criando componentes acessiveis com api

``` npm install @radix-ui/react-dialog ```

instalando react navagation 

``` npm install @react-navigation/native ```

``` expo install react-native-screens ``` // animação

``` npm install @react-navigation/native-stack ``` // define uma estratégia de navegação específica

chamando função sem parâmetro
``` onPress={handleOpenGame}  ```

chamando função com parâmetro

``` onPress={() => handleOpenGame(item)} ```

no react native não usamos unidades de medidas para estilos para que o próprio react native pegue a unidade de medida de cada tipo de dispositivo

``` npm install --save phosphor-react-native ```

``` expo install react-native-svg ```