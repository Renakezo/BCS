'use client'
import styles from '../Login.module.css'
import { axiosConfig as axios } from '../../../config/axios.config'
import {useState} from 'react'
import { useRouter } from 'next/navigation'



export default  function Login() {
  const getLogin = async ( login:string, password:string ) => {
      const res = await axios.post('/auth/login', {
        login: login,
        password: password
      })
      return (localStorage.setItem('user', JSON.stringify(res.data)),
      router.push('/profile'))
    } 
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const router = useRouter()

  return (
    <div>
      <div className={styles.main}>
        <a href="/news">
          <img src="/server-icon.png" alt="" height={350} />
        </a>
        <h1 className={styles.title}>BerryCraft </h1>
      </div>
      <div className={styles.center}>
        <form action="" className={styles.login}>
          <input
            type="text"
            placeholder="Логин"
            className={styles.input}
            onChange={e => setInputLogin(e.target.value)}
          />
          <input
            type="password"
            name="pass"
            placeholder="Пароль"
            className={styles.input}
            onChange={e => setInputPassword(e.target.value)}
          />
          <input
            type="button"
            value="Войти"
            className={styles.logbtn}
            onClick={() =>  getLogin(inputLogin, inputPassword)}
          />
        </form>
        <div></div>
      </div>
    </div>
  )
}
