import Head from 'next/head'
import styles from './News.module.css'
 
export default function News() {
    return(
        <div>
        <Head>
        <title>BerryCraft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/server-icon.png" />
        </Head>

        <div className={styles.main}>
            Новости Разработки сервера
            
            <p>Стадии разработки:</p>
            <ol>
                <li><s>Разработка сборки</s></li>
                <li><s>Дизайн</s> - Студеникин - молодец!</li>
                <li>Разработка лаунчера на <b>C#</b> (В процессе)</li>
                <li>Разработка сайта на <b>Next.js</b></li>
                <li>Разработка серверной части <b>Nest.js</b></li>
                <li>Разработка сервера Майнкрафт с модами и плагинами на 1.18.2</li>
                <li>Тест сборки</li>
                <li>Аренда VDS сервера (скорее всего timeweb.com)</li>
                <li>Развертывание серверов на сервере</li>
                <li>Настройка сервера</li>
                <li>Тест</li>
                <li>Продакшн</li>
                <li>Реклама</li>
            </ol>
        </div>
        </div>
    )
}
