#!/bin/bash
#realacao.sh: testa dois numeros e descobre a relacao entre eles
#autor: Guilherme Araujo

#le o primeiro numero
echo "Digite o primeiro numero:"
read PRIMEIRO

#le o segundo numero
echo -e "\nDigite o segundo numero:"
read SEGUNDO

echo

#descobre a relacao entre eles
if test "$PRIMEIRO" = "$SEGUNDO"
then 
	echo "Os numeros são iguais"
else
	if test "$PRIMEIRO" -gt "$SEGUNDO"
	then 
		echo "O primeiro numero [$PRIMEIRO] é > que o segundo [$SEGUNDO] numero"
	else 
		echo "O segundo numero [$SEGUNDO] é > que o primeiro [$PRIMEIRO] numero"
	fi
fi
echo
