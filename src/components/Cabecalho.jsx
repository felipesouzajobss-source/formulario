import './Cabecalho.css'

function Cabecalho({ titulo, subtitulo }) {
return (
    <header className="cabecalho">
        <h1 className="cabecalho__titulo">{titulo}</h1>
        <p className="cabecalho__subtitulo">{subtitulo}</p>
    </header>
    )
}

export default Cabecalho

