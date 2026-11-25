import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Formulario from './components/Formulario'
import ListaInscritos from './components/ListaInscritos'
import './App.css'

function App() {
  const [inscritos, setInscritos] = useState([])

  function adicionarInscrito(novoInscrito) {
    setInscritos([...inscritos, novoInscrito]) // novo array, nunca push()
  }
  return (
  <div className="app">
    <Cabecalho titulo="Semana de Tecnologia" subtitulo="Inscreva-se nas oficinas práticas" />
    <main className="app__conteudo">
      <Formulario aoCadastrar={adicionarInscrito} />
      <ListaInscritos inscritos={inscritos} />
    </main>
  </div>
  )
}
export default App