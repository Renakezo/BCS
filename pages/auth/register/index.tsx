'use client'
import styles from '../Login.module.css'
import { axiosConfig as axios } from '../../../config/axios.config'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const getReg = async ( login:string, password:string, email:string ) => {
    const res = await axios.post('/auth/register', {
      email: email,
      login: login,
      password: password,
    })
    return (localStorage.setItem('user', JSON.stringify(res.data)),
    router.push('/profile'))
  }

  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputEmail, setInputEmail] = useState('')
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
            required
          />
          <input
            type="password"
            name="pass"
            placeholder="Пароль"
            className={styles.input}
            onChange={e => setInputPassword(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={e => setInputEmail(e.target.value)}
            required
          />
          <input
            type="button"
            value="Регистрация"
            className={styles.logbtn}
            onClick={() =>  getReg(inputLogin, inputPassword, inputEmail)}
          />
        </form>
        <div></div>
      </div>
    </div>
  )
}
