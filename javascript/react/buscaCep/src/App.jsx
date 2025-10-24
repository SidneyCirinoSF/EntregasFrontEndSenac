import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dados, setDados] = useState(0)
  const [cep, setCep] = useState('')

  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => setDados(data))
    .catch((error) => console.log(error))
    .finally(() => console.log('requisição finalizada!'))
  }, [cep])

  return (
    <>
      <div className='container'>
        <input 
          type='number'
          placeholder='digite seu cep'
          value={cep}
          onChange={(e) => setCep(e.target.value)} 
        />

        <ul>
          <li><strong>Rua:</strong> {dados.logradouro}</li>
          <li><strong>Bairro:</strong> {dados.bairro}</li>
          <li><strong>Cidade:</strong> {dados.localidade}</li>
          <li><strong>Estado:</strong> {dados.estado}</li>
        </ul>
      </div>
    </>
  )
}

export default App
