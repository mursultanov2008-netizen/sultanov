import { useState } from 'react'
import styles from './App.module.css'


const apps = [
  {
    id: 1,
    title: 'Яндекс',
    category: 'Поисковик',
    description: 'Поиск информации, карты, музыка и погода',
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'ВКонтакте',
    category: 'Соцсеть',
    description: 'Общайся с друзьями, слушай музыку и смотри видео',
    icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Telegram',
    category: 'Мессенджер',
    description: 'Быстрый и безопасный обмен сообщениями',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Mail.ru',
    category: 'Почта',
    description: 'Электронная почта, облако и новости',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174879.png',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Одноклассники',
    category: 'Соцсеть',
    description: 'Общайся с одноклассниками и старыми друзьями',
    icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969029.png',
    rating: 4.4,
  },
  {
    id: 6,
    title: '2ГИС',
    category: 'Карты',
    description: 'Карты городов, организации и маршруты',
    icon: 'https://cdn-icons-png.flaticon.com/512/5554/5554177.png',
    rating: 4.7,
  },
]


export default function App() {

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')


  const filteredApps = apps.filter(app => {
    
    const matchSearch = app.title
      .toLowerCase()
      .includes(search.toLowerCase())
    
    const matchCategory = category === 'all' || app.category === category
    
    return matchSearch && matchCategory
  })


  const categories = ['all', ...new Set(apps.map(app => app.category))]


  return (
    <div className={styles.page}>

      <header className={styles.hero}>
        <h1 className={styles.title}>
          MiniStore
        </h1>
        <p className={styles.subtitle}>
          Витрина учебных приложений
        </p>
      </header>


      <div className={styles.controls}>

        <input
          type="text"
          placeholder="Поиск приложений..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.filterButtons}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterButton} ${category === cat ? styles.active : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat === 'all' ? 'Все' : cat}
            </button>
          ))}
        </div>

      </div>


      <section className={styles.grid}>
        {filteredApps.map(app => (
          <article key={app.id} className={styles.card}>

            <img
              src={app.icon}
              alt={app.title}
              className={styles.image}
            />

            <h2 className={styles.cardTitle}>
              {app.title}
            </h2>

            <div className={styles.category}>
              {app.category}
            </div>

            <p className={styles.description}>
              {app.description}
            </p>

            <div className={styles.footer}>
              <span className={styles.rating}>
                ★ {app.rating}
              </span>
              <button className={styles.button}>
                Подробнее
              </button>
            </div>

          </article>
        ))}
      </section>

    </div>
  )
}