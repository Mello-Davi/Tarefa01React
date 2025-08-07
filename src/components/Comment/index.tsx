// Comment/index.tsx
import styles from './styles.module.css'; 
import { useState } from 'react';
import lixeira from '../../assets/Trash.png'
import like from '../../assets/Like.png'

interface CommentProps {
    id: number;
    nome: string;
    tempo: string;
    texto: string;
    likes: number;
    foto: string;
    onDeleteComment: (commentId: number) => void;
    onLikeComment: (commentId: number) => void;
}

export default function Comment({ id, nome, foto, tempo, texto, likes, onDeleteComment, onLikeComment }: CommentProps) {
    const isAuthor = nome === 'Você'; // Lógica para saber se você é o autor
  
    return (
        <div className={styles.comment}>
            <img src={foto} alt="" className={styles.avatar}/>
            <div className={styles.commentBoxElike}>
                <div className={styles.commentBox}>
                     <div className={styles.commentHeader}>
                        <div className={styles.nomeEtempo}>
                         <div className={styles.nome}><p>{nome}</p></div>
                            <div className={styles.tempo}><p>{tempo}</p></div>
                        </div> 
                        {isAuthor && (
                             <button onClick={() => onDeleteComment(id)} className={styles.btnDelete}>
                                 <img src={lixeira} alt="Deletar comentário" />
                            </button>
                        )}
                     </div>
                    <div className={styles.texto}>{texto}</div>
                </div>
                <div className={styles.like}>
                    <button className={styles.likeButton} onClick={() => onLikeComment(id)}>
                        <img src={like} alt="Aplaudir" />
                    </button>
                    <p>Like • {likes}</p>
                </div>
            </div>
        </div>
    )
}