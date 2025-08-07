import styles from './styles.module.css'


export default function ProfileSide() {
    return(
        <>  
        <div className={styles.card}>
            <div className={styles.imagemFundo}></div>

            <div className={styles.profilePhotoContainer}>
                <div className={styles.profilePhoto}></div>
            </div>

            <div className={styles.descricao}>
                 <h2>Davi Mello</h2>
                 <h3>Dev Front-end</h3>
            </div>
        </div>
        </>
    )
}