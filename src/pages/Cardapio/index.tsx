import { ReactComponent as Logo} from '../../assets/logo.svg'
import styles from './Cardapio.module.scss'

export default function Cardapio() {
  return (
    <main>
        <nav className={styles.menu}>
            <Logo />
        </nav>
    </main>
  )
}
