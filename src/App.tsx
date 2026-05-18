import { useState, useEffect } from "react";
import { fetchApps } from "./api/apps";
import AppCard from "./components/AppCard/AppCard";
import { App, Filters } from "./types";
import styles from "./App.module.css";

export default function App() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "",
  });

  useEffect(() => {
    const loadApps = async () => {
      try {
        setLoading(true);
        const data = await fetchApps();
        setApps(data);
        setError(null);
      } catch {
        setError("Не удалось загрузить приложения");
      } finally {
        setLoading(false);
      }
    };

    loadApps();
  }, []);

  const categories = ["Все", ...new Set(apps.map((app) => app.category))];

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      filters.search === "" ||
      app.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      app.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "" || filters.category === "Все"
        ? true
        : app.category === filters.category;

    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (category: string) => {
    setFilters({ ...filters, category });
  };

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.loading}>
          <p>⏳ Загрузка приложений...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.page}>
        <div className={styles.error}>
          <p>⚠️ Ошибка</p>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.title}>MiniStore</h1>
        <p className={styles.description}>
          Витрина учебных приложений для повседневных задач
        </p>
      </header>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="🔍 Поиск приложений..."
          value={filters.search}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />

        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`${styles.categoryButton} ${
                filters.category === category ||
                (category === "Все" && filters.category === "")
                  ? styles.active
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <section className={styles.appsGrid}>
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>
      ) : (
        <div className={styles.emptyState}>
          <p>😕 Ничего не найдено</p>
          <p>Попробуйте изменить параметры поиска</p>
        </div>
      )}
    </main>
  );
}