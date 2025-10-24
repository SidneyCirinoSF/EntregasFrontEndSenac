num1 = float(input('Digite um número: '))
num2 = float(input('Digite outro número: '))
operador = input('Escolha uma operação (+, -, *, /): ')

if (operador == '+'):
    soma = num1 + num2
    print(f'{num1} + {num2} = {soma}')
elif (operador == '-'):
    sub = num1 - num2
    print(f'{num1} - {num2} = {sub}')
elif (operador == '*'):
    mult = num1 * num2
    print(f'{num1} * {num2} = {mult}')
elif (operador == '/'):
    div = num1 / num2
    print(f'{num1} / {num2} = {div}')
else:
    print('Operador inválido. Tente novamente.')