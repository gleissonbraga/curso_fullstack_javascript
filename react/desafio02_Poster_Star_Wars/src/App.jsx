import Imagem from './components/image'
import Title from './components/Title'
import Paragraph from './components/paragraph'
import Button from './components/button'
import styles from './App.module.css'


export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.Image}>
        <Imagem />
      </div>
      <div className={styles.text}>
        <Title />
        <Paragraph />
        <Button />
      </div>
    </div>
  )
}