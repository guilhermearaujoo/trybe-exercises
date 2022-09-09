# Versionamento: :muscle:

O primeiro passo para começar o ```versionamento``` é criar uma pasta no seu repositorio local. (use ```mkdir```)

Feito isso vá até a pasta pelo terminal (voce pode usar ```CD```)

Inicie um repositorio git com o comando (```git init```)

Voce deve querer utilizar **branchs**, certo? 
Bom, pra isso é necessario criar um arquivo inicial

Go ahead e crie um arquivo (```touch arquivo.txt```)

A partir daqui vc pode editar o arquivo com o _**VSCODE**_ ou vim ou qualquer outro editor que você preferir.

Faça "```code .```"

Ao abrir o _**VSCODE**_ edite o arquivo.txt

Feito isso, voce precisa adicionar esse arquivo no stage (```git add .```)
Arquivo rastreado, vamos commitar.

Faça ```"git commit -m "Criado arquivo.txt e colocado informações"```

É importante que a mensagem dos commits seja **objetiva e curta**.

Agora crie uma nova branch
```git checkout -b nova-branch```

Na nova branch altere o arquivo, mande para stage e comite ele.

Volte para branch principal
```git checkout main```

Faça um merge dessas informaçoes
```git merge nova-branch```

Pronto, você fez versionamento de código.
