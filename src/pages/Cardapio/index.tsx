import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './Cardapio.module.scss'
import Buscador from './Buscador'
import { useState } from 'react'
import Filtros from './Filtros'

export default function Cardapio() {

  const [busca, setBusca] = useState('')

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          {/* Padrão VEM do CSS*/}
          A casas do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros />
        </div>
      </section>
    </main>
  )
}
