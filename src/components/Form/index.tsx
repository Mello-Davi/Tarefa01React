import styles from './styles.module.css'

export default function Form(){
    return(
        <form className={styles.areaComentario}>
        <label htmlFor="">Deixe seu feedback</label>
        <textarea placeholder='Parabéns, lobinho! Continue assim!' />
        <button>Comentar</button>
      </form>
    )
}