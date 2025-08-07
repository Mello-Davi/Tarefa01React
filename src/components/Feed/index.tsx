import Post from '../Post'
import styles from './styles.module.css'
import thaisPhoto from '../../assets/perfis/thaisGomes.jpg'
import ricardoFoto from '../../assets/perfis/ricardoSiqueira.jpg'
import felyppePhoto from '../../assets/perfis/felyppeNunes.jpg'
import mellanyPhoto from '../../assets/perfis/mellanyCarter.jpg'
import jessyPhoto from '../../assets/perfis/jessyLogan.jpg'

const thais = {
    id: 1,
    nome: "Thaís Gomes",
    cargo: "Designer",
    tempoPublicacao: "1h",
    descricao: "Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
    foto: thaisPhoto,
    comentarios: []
};

const ricardo = {
    id: 2,
    nome: 'Ricardo Siqueira',
    cargo: 'Dev Back-end',
    tempoPublicacao: '1h',
    descricao: 'Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!',
    foto: ricardoFoto,
    comentarios : [
        {
            id: 1,
            nome: 'Felyppe Nunes',
            tempo: '2h',
            comentario: 'Est aspernatur quis eos natus dicta et internos',
            likes: 7,
            foto: felyppePhoto
        },
        {
            id: 2,
            nome: 'Mellany Carter',
            tempo: '2h',
            comentario: 'Est aspernatur quis eos natus dicta et internos',
            likes: 7,
            foto: mellanyPhoto
        },
        {
            id: 3,
            nome: 'Jessy Logan',
            tempo: '2h',
            comentario: 'Est aspernatur quis eos natus dicta et internos',
            likes: 7,
            foto: jessyPhoto
        },
    ]
}

export default function Feed(){
    return(
        <>  
            <div className={styles.feed}>
                <Post
                     key={thais.id}
                     nome={thais.nome}
                     cargo={thais.cargo}
                     tempoPublicacao={thais.tempoPublicacao}
                     descricao={thais.descricao}
                     foto={thais.foto}
                     comentariosIniciais={thais.comentarios}
                 />
                 <Post
                     key={ricardo.id}
                     nome={ricardo.nome}
                     cargo={ricardo.cargo}
                     tempoPublicacao={ricardo.tempoPublicacao}
                     descricao={ricardo.descricao}
                     foto={ricardo.foto}
                     comentariosIniciais= {ricardo.comentarios}
                 />
            </div>
        </>
    )
}