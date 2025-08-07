import styles from './styles.module.css'

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Form({ onSubmit, value, onChange }: FormProps){
    return(
        <form className={styles.areaComentario} onSubmit={onSubmit}>
            <label htmlFor="comentario">Deixe seu feedback</label>
            <textarea
                id="comentario"
                placeholder='Escreva um comentário...' // Alterado o placeholder
                value={value}
                onChange={onChange}
            />
            <button type="submit">Comentar</button>
        </form>
    )
}