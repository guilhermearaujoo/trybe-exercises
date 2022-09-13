#!/bin/bash
#testa-arquivo - script que verifica o tipo do file
#Autor: Guilherme Araujo

#Pede para o usuário digitar o nome do arquivo
echo "Digite o arquivo:"
read ARQUIVO

#testa se o arquivo é um diretorio
test -d "$ARQUIVO" && echo "$ARQUIVO é um diretorio" && exit

#testa se o arquivo é um arquivo 
test -f "$ARQUIVO" && echo "$ARQUIVO é um arquivo" && exit

#testa se é um arquivo, se não for diz que não é
test -f "$ARQUIVO" || echo "O arquivo $ARQUIVO não existe" && exit
