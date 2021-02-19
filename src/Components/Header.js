import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} meu-container`}>
                <Link className={styles.itens} to="/">Home</Link>
                <Link className={styles.itens} to="/Aluguel">Aluguel</Link>
                <Link className={styles.itens} to="/Compra">Compra</Link>
                <Link className={styles.itens} to="/Ajuda">Ajuda</Link>
                <Link className={styles.itens} to="/Login">Login / Criar</Link>
            </nav>
        </header>
    )
}

export default Header
