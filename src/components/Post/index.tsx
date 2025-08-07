import Form from '../Form';
import styles from './styles.module.css'

interface PostProps {
  nome: string;
  cargo: string;
  tempoPublicacao: string;
  descricao: string;
  foto: string;
}

export default function Post({ nome, cargo, tempoPublicacao, descricao, foto }: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.headerPost}>
        <div className={styles.nomeEfoto}>
          <img src={foto} alt={`Foto de ${nome}`} className={styles.profilePhoto} />
          <div>
            <h2>{nome}</h2>
            <p>{cargo}</p>
          </div>
        </div>
        <h3>Publicado há {tempoPublicacao}</h3>
      </div>

      <div className={styles.descricao}>
        <p>{descricao}</p>
      </div>

      <Form/>
    </div>
  );
}
