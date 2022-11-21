'use client'
import { useRouter } from 'next/navigation'
import styles from './profile.module.css'

export default function Cabinet() {
    const user = JSON.parse(localStorage.user)
    const router = useRouter();
    return(
    <div>
        <div className={styles.mainblock}>
                <h1 className={styles.profileh1}>Кабинет игрока {user.user.login}</h1>
            <div className={styles.main}>
                <div className={styles.skin}>
                    <h2>Скин</h2>
                    <div className={styles.skin_preview}>

                    </div>
                </div>
                <div className={styles.playerdata}>
                    <h2>Данные</h2>
                    <div className={styles.data}>
                        <p>Email: {user.user.email}</p>
                        <p>Дата регистрации: </p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className={styles.outbuttondiv}>
                <button className={styles.outbutton} onClick={() => { localStorage.removeItem('user') ,router.push('/auth/login')}}>Выйти из аккаунта</button>
            </div>
        </div>
    </div>
    )
}