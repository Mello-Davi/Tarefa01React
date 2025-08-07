import styles from './styles.module.css';
import { useState } from 'react';
import lixeira from '../../assets/Trash.png';
import like from '../../assets/Like.png';

interface CommentProps {
    id: number; 
    nome: string;
    foto: string;
    tempo: string;
    texto: string;
    likes: number;
    onDeleteComment: (commentId: number) => void;
    onLikeComment: (commentId: number, isLiking: boolean) => void;
}

export default function Comment({ id, nome, foto, tempo, texto, likes, onDeleteComment, onLikeComment }: CommentProps) {
    const [isLiked, setIsLiked] = useState(false);

    function handleLikeClick() {
        if (isLiked) {
            onLikeComment(id, false);
        } else {
            onLikeComment(id, true);
        }
        setIsLiked(!isLiked);
    }
  
    return (
        <div className={styles.comment}>
            <img src={foto} alt="" className={styles.avatar}/>
            <div className={styles.commentBoxElike}>
                <div className={styles.commentBox}>
                     <div className={styles.commentHeader}>
                        <div className={styles.nomeEtempo}>
                         <div className={styles.nome}><p>{nome}</p></div>
                            <div className={styles.tempo}><p>Cerca de {tempo}</p></div>
                        </div> 
                        <button onClick={() => onDeleteComment(id)} className={styles.btnDelete}>
                            <img src={lixeira} alt="Deletar comentário" />
                        </button>
                     </div>
                    <div className={styles.texto}>{texto}</div>
                </div>
                <div className={styles.like}>
                    <button className={isLiked ? styles.likeButtonLiked : styles.likeButton} onClick={handleLikeClick}>
                        <img src={like} alt="Aplaudir" />
                        <p>Like • {likes}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}