import styles from './App.module.css';

export default function App() {
  return (
    <div>
      <h1 className={styles.title}>Отечественный софт</h1>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="https://cdn-icons-png.flaticon.com/512/906/906361.png" alt="Яндекс" className={styles.image} />
          <h2>Яндекс</h2>
          <div className={styles.category}>Поисковик</div>
          <p>Поиск информации, карты, музыка и погода</p>
        </div>

        <div className={styles.card}>
          <img src="https://cdn-icons-png.flaticon.com/512/5969/5969059.png" alt="ВКонтакте" className={styles.image} />
          <h2>ВКонтакте</h2>
          <div className={styles.category}>Соцсеть</div>
          <p>Общайся с друзьями, слушай музыку и смотри видео</p>
        </div>

        <div className={styles.card}>
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" className={styles.image} />
          <h2>Telegram</h2>
          <div className={styles.category}>Мессенджер</div>
          <p>Быстрый и безопасный обмен сообщениями</p>
        </div>

        <div className={styles.card}>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt="Mail.ru" className={styles.image} />
          <h2>Mail.ru</h2>
          <div className={styles.category}>Почта</div>
          <p>Электронная почта, облако и новости</p>
        </div>

        <div className={styles.card}>
          <img src="https://cdn-icons-png.flaticon.com/512/5969/5969029.png" alt="Одноклассники" className={styles.image} />
          <h2>Одноклассники</h2>
          <div className={styles.category}>Соцсеть</div>
          <p>Общайся с одноклассниками и старыми друзьями</p>
        </div>

        <div className={styles.card}>
          <img src="https://cdn-icons-png.flaticon.com/512/5554/5554177.png" alt="2ГИС" className={styles.image} />
          <h2>2ГИС</h2>
          <div className={styles.category}>Карты</div>
          <p>Карты городов, организации и маршруты</p>
        </div>
      </div>
    </div>
  );
}