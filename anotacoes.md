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

Set-ExecutionPolicy RemoteSigned // Dando permissão

Set-ExecutionPolicy Restricted // Removendo permissão