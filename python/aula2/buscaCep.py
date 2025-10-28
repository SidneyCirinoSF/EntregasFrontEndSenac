import requests
inputUrl = input('Digite seu cep: ')
url = f"https://viacep.com.br/ws/{inputUrl}/json/"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(f'Rua: {data["logradouro"]}')
    print(f'Bairro: {data["bairro"]}')
    print(f'Cidade: {data["localidade"]}')
    print(f'Estado: {data["estado"]}')
    print(f'Região: {data["regiao"]}')
else:
    print(f'Erro: {response.status_code}')