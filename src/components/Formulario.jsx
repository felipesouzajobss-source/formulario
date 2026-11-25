import { useState } from 'react'
import CampoTexto from './CampoTexto'
import './Formulario.css'

const OFICINAS = ['React do zero', 'Banco de Dados', 'Robótica', 'Internet das Coisas']
function Formulario({ aoCadastrar }) {

// Um estado para cada campo (componente controlado)
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [oficina, setOficina] = useState('')
const [erro, setErro] = useState('')

// Função chamada quando o formulário é enviado
function aoSalvar(evento) {
evento.preventDefault() // impede o recarregamento da página

    if (nome.trim() === '' || email.trim() === '' || oficina === '') {
    setErro('Preencha todos os campos antes de enviar.')
    return
    }

    aoCadastrar({ id: Date.now(), nome, email, oficina })
    // Limpa o formulário para a próxima inscrição
    setNome('')
    setEmail('')
    setOficina('')
    setErro('')
}

return (
    <form className="formulario" onSubmit={aoSalvar}>
        <h2>Dados da inscrição</h2>

        <CampoTexto id="nome" label="Nome completo" valor={nome}
        aoAlterar={setNome} placeholder="Digite seu nome" />

        <CampoTexto id="email" label="E-mail" tipo="email" valor={email}
        aoAlterar={setEmail} placeholder="seuemail@exemplo.com" />

        <div className="campo-texto">
            <label htmlFor="oficina">Oficina</label>
            <select id="oficina" value={oficina}
                onChange={(evento) => setOficina(evento.target.value)}>
                <option value="">Selecione...</option>
                {OFICINAS.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>

        {erro && <p className="formulario__erro">{erro}</p>}

        <button type="submit" className="formulario__botao">Inscrever</button>
    </form>
    )
}

export default Formulario