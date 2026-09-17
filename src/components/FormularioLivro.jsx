import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import styles from './FormularioLivro.module.css'

function FormularioLivro() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [anoPublicacao, setAnoPublicacao] = useState('')
    const [genero, setGenero] = useState('')

    const [livros, setLivros] = useState([])

    function handleSubmit(evento) {
        evento.preventDefault()

        const novoLivro = {titulo, autor, anoPublicacao, genero}
        setLivros([...livros, novoLivro])

        setTitulo('')
        setAutor('')
        setAnoPublicacao('')
        setGenero('')
    }

    return (
        <section className={styles.formulario}>
            <h1 className={styles.title}>Cadastro de livros</h1>

            <form onSubmit={handleSubmit}>
                <CampoTexto
                    label="titulo"
                    name="titulo"
                    value={titulo}
                    onChange={(evento) => setTitulo(evento.target.value)}
                    placeholder="Ex.: Torto Arado"
                >
                </CampoTexto>

                <CampoTexto
                    label="autor"
                    name="autor"
                    value={autor}
                    onChange={(evento) => setAutor(evento.target.value)}
                    placeholder="Ex.: Itamar Vieira Júnior"
                >
                </CampoTexto>

                <CampoTexto
                    label="ano de publicação"
                    name="anoPublicacao"
                    value={anoPublicacao}
                    onChange={(evento) => setAnoPublicacao(evento.target.value)}
                    placeholder="Ex.: 2018"
                >
                </CampoTexto>

                <CampoTexto
                    label="gênero"
                    name="genero"
                    value={genero}
                    onChange={(evento) => setGenero(evento.target.value)}
                    placeholder="Ex.: Romance"
                >
                </CampoTexto>

                <button type='submit'>Cadastrar</button>
            </form>

            <div className={styles.lista_livros}>
                <h2>Livros Cadastrados</h2>

                {livros.length === 0 && <p>Nenhum livro cadastrado</p>}

                <ul>
                    {livros.map((livro, index) => (
                        <Livro key={index} livro={livro}/>  
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FormularioLivro