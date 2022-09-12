# GIT e GUTHUB

Como criar um repositório e começar a utilizar no meu computador?

* Primeiro vou no github.com e crio meu repositório
* Depois copio a chave ssh para clonagem 
* No meu terminal faço git clone <link ssh>

Meu repositorio está pronto para usar.

Como enviar um repositorio local para meu github?
* Primeiro vou no github.com e crio meu repositório
* Depois no terminal vou até a pagina que quero que vá para o meu github
* faço git init
* adiciono um readme - git add README.md
* commito isso - git commit -m "first commit"
* adiciono meu repositorio remoto para o meu local - git remote add origin <link ssh>
* mando meu repositorio local - git push -u origin main

Como trabalhar em conjunto e em projetos?

```
É uma boa prática sempre criar novas branchs para atualizações
Feito a nova branch voce pode fazer um push
O dono do projeto pode aceitar esse pull request 
Se for aceito ele também pode fazer um merge com branch principal
```

Como fazer um pull request?
* Faça um clone do projeto que você quer
* crie uma nova branch - git checkout -b nova-feature
* realize as alteracoes necessarias e commite elas
* faça um push para o repositorio - git push -u origin nova-feature (por ser a primeira vez)
* Isso vai criar um pull request no github
* Vá no github e aceite a pull request
* Faça o merge no github 
* Exclua a nova branch se necessario
* Feito isso, atualize sua repositorio local - git pull -u origin main ou 
* Atualize tambem sua branch nova-feature - git pull -u origin nova-feature

Os proximos pushs que eu fizer não preciso usar -u. Apenas ```git push``` ou ```git pull```


Para trazer informações de varias branchs para o meu projeto:
* Vou na minha branch main - git checkout main
* Faço o git pull

como usar o git fetch em vez do git pull?
_O git fetch é uma maneira mais segura em relação ao git pull pois não realiza o merge automaticamente, que é o caso do pull, aprenda como usar:_
* Primeiro baixo o que foi alterado do repositorio remoto - git fetch 
* Depois verifico o que foi alterado - git log origin/main
* depois faco um merge disso - git merge origin/main