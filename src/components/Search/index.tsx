import styles from './Search.module.scss'

export function Search() {
  return (
    <div className={styles.busca}>
      <input className={styles.input} placeholder="O que você procura?" />
    </div>
  )
}
