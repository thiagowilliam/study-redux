import classNames from 'classnames'

import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.svg'
import { Search } from '../Search'

import styles from './Navbar.module.scss'

const iconeProps = {
  color: 'white',
  size: 24,
}

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={Logo} alt="" className={styles.logo} />
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            Pagina Inicial
          </Link>

          <Link
            to="/teste"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            Teste
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Search />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </a>
      </div>
    </nav>
  )
}
