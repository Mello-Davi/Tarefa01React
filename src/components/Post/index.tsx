// Post/index.tsx
import React, { useState } from 'react';
import Form from '../Form';
import styles from './styles.module.css';
import Comment from '../Comment';
import myProfilePhoto from '../../assets/davi.jpg' 

interface Comentario {
  id: number;
  nome: string;
  tempo: string;
  comentario: string;
  likes: number;
  foto: string; // ✅ Garantir que a foto está na interface
}
interface PostProps {
  nome: string;
  cargo: string;
  tempoPublicacao: string;
  descricao: string;
  foto: string;
  comentariosIniciais: Comentario[];
}

export default function Post({ nome, cargo, tempoPublicacao, descricao, foto, comentariosIniciais }: PostProps) {
  const [comentarios, setComentarios] = useState(comentariosIniciais);
  const [novoComentarioTexto, setNovoComentarioTexto] = useState('');

  function handleCriarNovoComentario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const novoComentario = {
        id: comentarios.length > 0 ? Math.max(...comentarios.map(c => c.id)) + 1 : 1,
        nome: 'Você', // Seu nome de usuário dinâmico
        tempo: 'agora',
        comentario: novoComentarioTexto,
        likes: 0,
        foto: myProfilePhoto // Sua foto de perfil
    };

    setComentarios([...comentarios, novoComentario]);
    setNovoComentarioTexto('');
  }

  function handleDeleteComment(commentId: number) {
      const comentariosSemODeletado = comentarios.filter(comment => comment.id !== commentId);
      setComentarios(comentariosSemODeletado);
  }

  function handleLikeComment(commentId: number) {
      const comentariosComLike = comentarios.map(comment => {
          if (comment.id === commentId) {
              return { ...comment, likes: comment.likes + 1 };
          }
          return comment;
      });
      setComentarios(comentariosComLike);
  }

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
      
      <Form
        onSubmit={handleCriarNovoComentario}
        value={novoComentarioTexto}
        onChange={(e) => setNovoComentarioTexto(e.target.value)}
      />

      <div className={styles.comentariosWrapper}>
        {comentarios.map(comentario => (
          <Comment
            key={comentario.id}
            id={comentario.id}
            nome={comentario.nome}
            tempo={comentario.tempo} // ✅ Passe a prop 'tempo'
            texto={comentario.comentario} // ✅ Passe a prop 'texto'
            likes={comentario.likes}
            foto={comentario.foto} // ✅ A prop 'foto' do objeto de comentário
            onDeleteComment={handleDeleteComment}
            onLikeComment={handleLikeComment}
          />
        ))}
      </div>
    </div>
  );
}