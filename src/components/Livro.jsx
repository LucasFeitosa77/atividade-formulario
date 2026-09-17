function Livro({ livro }) {
    return (
        <li>
            <strong>{livro.titulo}</strong> — {livro.autor} — {livro.genero} — {' '}
            {livro.anoPublicacao}
        </li>
    )
}

export default Livro