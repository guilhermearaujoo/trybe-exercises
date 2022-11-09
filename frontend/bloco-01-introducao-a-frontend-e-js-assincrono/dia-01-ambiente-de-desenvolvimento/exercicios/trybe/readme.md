INFORMAÇÕES DO LINT 

AO ADICONAR  NO PACKAGE JSON
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js"
  }
  // ...
}

Perceba que adicionamos algumas flags no nosso comando. Lendo a documentação, podemos entender que:

--no-inline-config: Não permite que configurações sejam inseridas no código via comentários
--no-error-on-unmatched-pattern: Não permite erros de padrões não especificados pelas regras
-c .eslintrc.json: Indica o arquivo de configuração
. --ext .js: Indica os arquivos a serem testados (no caso, os arquivos com a extensão .js).