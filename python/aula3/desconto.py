print('==================== \033[0;45mLOJA SENAC\033[m ====================')
print('Valor de compras: R$ 500')

formaPag = int(input(
    '\033[0;31;40mFORMAS DE PAGAMENTO\033[m\n\033[7;31m[ 1 ]\033[m à vista dinheiro/pix (10% de desconto\n\033[7;31m[ 2 ]\033[m à vista cartão (5% de desconto)\n\033[7;31m[ 3 ]\033[m 2x no cartão (5% de acréscimo)\n\033[7;31m[ 4 ]\033[m 3x até 10x no cartão (10% de acréscimo)\n\033[0;31;40mQual a forma de pagamento?\033[m '
))

match formaPag:
    case 1:
        total = 500 - (500*0.1)
        print(f'O total da compra será de \033[7;32mR$ {total}\033[m')
    case 2:
        total = 500 - (500*0.05)
        print(f'O total da compra será de \033[7;32mR$ {total}\033[m')
    case 3: 
        total = 500 + (500*0.05)
        parcela = total/2
        print(f'O valor da parcela será 2x de \033[0;31;40mR$ {parcela}\033[m com juros')
        print(f'O total da compra será de \033[7;32mR$ {total}\033[m')
    case 4:
        total = 500 + (500*0.1)
        qntParcela = int(input('Em quantas parcelas (de 3x até 10x)? '))
        parcela = total / qntParcela
        print(f'O valor da parcela será {qntParcela}x de \033[0;31;40mR$ {parcela}\033[m com juros')
        print(f'O total da compra será de \033[7;32mR$ {total}\033[m')
    case _:
        print('Opção inválida. Verifique e tente novamente.')