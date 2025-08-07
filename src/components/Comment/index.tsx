import styles from './styles.module.css';
import { useState } from 'react';

interface CommentProps {
    nome: string;
    foto: string;
    tempo: string;
    texto: string;
    onDelete: () => void;
}

export default function Comment({nome, foto, tempo, texto, onDelete}: CommentProps) {
    const[likes, setLikes] = useState(0);

    function handleLide(){
        setLikes(Like + 1);
    }

    return (
        <div className={styles.comment}>
            <img src={foto} alt="" className={styles.avatar}/>

            <div className={styles.commentBox}>
                <div className={styles.commentHeader}>
                    <div className={styles.nomeEtempo}>
                        <div className={styles.nome}></div>
                        <div className={styles.tempo}></div>
                    </div>                    
                </div>

                
            </div>
        </div>
    )
}
