INICIO DO MODULO DE FRONTEND

Utilizar nas tags SCRIPT a:
<SCRIPT SRC='' TYPE= "MODULE"> </SCRIPT>

No node, quando precisava importa e exportar arquivos eu utilizava module.export e require.

No ESM (ecma script modules - usado no react) vou utilizar IMPORT e EXPORT

INICIANDO UM PROJETO
- cirar pasta src (onde vai ficar o css e o js) - adicionar js
- adicionar HTML - colocar <script> no html e adiconar type = module
- iniciar o projeto com "npm init -y" (diz sim para todas as perguntas)

 O npm init cria o package.json, que tera as configurações do meu projeto

no package.json preciso incluir a chave type: "module", para dizer ao node que estou usando ESM 

SOBRE AS PASTAS
scr: Utilizada para o código fonte
dist ou build: Utilizada para o código compilado que irá para produção. Geralmente essa pasta é criada automaticamente por nosso ambiente.

BUNDLER (servidor de desenvolvimento)
Serve para compilar todas as bibliotecas utilzidas e mandar para o browser, compilando tudo em pequenos arquivos separador otimizados, mimificados e prontos para utilizar

Aqui vou sar o VITE - para utilizar basta fazer NPX VITE BUILD (isso ja criar o arquivo dentro da pasta dist)

porem enquanto eu tiver fazendo teste e criando só utilizo
NPX VITE --open

De olho na dica 👀: Nesse exemplo estamos instalando o vite diretamente no nosso projeto. Entretanto o vite nos permite já criar um novo projeto a partir de um template utilizando o comando npm create vite@latest.

ONDE PROCURAR BIBLIOTECAS - NO hub do npm 
npmjs.com


DIFERENÇA NPM e NPX
Npm gerencia pacotes os instala eles
npm install
npm list 
npm run

NPX executa executaveis das minhas depencencias
npx vite (por exemplo)
Se a biblioteca está instalada no projeto (consta como uma dependência no arquivo package.json), o NPX executa o script dessa biblioteca;
Se a biblioteca não está instalada no projeto, ele instala de forma temporária a biblioteca e, após a instalação, executa o script.

RODADNO SCRIPTS DEFINIDOS NO PACKAGE.JSON
npm run nomeDoScript

INSTALANDO O LINT NO PROJETO
npm init @eslint/config

Para executar o eslint para checar seu código, basta executar o comando:
npx eslint ./src

Posso adicionar o lint no script 
lint: "eslint ./src"

PUBLICANDO O REPOSITORIO COM SURGE
1- primeiro criar o arquivo pra deploy "npx vite build"
2 - npm install -g surge (instalar o surge direto na minha maquina, faço apenas uma vez)
3- fazer o deploy -> surge dist

IMPORTANT CODES FOR SURGE
// INSTALAÇÃO GLOBAL:
npm install --global surge

// DEPLOY
surge [caminho-projeto]

// DEPLOY CUSTOMIZADO
surge [caminho-projeto] [nome-dominio.surge.sh]

// ATUALIZANDO DOMINIO
surge --domain [nome-dominio.surge.sh]

// LISTANDO DOMINIOS
surge list

// DERRUBANDO DOMINIOS
surge teardown [nome-dominio.surge.sh]

// ADICIONANDO COLABORADORES
surge --add [your.friend@gmail.com]