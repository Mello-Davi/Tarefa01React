import styles from './styles.module.css'

export default function Header(){
    return(
        <>  
            <header className={styles.header}>
                <img src="../../../public/logo.svg" alt="logo" />
                <h1>Feed</h1>
            </header>
        </>
    )
}