import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <a href="/news"><img src="/server-icon.png" alt="" height={300}/></a>
        <h1 className={styles.title}>
          BerryCraft
        </h1>

        <p className={styles.description}>
          Официальный сайт сервера
        </p>
        <Link href='/auth/login'>
        <input type="button" value="Войти" className={styles.auth}/>
        </Link>
      </main>
    </div>
  )
}
