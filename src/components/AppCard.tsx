import { AppCardProps } from "../types";
import styles from "./AppCard.module.css";

export default function AppCard({ app }: AppCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{app.icon}</div>
      <h3 className={styles.title}>{app.title}</h3>
      <span className={styles.category}>{app.category}</span>
      <p className={styles.description}>{app.description}</p>
      <div className={styles.footer}>
        <span className={styles.rating}>⭐ {app.rating}</span>
        <button className={styles.button}>Подробнее</button>
      </div>
    </article>
  );
}