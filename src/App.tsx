import Feed from './components/Feed'
import Header from './components/Header'
import ProfileSide from './components/ProfileSide'

export default function App() {
  return (
    <>  
      <Header/>
      <main className='container'>
        <ProfileSide/>
        <Feed/>
      </main>
    </>
  )
}


