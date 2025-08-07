import styles from './styles.module.css';
import { useState } from 'react';

interface CommentProps {
    nome: string;
    foto: string;
    tempo: string;
    texto: string;
    onDelete: () => void;
}
