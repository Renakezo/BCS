import Link from 'next/link'
import styles from './hf.module.css'

export default function Header() {
    var nav = [{name:'Главная', link:'/'}, {name:'Правила', link:'/rules'}, {name:'Сервера', link:'/servers'}]
    return(
    <div className={styles.main_header}>
        <div className={styles.header}>
            <div className={styles.header_center}>
                <div className={styles.logo}>
                    <Link href={'/'} className={styles.logo}>
                    <img src="server-icon.png" alt="BerryCraft" height={60}/>
                    <h1>Berrycraft</h1>
                    </Link>
                </div>
                <div className="auth">
                    <button className={styles.auth_button}>Войти</button>
                    <button className={styles.reg_button}>Регистрация</button>
                </div>
            </div>
        </div>
        <div className={styles.nav}>
            <div className={styles.nav_center}>
                <ul>
                {nav.map((todo) => (
                    <li key={todo.name}><Link href={todo.link}>{todo.name}</Link></li>
                ))}
                </ul>
            </div>
        </div>
    </div>
    )
}