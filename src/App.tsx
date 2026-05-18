import { useState, useEffect } from 'react';
import { fetchApps } from './api/apps';
import AppCard from './components/AppCard/AppCard';
import { App as AppType, Filters } from './types';
import styles from './App.module.css';

export default function App() {
  const [apps, setApps] = useState<AppType[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({ search: '', category: '' });

  useEffect(() => {
    fetchApps().then(data => {
      setApps(data);
      setLoading(false);
    });
  }, []);

  const categories = ["Все", "Мессенджеры", "Соцсети", "Карты", "Почта"];

  const filteredApps = apps.filter(app => {
    const matchSearch = filters.search === '' || app.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchCategory = filters.category === '' || filters.category === 'Все' || app.category === filters.category;
    return matchSearch && matchCategory;
  });

  if (loading) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.title}>MiniStore</h1>
        <p className={styles.description}>Витрина приложений</p>
      </header>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Поиск..."
          value={filters.search}
          onChange={e => setFilters({ ...filters, search: e.target.value })}
          className={styles.searchInput}
        />

        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilters({ ...filters, category: cat })}
              className={`${styles.categoryButton} ${
                filters.category === cat || (cat === 'Все' && filters.category === '') ? styles.active : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className={styles.appsGrid}>
          {filteredApps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>😕 Ничего не найдено</p>
          <p>Попробуйте изменить параметры поиска</p>
        </div>
      )}
    </main>
  );
}