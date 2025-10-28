n1 = int(input('Primeira nota: '))
n2 = int(input('Segunda nota: '))
media = (n1 + n2)/2

if(media >= 0 and media <= 100):
    if(media >= 90):
        print(f'Excelente! Média {media}')
    elif(media < 90 and media >= 70):
        print(f'Bom! Média {media}')
    elif(media < 70 and media >= 50):
        print(f'Regular! Média {media}')
    else:
        print(f'Insuficiente! Média {media}')
else:
    print('Erro! Verifique as notas e tente novamente.')