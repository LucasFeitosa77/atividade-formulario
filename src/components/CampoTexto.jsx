import styles from './CampoTexto.module.css'

function CampoTexto({ label, name, ...inputProps }) {
    return (
        <div className={styles.campo_texto}>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} {...inputProps}/>
        </div>
    )
}

export default CampoTexto
