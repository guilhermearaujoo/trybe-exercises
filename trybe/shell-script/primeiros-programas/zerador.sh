#!/bin/bash
#zerador.sh: recebe um numero como parametro e vai zerando ate chegar a zero
#Author: Guilherme Araujo

#Armazena o parametro recebido em uma variavel
NUM=$1
echo "você digitou: $NUM"

#zera o parametro ate ele ser menor que 0
while test $NUM -ge 0
do 
	echo "$NUM"
	NUM=$((NUM-1)) 
done
echo
