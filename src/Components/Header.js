import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <nav className="meu-container">
                <Link to="/">Home</Link>
                <Link to="/Aluguel">Aluguel</Link>
                <Link to="/Compra">Compra</Link>
                <Link to="/Ajuda">Ajuda</Link>
                <Link to="/Login">Login / Criar</Link>
            </nav>
        </div>
    )
}

export default Header
