nota1 = float(input('Digite a primeira nota: '))
nota2 = float(input('Digite a segunda nota: '))
nota3 = float(input('Digite a terceira nota: '))
media = (nota1 + nota2 + nota3)/3

if(media >= 7 and media <= 10):
    print(f'Aluno aprovado com média {media}')
elif(media < 7 and media >= 0):
    print(f'Aluno reprovado com média {media}')
else:
    print('Algo de errado não esta certo. Verifique as notas e tente novamente.')